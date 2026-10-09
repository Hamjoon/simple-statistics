#!/usr/bin/env python3
"""Summarize the frozen developer suite's per-file TAP output."""

import argparse
import csv
import json
import re
from pathlib import Path


def parse_exit_codes(path: Path) -> dict[str, int]:
    result = {}
    for line in path.read_text().splitlines():
        match = re.fullmatch(r"(.+) exit=(\d+)", line)
        if not match:
            raise ValueError(f"Unexpected exit-code line: {line!r}")
        result[match.group(1)] = int(match.group(2))
    return result


def parse_subtests(lines):
    """Match each TAP subtest heading to its result at the same indentation."""
    rows = []
    active = []
    for line in lines:
        heading = re.match(r'^(\s*)# Subtest: (.*)$', line)
        result = re.match(r'^(\s*)(not ok|ok)\s+\d+\s+-\s+(.*?)(?:\s+# time=.*)?$', line)
        if heading:
            row = {'subtestName': heading.group(2), 'status': 'not ok', 'okCount': 0, 'notOkCount': 0,
                   '_indent': len(heading.group(1))}
            rows.append(row)
            active.append(row)
        elif result:
            indent, kind = len(result.group(1)), result.group(2)
            for row in active:
                if indent > row['_indent']:
                    row['okCount' if kind == 'ok' else 'notOkCount'] += 1
            for j in range(len(active) - 1, -1, -1):
                if active[j]['_indent'] == indent:
                    active[j]['status'] = kind
                    active = active[:j]
                    break
    for row in rows:
        del row['_indent']
    return rows


def summarize(directory: Path, baseline: Path | None = None) -> dict:
    exit_codes = parse_exit_codes(directory / "exit-codes.txt")
    files = []
    baseline_rows = {}
    if baseline:
        with baseline.open(newline='') as stream:
            for row in csv.DictReader(stream):
                baseline_rows.setdefault(row['file'], []).append(row)
    subtest_rows = []
    for name, exit_code in sorted(exit_codes.items()):
        tap_file = directory / f"{name}.tap"
        lines = tap_file.read_text(errors="replace").splitlines()
        filename = f"{name}.test.js"
        parsed = parse_subtests(lines)
        if baseline:
            expected = baseline_rows.get(filename)
            if expected is None:
                raise ValueError(f'File not in baseline: {filename}')
            if len(parsed) > len(expected):
                raise ValueError(f'Extra subtests in {filename}: {len(parsed)} > {len(expected)}')
            for index, entry in enumerate(expected):
                value = parsed[index] if index < len(parsed) else {'subtestName': entry['subtestName'],
                    'status': 'load-fail' if exit_code and not lines else 'not ok', 'okCount': 0, 'notOkCount': 0}
                subtest_rows.append({'file': filename, 'subtestIndex': index + 1, **value})
        else:
            subtest_rows += [{'file': filename, 'subtestIndex': i, **value} for i, value in enumerate(parsed, 1)]
        files.append(
            {
                "file": filename,
                "exitCode": exit_code,
                "ok": sum(bool(re.match(r"^\s*ok\s+\d+\b", line)) for line in lines),
                "notOk": sum(bool(re.match(r"^\s*not ok\s+\d+\b", line)) for line in lines),
                "subtests": sum(bool(re.match(r"^\s*# Subtest:", line)) for line in lines),
            }
        )
    observed = {path.stem for path in directory.glob("*.tap")}
    if observed != set(exit_codes):
        raise ValueError(f"TAP/exit-code mismatch: {observed ^ set(exit_codes)}")
    totals = {
        "files": len(files),
        "nonzeroExits": sum(row["exitCode"] != 0 for row in files),
        "ok": sum(row["ok"] for row in files),
        "notOk": sum(row["notOk"] for row in files),
        "subtests": sum(row["subtests"] for row in files),
    }
    with (directory / 'dev-subtests.csv').open('w', newline='') as stream:
        writer = csv.DictWriter(stream, fieldnames=['file', 'subtestIndex', 'subtestName', 'status', 'okCount', 'notOkCount'])
        writer.writeheader(); writer.writerows(subtest_rows)
    return {"totals": totals, "files": files}


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("directory", type=Path)
    parser.add_argument('--baseline', type=Path)
    args = parser.parse_args()
    summary = summarize(args.directory, args.baseline)
    (args.directory / "summary.json").write_text(json.dumps(summary, indent=2) + "\n")
    rows = [
        "# Developer test baseline at t",
        "",
        "| File | Exit | ok | not ok | Subtests |",
        "| --- | ---: | ---: | ---: | ---: |",
    ]
    for row in summary["files"]:
        rows.append(
            f"| {row['file']} | {row['exitCode']} | {row['ok']} | "
            f"{row['notOk']} | {row['subtests']} |"
        )
    total = summary["totals"]
    rows.append(
        f"| **Total ({total['files']} files)** | **{total['nonzeroExits']} nonzero** | "
        f"**{total['ok']}** | **{total['notOk']}** | **{total['subtests']}** |"
    )
    rows.append("")
    (args.directory / "summary.md").write_text("\n".join(rows))
    print(json.dumps(total))


if __name__ == "__main__":
    main()

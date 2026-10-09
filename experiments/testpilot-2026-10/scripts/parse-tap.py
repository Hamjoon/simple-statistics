#!/usr/bin/env python3
"""Summarize the frozen developer suite's per-file TAP output."""

import argparse
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


def summarize(directory: Path) -> dict:
    exit_codes = parse_exit_codes(directory / "exit-codes.txt")
    files = []
    for name, exit_code in sorted(exit_codes.items()):
        tap_file = directory / f"{name}.tap"
        lines = tap_file.read_text(errors="replace").splitlines()
        files.append(
            {
                "file": f"{name}.test.js",
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
    return {"totals": totals, "files": files}


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("directory", type=Path)
    args = parser.parse_args()
    summary = summarize(args.directory)
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

#!/usr/bin/env python3
"""Analyze saved TestPilot generation artifacts; makes no model calls."""

import argparse
import collections
import csv
import json
import re
from pathlib import Path


EXP = Path(__file__).resolve().parents[1]
RESULTS = EXP / "results"
REFINER_LABELS = {
    "FunctionBodyIncluder": "body",
    "SnippetIncluder": "snippets",
    "DocCommentIncluder": "doc comment",
    "RetryWithError": "retry",
}


def load(path):
    return json.loads(path.read_text())


def category(test):
    """Same failure classification and precedence as the zod analyzer."""
    error = test.get("err") or {}
    message = str(error.get("stack", "")) + " " + str(error.get("message", ""))
    if "AssertionError" in message:
        return "assertion"
    if error.get("code") in ("ENOENT", "EACCES", "EISDIR", "EEXIST", "ENOTEMPTY"):
        return "file-system"
    if any(
        marker in message
        for marker in (
            "TypeError", "ReferenceError", "SyntaxError", "Invalid syntax",
            "done() invoked with non-Error", "Maximum call stack size exceeded",
        )
    ):
        return "correctness"
    if "Timeout of" in message or error.get("code") == "ERR_MOCHA_TIMEOUT":
        return "timeout"
    return "other"


def refiner_combination(prompt):
    """Distinct immediate provenance labels, as in zod analyze-gen.py."""
    return "+".join(sorted({part["refiner"] for part in prompt["provenance"]})) or "Base"


def friendly_combination(raw):
    if raw == "Base":
        return "base"
    return " + ".join(REFINER_LABELS.get(part, part) for part in raw.split("+"))


def table(lines, headings, rows):
    lines.append("| " + " | ".join(headings) + " |")
    lines.append("| " + " | ".join("---" for _ in headings) + " |")
    for row in rows:
        lines.append("| " + " | ".join(str(value).replace("|", "\\|").replace("\n", " ") for value in row) + " |")
    lines.append("")


def suspicious_source(source):
    reasons = []
    for line in source.splitlines():
        if re.search(r"\bsimple_statistics(?:\.[A-Za-z_$][\w$]*)?\s*=(?!=)", line):
            if not re.match(r"\s*(?:let|const|var)\s+simple_statistics\s*=\s*require\(['\"]simple-statistics['\"]\)", line):
                reasons.append("package reassignment/stub")
    allowed = {"mocha", "assert", "simple-statistics"}
    for module in re.findall(r"\brequire\s*\(\s*['\"]([^'\"]+)['\"]\s*\)", source):
        if module not in allowed:
            reasons.append(f"other require: {module}")
    return sorted(set(reasons))


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--runs", nargs="+", required=True, help="Result directory names in report order")
    parser.add_argument("--api", type=Path, default=RESULTS / "explore-native/api.json")
    parser.add_argument("--output-dir", type=Path, default=RESULTS)
    parser.add_argument("--prefix", default="gen")
    args = parser.parse_args()
    args.output_dir.mkdir(parents=True, exist_ok=True)
    population = load(args.api)
    api_paths = [entry["accessPath"] for entry in population]
    by_function = {path: [] for path in api_paths}
    reports = [(run, load(RESULTS / run / "report.json")) for run in args.runs]
    prompts = {}
    tests = []
    for run, report in reports:
        prompt_data = load(RESULTS / run / "prompts.json")["prompts"]
        for prompt in prompt_data:
            prompts[(run, prompt["id"])] = prompt
        for test in report["tests"]:
            if test["api"] not in by_function:
                raise ValueError(f"Test API absent from population: {test['api']}")
            item = dict(test, run=run)
            tests.append(item)
            by_function[test["api"]].append(item)
        stats = report["stats"]
        assert len(report["tests"]) == stats["nrTests"], run
        for status, key in (("PASSED", "nrPasses"), ("FAILED", "nrFailures"), ("PENDING", "nrPending"), ("OTHER", "nrOther")):
            assert sum(test["status"] == status for test in report["tests"]) == stats[key], (run, status)
    for test in tests:
        assert all((test["run"], prompt_id) in prompts for prompt_id in test["promptIds"]), test["testName"]

    def test_combinations(test):
        return sorted({refiner_combination(prompts[(test["run"], prompt_id)]) for prompt_id in test["promptIds"]})

    statuses = collections.Counter(test["status"] for test in tests)
    passing = [
        {key: test[key] for key in ("run", "testName", "api", "testFile")}
        for test in tests if test["status"] == "PASSED"
    ]
    (args.output_dir / f"{args.prefix}-passing.json").write_text(json.dumps(passing, indent=2) + "\n")
    failure_categories = collections.Counter(category(test) for test in tests if test["status"] == "FAILED")
    invalid_syntax = sum(
        "Invalid syntax" in str((test.get("err") or {}).get("message", ""))
        for test in tests if test["status"] == "FAILED"
    )
    prompt_counts = collections.Counter(refiner_combination(prompt) for prompt in prompts.values())
    passing_by_refiner = collections.Counter()
    tests_by_refiner = collections.Counter()
    for test in tests:
        for combination in test_combinations(test):
            tests_by_refiner[combination] += 1
            if test["status"] == "PASSED":
                passing_by_refiner[combination] += 1
    suspicious = []
    with (args.output_dir / f"{args.prefix}-tests.csv").open("w", newline="") as stream:
        writer = csv.writer(stream)
        writer.writerow(["run", "testId", "testFile", "api", "status", "category", "promptIds"])
        for test in tests:
            run = test["run"]
            source = (RESULTS / run / "tests" / test["testFile"]).read_text(errors="replace")
            reasons = suspicious_source(source)
            if reasons:
                suspicious.append({"run": run, "testFile": test["testFile"], "api": test["api"], "reasons": reasons})
            writer.writerow([
                run, test["testName"], test["testFile"], test["api"], test["status"],
                category(test) if test["status"] == "FAILED" else "",
                json.dumps([f"{run}:{prompt_id}" for prompt_id in test["promptIds"]]),
            ])

    totals = {
        "functions": len(population),
        "functionsWithTests": sum(bool(items) for items in by_function.values()),
        "functionsWithPasses": sum(any(item["status"] == "PASSED" for item in items) for items in by_function.values()),
        "prompts": len(prompts),
        "tests": len(tests),
        "passingTests": len(passing),
        "passRate": len(passing) / len(tests) if tests else 0,
        "statuses": dict(statuses),
        "invalidSyntaxFailures": invalid_syntax,
        "suspiciousTests": len(suspicious),
    }
    per_function = [
        {
            "api": path,
            "prototypeMethod": ".prototype." in path,
            "tests": len(by_function[path]),
            "passing": sum(item["status"] == "PASSED" for item in by_function[path]),
        }
        for path in api_paths
    ]
    output = {
        "runs": args.runs,
        "metaData": reports[0][1]["metaData"],
        "statsByRun": {run: report["stats"] for run, report in reports},
        "totals": totals,
        "perFunction": per_function,
        "failureCategories": {key: failure_categories[key] for key in ("assertion", "file-system", "correctness", "timeout", "other")},
        "provenancePrompts": dict(sorted(prompt_counts.items())),
        "provenanceTests": dict(sorted(tests_by_refiner.items())),
        "provenancePassingTests": dict(sorted(passing_by_refiner.items())),
        "suspiciousTests": suspicious,
        "requestFailuresByRun": {run: (RESULTS / run / "stdout.txt").read_text(errors="replace").count("Failed to get completions") for run in args.runs},
        "nullCompletionsByRun": {run: (RESULTS / run / "stdout.txt").read_text(errors="replace").count("Null completion") for run in args.runs},
    }
    (args.output_dir / f"{args.prefix}-analysis.json").write_text(json.dumps(output, indent=2) + "\n")
    lines = [
        "# Generation analysis",
        "",
        "Runs: " + ", ".join(f"`{run}`" for run in args.runs) + ". All counts derive from saved artifacts. Refiner combinations are the distinct immediate provenance labels of a prompt, as in the zod analyzer. A deduplicated test may trace to several prompts and is counted once per distinct combination, so combination rows can overlap.",
        "",
    ]
    table(lines, ["Metric", "Value"], [(key, f"{value:.1%}" if key == "passRate" else value) for key, value in totals.items() if key != "statuses"])
    lines += ["## Per function", ""]
    table(lines, ["API", "Prototype method", "Tests", "Passing"], [
        (row["api"], "yes" if row["prototypeMethod"] else "", row["tests"], row["passing"])
        for row in per_function
    ])
    lines += ["## Failure categories", ""]
    table(lines, ["Category", "Failing tests"], [(name, failure_categories[name]) for name in ("assertion", "file-system", "correctness", "timeout", "other")])
    lines += [f"`Invalid syntax` is included in correctness: **{invalid_syntax}** tests.", ""]
    lines += ["## Recorded prompt provenance", ""]
    table(lines, ["Combination", "Prompts", "Tests tracing here", "Passing tests tracing here"], [
        (friendly_combination(raw), prompt_counts[raw], tests_by_refiner[raw], passing_by_refiner[raw])
        for raw in sorted(prompt_counts)
    ])
    lines += [
        "## Possible package stubs or other requires", "",
        f"**{len(suspicious)}** test files match the source scan. The scan looks for assignment to `simple_statistics` or one of its properties, or a `require(...)` outside mocha, assert, and simple-statistics. These are candidates for manual inspection, not confirmed stubs.",
        "",
    ]
    table(lines, ["Run", "Test file", "API", "Reason"], [
        (item["run"], item["testFile"], item["api"], "; ".join(item["reasons"])) for item in suspicious
    ])
    (args.output_dir / f"{args.prefix}-analysis.md").write_text("\n".join(lines) + "\n")

    paper = [
        "# Generation compared with the TestPilot paper", "",
        "| Metric | Paper, simple-statistics | This run |",
        "| --- | ---: | ---: |",
        f"| Generated tests | 353 | {len(tests)} |",
        f"| Passing tests | 250 | {len(passing)} |",
        f"| Pass rate | 70.9% | {totals['passRate']:.1%} |",
        "| Statement coverage | 87.8% | Part 3 |",
        "| Branch coverage | 71.3% | Part 3 |",
        "",
        "Descriptive comparison only: this run uses a different tool revision, model, and adaptive prompt mechanism. Coverage is deferred to Part 3.",
        "",
    ]
    (args.output_dir / f"{args.prefix}-vs-paper.md").write_text("\n".join(paper))
    print(json.dumps(totals))


if __name__ == "__main__":
    main()

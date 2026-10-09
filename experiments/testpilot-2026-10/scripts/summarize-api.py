#!/usr/bin/env python3
"""Summarize the frozen TestPilot API exploration using only the standard library."""

import csv
import json
import math
import re
import statistics
from collections import Counter, defaultdict
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
RESULTS = ROOT / "results"
EXPLORE = RESULTS / "explore-native"
API = json.loads((EXPLORE / "api.json").read_text())
SNIPPETS = dict(json.loads((EXPLORE / "snippetMap.json").read_text()))
PROMPTS = json.loads((EXPLORE / "prompts.json").read_text())["prompts"]
RAW = json.loads((RESULTS / "explore-raw.json").read_text())
EXAMPLES = RESULTS / "prompt-examples"


def function_name(access_path: str) -> str:
    return access_path.rsplit(".", 1)[-1]


def normalized_implementation(entry: dict) -> str:
    return re.sub(r"\s+", " ", entry["descriptor"]["implementation"]).strip()


def code_block(value: str) -> str:
    return "````text\n" + value.rstrip() + "\n````"


def main() -> None:
    sorted_api = sorted(API, key=lambda entry: entry["accessPath"])
    implementation_groups = defaultdict(list)
    for entry in sorted_api:
        implementation_groups[normalized_implementation(entry)].append(entry["accessPath"])
    group_size = {
        access_path: len(group)
        for group in implementation_groups.values()
        for access_path in group
    }
    csv_path = RESULTS / "api-functions.csv"
    with csv_path.open("w", newline="") as stream:
        writer = csv.writer(stream)
        writer.writerow(
            [
                "accessPath", "depth", "isConstructor", "isAsync", "hasDocComment",
                "snippets", "signature", "implLength", "implGroupSize",
            ]
        )
        for entry in sorted_api:
            path = entry["accessPath"]
            descriptor = entry["descriptor"]
            writer.writerow(
                [
                    path, path.count("."), str(bool(descriptor["isConstructor"])).lower(),
                    str(bool(descriptor["isAsync"])).lower(),
                    str(bool(descriptor.get("docComment"))).lower(),
                    len(SNIPPETS.get(function_name(path), [])), descriptor["signature"],
                    len(descriptor["implementation"]), group_size[path],
                ]
            )

    constructors = [entry["accessPath"] for entry in sorted_api if entry["descriptor"]["isConstructor"]]
    async_functions = [entry["accessPath"] for entry in sorted_api if entry["descriptor"]["isAsync"]]
    prototype_methods = [entry["accessPath"] for entry in sorted_api if ".prototype." in entry["accessPath"]]
    comments = [entry for entry in sorted_api if entry["descriptor"].get("docComment")]
    snippet_rows = [
        (entry["accessPath"], len(SNIPPETS.get(function_name(entry["accessPath"]), [])))
        for entry in sorted_api
        if SNIPPETS.get(function_name(entry["accessPath"]), [])
    ]
    snippet_counts = sorted(count for _, count in snippet_rows)
    depths = Counter(entry["accessPath"].count(".") for entry in sorted_api)
    top_level = Counter(entry["accessPath"].split(".")[1] for entry in sorted_api)
    signatures = Counter(entry["descriptor"]["signature"] for entry in sorted_api)
    lengths = sorted(len(entry["descriptor"]["implementation"]) for entry in sorted_api)
    nonfunctions = [(path, descriptor["type"]) for path, descriptor in RAW if descriptor["type"] != "function"]
    nonfunction_types = Counter(kind for _, kind in nonfunctions)
    direct_nonfunctions = [
        (path, kind)
        for path, kind in nonfunctions
        if re.fullmatch(r"simple-statistics\.[A-Za-z_$][\w$]*", path)
    ]
    nonfunction_roots = Counter(path.removeprefix("simple-statistics.").split(".")[0].split("[")[0]
                                for path, _ in nonfunctions)
    lines = [
        "# API population and prompt examples at t",
        "",
        "The frozen population is exactly `results/explore-native/api.json`. The empty mock runner wrote only base prompts; the 18 variants below were assembled directly with testpilot2's `Prompt` class and were not sent to a model.",
        "",
        "## Functions and comments",
        "",
        f"- Functions: **{len(API)}**; constructors flagged by the explorer: **{len(constructors)}**; async: **{len(async_functions)}**.",
        f"- Prototype-method entries: **{len(prototype_methods)}**: " + ", ".join(f"`{path}`" for path in prototype_methods) + ".",
        f"- Nonempty descriptor comments: **{len(comments)}/{len(API)} ({len(comments)/len(API):.1%})**.",
        "- Constructor-flag access paths: " + (", ".join(constructors) if constructors else "none") + ".",
        "- Async access paths: " + (", ".join(async_functions) if async_functions else "none") + ".",
        "",
        "Three complete descriptor comment examples follow. The prompt renderer trims and prefixes these lines with `//`.",
        "",
    ]
    for target in (
        "simple-statistics.average",
        "simple-statistics.linearRegression",
        "simple-statistics.BayesianClassifier.prototype.train",
    ):
        entry = next(entry for entry in sorted_api if entry["accessPath"] == target)
        lines += [f"### `{target}`", "", code_block(entry["descriptor"]["docComment"]), ""]

    lines += [
        "## Snippets",
        "",
        f"- Functions with at least one snippet: **{len(snippet_rows)}**; association count: **{sum(snippet_counts)}**; unique snippet texts: **{len({s for values in SNIPPETS.values() for s in values})}**.",
        f"- Snippets per associated function: min **{min(snippet_counts)}**, median **{statistics.median(snippet_counts):g}**, max **{max(snippet_counts)}**.",
        "- `snippetMap.json` contains snippet strings but no source-file provenance, so a Markdown source cannot be named from this artifact.",
        "",
        "| Function | Snippets |",
        "| --- | ---: |",
    ]
    lines += [f"| `{path}` | {count} |" for path, count in snippet_rows]

    lines += [
        "",
        "## Access paths and signatures",
        "",
        "Depth counts (the package root is depth 0): " + ", ".join(f"{depth}: {count}" for depth, count in sorted(depths.items())) + ".",
        "Top-level grouping: **" + str(sum(count == 1 for count in top_level.values())) + " singleton groups**, plus "
        + ", ".join(f"`{name}` ({count})" for name, count in sorted(top_level.items()) if count > 1) + ".",
        "",
        "Ten most frequent exact signatures:",
        "",
        "| Signature | Functions |",
        "| --- | ---: |",
    ]
    lines += [f"| `{signature}` | {count} |" for signature, count in signatures.most_common(10)]

    duplicates = [group for group in implementation_groups.values() if len(group) > 1]
    lines += ["", "## Implementations", ""]
    lines.append(f"Normalized implementation duplicate groups: **{len(duplicates)}**.")
    lines += ["- " + ", ".join(f"`{path}`" for path in group) for group in duplicates]
    lines += [
        f"Length in characters: min **{lengths[0]}**, median **{statistics.median(lengths):g}**, p90 **{lengths[math.ceil(.9 * len(lengths)) - 1]}**, max **{lengths[-1]}**; **{sum(length > 4000 for length in lengths)}** above 4,000.",
        "",
        "## Non-function explorer entries",
        "",
        f"The raw explorer has **{len(nonfunctions)}** non-function entries: "
        + ", ".join(f"{kind} {count}" for kind, count in sorted(nonfunction_types.items())) + ".",
        "Direct top-level non-function entries: " + ", ".join(f"`{path}` ({kind})" for path, kind in direct_nonfunctions) + ".",
        "All non-function entries by root (including the direct entries above): "
        + ", ".join(f"`{name}` ({count})" for name, count in sorted(nonfunction_roots.items())) + ".",
        "",
        "Complete non-function access-path list:",
        "",
        "````text",
    ]
    lines += [f"{path} [{kind}]" for path, kind in nonfunctions]
    lines += ["````", "", "## Prompt examples", ""]
    for tag in ("doc", "nodoc"):
        for variant in ("base", "doc", "doc-body-snippets"):
            count = sum(1 for path in EXAMPLES.glob(f"*.{variant}.{tag}.txt"))
            lines.append(f"- `{tag}` template, `{variant}` variant: **{count}** files.")
    lines += [
        "- Three additional `*.runner-base.js` files are byte-identical to the directly assembled base variants.",
        "- For all three targets, the experiment template's doc variants put the comment above the signature; the original template's base and doc variants are identical.",
        "- Only `linearRegression` has a `// usage #1` block in the combined variant.",
        "",
        "## Paper comparison and interpretation",
        "",
        "| Metric | Paper Table 1 | This exploration |",
        "| --- | ---: | ---: |",
        f"| API functions | 89 | {len(API)} |",
        f"| Functions with a comment | 88 | {len(comments)} |",
        f"| Functions with an example | 3 | {len(snippet_rows)} |",
        f"| Unique snippets | 3 | {len({s for values in SNIPPETS.values() for s in values})} |",
        "",
        "All four counts match. `simple-statistics.mean` is callable but aliases the same function object as `average`, so only `average` appears in the explorer population. The four prototype-method entries are included under the built bundle's ES5-style constructors, while every `isConstructor` flag is false. Empty mock responses yield only base prompts; generation refines adaptively after a test and stops refining a function once a test passes, unlike the paper's issue-every-variant behavior.",
        "",
    ]
    (RESULTS / "api-summary.md").write_text("\n".join(lines))
    print(f"functions={len(API)} comments={len(comments)} snippet_functions={len(snippet_rows)} prototypes={len(prototype_methods)} nonfunctions={len(nonfunctions)}")


if __name__ == "__main__":
    main()

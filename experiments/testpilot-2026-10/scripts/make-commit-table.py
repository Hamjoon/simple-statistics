#!/usr/bin/env python3
"""Describe the fixed first-parent commit range without checking out trees."""
import csv
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parents[3]
OUT = Path(__file__).resolve().parents[1] / 'results'

def git(*args):
    return subprocess.check_output(['git', '-C', str(ROOT), *args], text=True).strip()

def main():
    shas = (OUT / 'commits.txt').read_text().splitlines()
    rows = []
    for n, sha in enumerate(shas, 1):
        date, subject = git('log', '-1', '--format=%cs%n%s', sha).split('\n', 1)
        tags = git('tag', '--points-at', sha).replace('\n', ';')
        changed = git('diff-tree', '--no-commit-id', '--name-only', '-r', sha).splitlines()
        tree = set(git('ls-tree', '--name-only', sha).splitlines())
        pkg = any(p == 'package.json' or p == 'index.js' or p.startswith('rollup.config.') or p in ('yarn.lock', 'pnpm-lock.yaml', 'package-lock.json') for p in changed)
        rows.append(dict(n=n, sha=sha, sha7=sha[:7], date=date, subject=subject, tags=tags,
                         src_files=sum(p.startswith('src/') for p in changed),
                         test_files=sum(p.startswith('test/') for p in changed),
                         pkg_changed=int(pkg), lockfile='yarn' if 'yarn.lock' in tree else 'pnpm' if 'pnpm-lock.yaml' in tree else 'none'))
    with (OUT / 'commits.csv').open('w', newline='') as file:
        writer = csv.DictWriter(file, fieldnames=list(rows[0]))
        writer.writeheader(); writer.writerows(rows)
    tagged = [(r['n'], r['tags']) for r in rows if r['tags']]
    print(f'{len(rows)} commits, {len(tagged)} tagged rows: {tagged}')
    print('lockfile switch:', [(r['n'], r['lockfile']) for r in rows if r['n'] == 1 or r['lockfile'] != rows[r['n']-2]['lockfile']])
    if len(tagged) != 15:
        raise SystemExit('Expected 15 tagged commits')

if __name__ == '__main__': main()

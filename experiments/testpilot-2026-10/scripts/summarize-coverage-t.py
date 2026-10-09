#!/usr/bin/env python3
import json
from pathlib import Path
E=Path(__file__).resolve().parents[1]
root=E/'results/coverage-t'
rows=[]
sets={}
for group in ('loading','llm','dev'):
    j=json.loads((root/group/'coverage-summary.json').read_text())
    total=j['total']
    rows.append((group,total))
    sets[group]={p.split('/src/',1)[-1] for p,v in j.items() if '/src/' in p and v['statements']['covered']>0}
mocha=json.loads((root/'llm/mocha.json').read_text())
assert mocha['stats']['passes']==305 and mocha['stats']['failures']==0,mocha['stats']
assert all('exit=0' in x for x in (root/'dev/exit-codes.txt').read_text().splitlines())
out=['# Coverage at t','','All groups use nyc on the built CommonJS bundle with source-map attribution to `src/`.','','| Group | Statements covered/total | Statements % | Branches covered/total | Branches % | Functions % | Lines % |','| --- | ---: | ---: | ---: | ---: | ---: | ---: |']
for name,total in rows:
    def count(k):return f"{total[k]['covered']}/{total[k]['total']}"
    def pct(k):return str(total[k]['pct'])
    out.append(f'| {name} | {count("statements")} | {pct("statements")} | {count("branches")} | {pct("branches")} | {pct("functions")} | {pct("lines")} |')
out += ['| Paper loading | — | 2.6 | — | 0.0 | — | — |','| Paper S | — | 87.8 | — | 71.3 | — | — |','','Mocha S: 305 passes, 0 failures. Developer files: 70 exit 0.','']
for group in ('llm','dev'):
    j=json.loads((root/group/'coverage-summary.json').read_text())
    out += [f'## {group} per-source statement coverage','', '| Source | Covered/total | % |','| --- | ---: | ---: |']
    for p,v in sorted(j.items()):
        if '/src/' in p:
            s=v['statements'];out.append(f'| {p.split("/src/",1)[1]} | {s["covered"]}/{s["total"]} | {s["pct"]} |')
    out.append('')
for a,b in [('llm','dev'),('dev','llm')]:
    difference=sorted(sets[a]-sets[b])
    out.append(f'{a} covers {len(difference)} source files {b} does not: '+(', '.join(difference[:10]) or 'none')+'.')
(root/'coverage-t.md').write_text('\n'.join(out)+'\n')
print('\n'.join(out[:12]))

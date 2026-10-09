#!/usr/bin/env python3
"""Aggregate immutable per-commit results for the two frozen test corpora."""
import csv,json,re,subprocess
from collections import Counter
from pathlib import Path
E=Path(__file__).resolve().parents[1]
R=E/'results'

def readcsv(path):
    with path.open(newline='') as f:return list(csv.DictReader(f))
def writecsv(path,rows,fields):
    with path.open('w',newline='') as f:
        w=csv.DictWriter(f,fieldnames=fields,extrasaction='ignore');w.writeheader();w.writerows(rows)
def keyllm(r):return (r['run'],r['testFile'])
def keydev(r):return (r['file'],int(r['subtestIndex']))
def load(n,sha7):
    p=R/'survival'/f'{n:03d}-{sha7}'
    d=json.loads((p/'status.json').read_text())
    return d, (readcsv(p/'llm/summary.csv') if d['build']=='ok' else []), (readcsv(p/'dev/dev-subtests.csv') if d['build']=='ok' else [])
def failkind(status,message=''):
    if status in ('load-fail','loadfail'):return 'load'
    if 'timed out' in message.lower() or 'timeout' in message.lower():return 'timeout'
    if status in ('pass','ok'):return ''
    if status in ('nopass',):return 'throw'
    if any(x in message.lower() for x in ('assert','expected','equal','strict','deep')):return 'assertion'
    return 'throw'

def main():
    commits=readcsv(R/'commits.csv')
    assert len(commits)==133
    base,bl,bd=load(0,'31f037dd')
    assert base['llm']['pass']==305 and base['dev']['subtests_ok']==309
    lkeys={keyllm(x):x for x in bl};dkeys={keydev(x):x for x in bd}
    assert len(lkeys)==305 and len(dkeys)==309
    alive_l=set(lkeys);alive_d=set(dkeys)
    first_l={};first_d={}
    prior_l={k:'pass' for k in lkeys};prior_d={k:'ok' for k in dkeys}
    rows=[dict(n=0,sha7='31f037d',date='2022-08-12',tags='v7.7.6',build='ok',src_files=0,test_files=0,llm_point=305,llm_cum=305,dev_point_subtests=309,dev_cum_subtests=309,dev_ok_lines=1024,llm_loadfail=0,dev_loadfail=0)]
    events=[];killers=[];nondet=[];buildfail=[]
    events.append(dict(n=0,sha7='31f037d',date='2022-08-12',tags='v7.7.6',subject='anchor t',llm_decrease=0,dev_decrease=0,llm_cum=305,dev_cum=309,build='ok'))
    last_l=prior_l;last_d=prior_d
    for c in commits:
        n=int(c['n']);sha7=c['sha7'];s,ll,dd=load(n,sha7)
        if s['build']=='fail':
            buildfail.append((n,sha7,s.get('reason','')))
            row=dict(n=n,sha7=sha7,date=c['date'],tags=c['tags'],build='fail',src_files=c['src_files'],test_files=c['test_files'],llm_point='',llm_cum=len(alive_l),dev_point_subtests='',dev_cum_subtests=len(alive_d),dev_ok_lines='',llm_loadfail='',dev_loadfail='')
            dec_l=dec_d=0;breakdown=Counter()
        else:
            lm={keyllm(x):x['status'] for x in ll};dm={keydev(x):x['status'] for x in dd}
            assert set(lm)==set(lkeys),(n,'LLM identity mismatch',len(lm))
            assert set(dm)==set(dkeys),(n,'Dev identity mismatch',len(dm))
            new_l={k for k in alive_l if lm[k]!='pass'};new_d={k for k in alive_d if dm[k]!='ok'}
            dec_l=len(new_l);dec_d=len(new_d)
            breakdown=Counter()
            for k in new_l:breakdown[failkind(lm[k],next(x['message'] for x in ll if keyllm(x)==k))]+=1
            dev_rows={keydev(x):x for x in dd}
            for k in new_d:
                if dm[k]=='load-fail': breakdown['load']+=1
                elif int(dev_rows[k]['notOkCount'])>0: breakdown['assertion']+=1
                else: breakdown['throw']+=1
            for k in new_l:first_l[k]=(n,sha7,lm[k])
            for k in new_d:first_d[k]=(n,sha7,dm[k])
            alive_l-=new_l;alive_d-=new_d
            if c['src_files']==c['test_files']==c['pkg_changed']=='0' and (lm!=last_l or dm!=last_d):
                nondet.append(n)
            last_l,last_d=lm,dm
            row=dict(n=n,sha7=sha7,date=c['date'],tags=c['tags'],build='ok',src_files=c['src_files'],test_files=c['test_files'],llm_point=sum(v=='pass' for v in lm.values()),llm_cum=len(alive_l),dev_point_subtests=sum(v=='ok' for v in dm.values()),dev_cum_subtests=len(alive_d),dev_ok_lines=s['dev']['ok_lines'],llm_loadfail=sum(v=='load-fail' for v in lm.values()),dev_loadfail=sum(v=='load-fail' for v in dm.values()))
        rows.append(row)
        if dec_l or dec_d or c['tags']:
            events.append(dict(n=n,sha7=sha7,date=c['date'],tags=c['tags'],subject=c['subject'],llm_decrease=dec_l,dev_decrease=dec_d,llm_cum=len(alive_l),dev_cum=len(alive_d),build=s['build']))
        changed=subprocess.check_output(['git','-C',str(E.parents[1]),'diff-tree','--no-commit-id','--name-only','-r',c['sha']],text=True).strip().replace('\n',';')
        killers.append(dict(n=n,sha7=sha7,date=c['date'],subject=c['subject'],total=dec_l+dec_d,llm_newly_dead=dec_l,dev_newly_dead=dec_d,assertion=breakdown['assertion'],throw=breakdown['throw'],load=breakdown['load'],timeout=breakdown['timeout'],src_files=c['src_files'],test_files=c['test_files'],pkg_changed=c['pkg_changed'],changed_files=changed))
    assert len(rows)==134
    assert all(int(rows[i]['llm_cum'])<=int(rows[i-1]['llm_cum']) and int(rows[i]['dev_cum_subtests'])<=int(rows[i-1]['dev_cum_subtests']) for i in range(1,len(rows)))
    assert sum(r['build']=='ok' for r in rows[1:])+len(buildfail)==133
    assert sum(bool(r['tags']) for r in rows[1:])==15
    writecsv(R/'survival-by-commit.csv',rows,list(rows[0]))
    writecsv(R/'survival-events.csv',events,list(events[0]))
    killers=sorted(killers,key=lambda x:(-x['total'],x['n']))[:10]
    writecsv(R/'survival-killers.csv',killers,list(killers[0]) if killers else ['n'])
    per=[]
    for k,x in lkeys.items():
        first=first_l.get(k)
        per.append(dict(corpus='llm',run=k[0],testFile=k[1],file='',subtestIndex='',subtestName='',api=x['api'],first_dead_n=first[0] if first else 'survived',first_dead_sha7=first[1] if first else '',first_status=first[2] if first else '',head_status=last_l[k]))
    for k,x in dkeys.items():
        first=first_d.get(k)
        per.append(dict(corpus='dev',run='',testFile='',file=k[0],subtestIndex=k[1],subtestName=x['subtestName'],api='',first_dead_n=first[0] if first else 'survived',first_dead_sha7=first[1] if first else '',first_status=first[2] if first else '',head_status=last_d[k]))
    writecsv(R/'survival-per-test.csv',per,list(per[0]))
    plotted=[dict(n=r['n'],llm_percent=round(int(r['llm_cum'])*100/305,3),dev_percent=round(int(r['dev_cum_subtests'])*100/309,3),build=r['build'],tags=r['tags']) for r in rows]
    writecsv(R/'survival-step.csv',plotted,list(plotted[0]))
    svg(plotted)
    head=rows[-1]
    lines=['# Survival over 133 commits','','| Corpus | Point at HEAD | Cumulative at HEAD | Denominator |','| --- | ---: | ---: | ---: |',f'| LLM S | {head["llm_point"]} | {head["llm_cum"]} | 305 |',f'| Developer subtests | {head["dev_point_subtests"]} | {head["dev_cum_subtests"]} | 309 |','',f'Build failures: {len(buildfail)}.']
    lines += [f'- #{n} `{sha7}`: {reason}' for n,sha7,reason in buildfail]
    lines += ['','## ESM switch','', '| Commit | Require target | LLM point/cumulative | Dev point/cumulative | LLM load failures | Dev load failures |','| --- | --- | ---: | ---: | ---: | ---: |']
    for n in (81,82,83):
        c=commits[n-1];s,_,_=load(n,c['sha7']);r=rows[n]
        lines.append(f'| #{n} | `{s.get("require_target","")}` | {r["llm_point"]}/{r["llm_cum"]} | {r["dev_point_subtests"]}/{r["dev_cum_subtests"]} | {r["llm_loadfail"]} | {r["dev_loadfail"]} |')
    lines += ['','Killer failure kinds use recorded LLM messages; a developer `not ok` subtest with a nonzero TAP `notOkCount` is counted as an assertion, and one without it as a throw.','',
              '## Sanity checks','', '- Cumulative counts monotone: pass.','- t row: 305 LLM and 309 Dev subtests.','- 133 commit results or build failures: pass.','- 15 tagged rows: pass.',f'- No-change commit point-status equality: {"pass" if not nondet else "violations at " + ", ".join(map(str,nondet))}.','']
    (R/'survival-summary.md').write_text('\n'.join(lines))
    print('\n'.join(lines[:9]))
    if nondet:
        raise AssertionError(f'No-change commit point-status mismatches: {nondet}')
def svg(rows):
    w,h=1200,500;left,right,top,bottom=65,20,35,45
    X=lambda n:left+(w-left-right)*n/133
    Y=lambda p:top+(h-top-bottom)*(100-p)/100
    parts=[f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}"><rect width="{w}" height="{h}" fill="white"/>']
    for p in (0,25,50,75,100):parts.append(f'<line x1="{left}" x2="{w-right}" y1="{Y(p)}" y2="{Y(p)}" stroke="#ddd"/><text x="{left-8}" y="{Y(p)+4}" text-anchor="end" font-size="12">{p}%</text>')
    for r in rows[1:]:
        if r['build']=='fail':parts.append(f'<rect x="{X(int(r["n"]))-2}" y="{top}" width="4" height="{h-top-bottom}" fill="#f3d8d8"/>')
        if r['tags']:parts.append(f'<line x1="{X(int(r["n"]))}" x2="{X(int(r["n"]))}" y1="{top}" y2="{h-bottom}" stroke="#bbb" stroke-dasharray="2,3"/>')
    for key,color in [('llm_percent','#2563eb'),('dev_percent','#d97706')]:
        d=f'M {X(0)} {Y(float(rows[0][key]))}'
        for r in rows[1:]:d+=f' H {X(int(r["n"]))} V {Y(float(r[key]))}'
        parts.append(f'<path d="{d}" fill="none" stroke="{color}" stroke-width="2.5"/>')
    parts += [f'<text x="{left}" y="20" font-size="18">Cumulative test survival over 133 commits</text>',f'<text x="{w-right}" y="{h-10}" text-anchor="end" font-size="12">Commit number</text>',f'<text x="{left+10}" y="{top+20}" fill="#2563eb">LLM S</text>',f'<text x="{left+95}" y="{top+20}" fill="#d97706">Developer subtests</text>','</svg>']
    (R/'survival-step.svg').write_text(''.join(parts)+'\n')
if __name__=='__main__':main()

import re
s=open('page.html').read()
def rep(old,new,count=1):
    global s
    assert s.count(old)==count,(old[:80],s.count(old))
    s=s.replace(old,new)

# 1 CSS
rep("/* narrower windows","""/* ---------- update news ---------- */
.news{max-width:1000px;border:1px solid var(--line);border-left:4px solid var(--omr);background:var(--surface);border-radius:12px;padding:12px 16px;margin-bottom:20px;display:flex;flex-direction:column;gap:8px}
.nhead{display:flex;flex-wrap:wrap;gap:6px 10px;align-items:center}
.ntitle{font-weight:500}
.ntot{margin-left:auto;font-size:13px;color:var(--muted)}
.nchips{display:flex;flex-wrap:wrap;gap:6px}
.nchip{font-family:var(--f-mono);font-size:12px;padding:2px 8px;border-radius:99px;background:var(--bg);border:1px solid var(--line);white-space:nowrap}
.nchip b{color:var(--muted);font-weight:500;margin-right:3px}
.nchip em{font-style:normal;color:var(--good);margin-left:4px;font-weight:700}
.nfoot{display:flex;flex-wrap:wrap;gap:8px;justify-content:space-between;align-items:center}
.nlist{margin:0;padding:0;list-style:none;display:flex;flex-direction:column;gap:6px;font-size:13.5px;max-height:240px;overflow:auto;border-top:1px solid var(--line);padding-top:8px}

/* ---------- drill ---------- */
.dprog{height:6px;background:var(--line);border-radius:3px;overflow:hidden}
.dprog i{display:block;height:100%;width:0;background:var(--omr);transition:width .3s}
.scene{border:1.5px dashed var(--muted);border-radius:10px;padding:12px 16px;background:var(--bg)}
.scene p{margin:8px 0 0;font-size:16px}
.p1art{display:block;width:100%;max-width:460px;margin:0 auto;border-radius:8px;background:#fff}
.passage.visual{font-family:var(--f-mono);font-size:13px;white-space:pre;overflow-x:auto;max-height:none}
.qq{display:flex;flex-direction:column;gap:10px;padding-top:14px;border-top:1px solid var(--line)}
.opt.pick{border-color:var(--ink);background:var(--bg)}
.opt.pick .b{background:var(--ink);border-color:var(--ink);color:var(--surface)}
.audio{display:flex;gap:8px;flex-wrap:wrap;align-items:center}
.btn.sm{padding:5px 11px;font-size:13px}
.dclock{font-family:var(--f-mono);font-size:18px;font-variant-numeric:tabular-nums}
.dclock.over{color:var(--omr)}
.blk .go{margin-top:8px}
#dBox .passage{max-height:55vh}
.passage .ptbl{width:100%;border-collapse:collapse;font-size:13.5px;line-height:1.4;margin:2px 0 6px;white-space:normal}
.passage .ptbl td{padding:4px 6px 4px 0;border-top:1px solid var(--line);vertical-align:top}
.passage .ptbl td.h{font-weight:700;border-top:0;color:var(--muted);font-size:12.5px}

/* narrower windows""")

# 2 nav
rep('''<button data-v="today" title="오늘의 학습"><span class="k">A</span><span class="lbl">오늘의 학습</span><span class="sl">오늘</span></button>''',
'''<button data-v="today" title="오늘의 학습"><span class="k">A</span><span class="lbl">오늘의 학습</span><span class="sl">오늘</span></button>
    <button data-v="drill" title="문제 풀기"><span class="k">B</span><span class="lbl">문제 풀기</span><span class="sl">문제</span></button>''')
for v,old,new in [('plan','B','C'),('strategy','C','D'),('vocab','D','E'),('grammar','E','F'),('p2','F','G'),('reading','G','H'),('scores','H','I'),('log','I','J')]:
    s=re.sub(r'(<button data-v="%s"[^>]*><span class="k">)%s<'%(v,old),r'\g<1>%s<'%new,s)

# 3 drill section
rep("<!-- B. PLAN -->","""<!-- DRILL -->
<section id="v-drill" hidden>
  <div class="headrow">
    <div>
      <div class="eyebrow" id="dEyebrow">DAY 1</div>
      <h1 class="h1" id="dTitle">문제 풀기</h1>
      <p class="lede" id="dLede"></p>
    </div>
    <div class="row"><span class="dclock" id="dClock"></span><span id="dDayNav" class="row"><button class="btn" id="dPrev" aria-label="이전 날">‹</button><button class="btn" id="dNext" aria-label="다음 날">›</button></span></div>
  </div>
  <div class="seg" id="dMode" style="align-self:flex-start"><button data-m="day">날짜별 문제</button><button data-m="free">파트별 연습</button><button data-m="wrong">오답 복습</button></div>
  <div class="seg" id="dPick" style="align-self:flex-start" hidden></div>
  <div class="dprog"><i id="dProg"></i></div>
  <div class="panel" id="dBox"></div>
</section>

<!-- B. PLAN -->""")

# 2 hours a day
rep('const NSET=Math.ceil(V.length/20);','let NSET=Math.ceil(V.length/20);')
rep("<small>09:20<br>하루 60분</small>","<small>09:20<br>하루 120분</small>")
rep("9.30 — 11.14 · 46일 × 60분 = 46시간","9.30 — 11.14 · 46일 × 120분 = 92시간")
rep('<div class="lab">60분 타이머</div>','<div class="lab">120분 타이머</div>')
rep("'60분 끝. ‘이날 학습 완료’를 눌러주세요.'","'120분 끝. ‘이날 학습 완료’를 눌러주세요.'")
rep("완료 · 누적 ${dn}시간 / 46시간","완료 · 누적 ${dn*2}시간 / 92시간")
rep("const SPLIT={26:[10,37,13],29:[10,37,13],32:[10,37,13],35:[10,37,13],38:[0,45,15],39:[0,46,14],40:[10,27,23],41:[0,45,15],42:[0,46,14],43:[10,27,23],46:[10,20,0]};","const SPLIT={38:[15,60,45],41:[15,60,45],46:[20,40,0]};")
rep("function split(n){return SPLIT[n]||[10,35,15];}","function split(n){return SPLIT[n]||[20,70,30];}")
rep("""function vocabTask(n){
  if(n<=20){const s=Math.ceil(n/2);return n%2?`단어장 세트 ${s} 카드로 외우기 (20개)`:`단어장 세트 ${s} 4지선다 테스트 · 18/20 이상이면 통과`;}
  if(n>=44)return '단어장 ‘다시 볼 단어’ 전체 훑기';
  return `단어장 세트 ${((n-21)%NSET)+1} 재테스트 + 틀린 단어 카드 복습`;}""","""function vocabTask(n){
  if(n<=NSET)return `새 단어: 세트 ${n} 카드로 외우기 (20개)${n>1?` + 세트 ${n-1} 4지선다 테스트 (18/20 통과)`:''}`;
  if(n>=44)return '단어장 ‘다시 볼 단어’ 전체 훑기';
  const a=((n-NSET-1)*2)%NSET+1,b=a%NSET+1;return `세트 ${a}·${b} 재테스트 + ‘다시 볼 단어’ 카드 복습`;}""")
rep("let vs={set:Math.min(NSET,Math.max(1,Math.ceil(Math.min(curDay,20)/2))),","let vs={set:Math.min(NSET,Math.max(1,curDay)),")
# 4 copy
rep("하루 60분은 단어 10분, 핵심 35분, 복습 15분이 기본입니다.","하루 120분은 단어 20분, 핵심 70분, 복습 30분이 기본입니다. 핵심 70분은 ‘문제 풀기’에서 그날 분량을 먼저 풀고, 남은 시간은 결과 화면의 ‘한 세트 더’로 채웁니다. 복습 30분은 틀린 문제 해설·스크립트를 소리 내어 따라 읽는 시간입니다. 책은 필요 없습니다.")
rep("""<div class="eyebrow">교재</div>
    <p style="margin:6px 0 0">플랜의 “기출·하프·실전”은 <b>ETS 토익 정기시험 기출문제집 LC·RC</b>(각 1권)을 기준으로 잡았습니다. 하프는 한 회를 반으로 나눠 풀면 됩니다. 이 사이트의 단어장·문법·Part 2·독해 훈련은 교재와 함께 쓰는 보조 도구입니다.</p>""",
"""<div class="eyebrow">문제 은행 · 책 없이 폰으로</div>
    <p style="margin:6px 0 0" id="bankNote"></p>""")
rep("하프나 실전을 풀고 나면 정답 수를 적으세요. 환산 점수는","앱의 하프·실전 날(D25–D43) 문제를 끝까지 풀면 여기에 자동으로 기록됩니다. 다른 모의고사를 풀었다면 아래에 직접 적으세요. 환산 점수는")

# 5 PLAN
a=s.index("const PLAN=[");b=s.index("const SPLIT=")
s=s[:a]+open('plan.js').read()+"\n"+s[b:]

# 6 bank data
import glob
import subprocess, json, datetime, os
KST=datetime.timezone(datetime.timedelta(hours=9))
NOW=datetime.datetime.now(KST)
NOTES=json.load(open('notes.json')) if os.path.exists('notes.json') else {}
def fdate(f):
    """date a bank file first entered git (KST), or today for a new uncommitted file"""
    if not f.startswith('bank5_'): return '2026-09-30'
    out=subprocess.run(['git','log','--diff-filter=A','--format=%cd','--date=format-local:%Y-%m-%d','--',f],
        capture_output=True,text=True,env={**os.environ,'TZ':'Asia/Seoul'}).stdout.split()
    return out[-1] if out else NOW.strftime('%Y-%m-%d')
LABEL={'bank3.js':'처음 문제 은행','bank4c.js':'1차 확장 (Part 1–7)'}
def snap(f):
    if f not in LABEL and not f.startswith('bank5_'): return ''
    l=LABEL.get(f) or '자동 추가 #'+f[6:9]
    return '\n__snap(%s,%s,%s,%s);\n'%tuple(json.dumps(x,ensure_ascii=False) for x in (f,fdate(f),l,NOTES.get(f,'')))
bank=("const BANKLOG=[];function __snap(f,d,l,n){const q=a=>a.reduce((s,x)=>s+x.q.length,0);"
      "BANKLOG.push({f,d,l,n,c:[P1B.length,P2.length+P2N.length,q(P3B),q(P4B),G.length+G2.length,q(P6B),q(RD)+q(RD2)]});}\n"
      "const BUILD_AT=%s;\n"%json.dumps(NOW.strftime('%m.%d %H:%M').lstrip('0')))
bank+=''.join(open(f).read()+snap(f) for f in sorted(glob.glob('bank*.js')))+open('vocab2.js').read()+open('p1art.js').read()
bank+="\n{const seen=new Set(),u=V.filter(w=>!seen.has(w[0])&&seen.add(w[0]));V.splice(0,V.length,...u);NSET=Math.ceil(V.length/20);}\n"

rep("/* ================= helpers ================= */",bank+"\n/* ================= helpers ================= */")

# 7 state
rep("vt:[],scores:[],updatedAt:0};}","vt:[],scores:[],runs:{},seen:{},dw:{},pstat:{},dr:[],updatedAt:0};}")
rep("for(const k of ['gram','p2','rd','vt'])b[k]=","for(const k of ['gram','p2','rd','vt','dr'])b[k]=")
rep("function trim(){for(const k of ['gram','p2','rd','vt'])","function trim(){for(const k of ['gram','p2','rd','vt','dr'])")
rep("||s.scores.length||s.vt.length;}","||s.scores.length||s.vt.length||Object.keys(s.runs).length;}")
rep("return {lc:e.lc==null?null:est('lc',e.lc,n),rc:e.rc==null?null:est('rc',e.rc,n)};}","return {lc:e.lc==null?null:est('lc',e.lc,e.nl||n),rc:e.rc==null?null:est('rc',e.rc,e.nr||n)};}")
rep("<td>${e.k==='full'?'실전':'하프'}</td><td class=\"num\">${e.lc==null?'–':e.lc+'/'+n}</td><td class=\"num\">${e.rc==null?'–':e.rc+'/'+n}</td>",
    "<td>${e.k==='full'?'실전':'하프'}${e.auto?' · 앱':''}</td><td class=\"num\">${e.lc==null?'–':e.lc+'/'+(e.nl||n)}</td><td class=\"num\">${e.rc==null?'–':e.rc+'/'+(e.nr||n)}</td>")
rep("아직 기록이 없습니다. Day 25 하프 LC ①부터 여기에 적으세요.","아직 기록이 없습니다. Day 25 하프 LC ①을 ‘문제 풀기’에서 끝내면 자동으로 기록됩니다.")

# routing
rep("const VIEWS=['today','plan',","const VIEWS=['today','drill','plan',")
rep("function go(v){if(!VIEWS.includes(v))v='today';view=v;","function go(v){if(!VIEWS.includes(v))v='today';if(view==='drill'&&v!=='drill')ttsStop();view=v;")
rep("({today:renderToday,plan:renderPlan,","({today:renderToday,drill:()=>renderDrill(false),plan:renderPlan,")

# today blocks
rep("""$('#tBlocks').innerHTML=blocksFor(n).map(([m,l,t])=>`<div class="blk"><div class="min">${m}<small>분</small></div><div><div class="lab">${l}</div><p>${esc(t)}</p></div></div>`).join('');""",
"""const run=S.runs['d'+n],rq=run?runQs(run):[],rd=rq.filter(q=>q.id in run.sel).length;
  const goBtn=l=>l==='핵심'?`<div class="row go"><button class="btn primary sm" data-drill>${!run?'▶ 문제 풀기':run.fin?'결과 보기':'▶ 이어서 풀기'}</button><span class="small muted">${!run?esc(specText(DS[n-1].it))+' · 끝나면 ‘한 세트 더’로 70분 채우기':run.fin?`${runScore(run).c}/${rq.length} 정답 · ‘한 세트 더’로 이어서`:`${rd}/${rq.length}문항 풀었음`}</span></div>`:l==='단어'?`<div class="row go"><button class="btn sm" data-vocab>단어장 열기</button></div>`:'';
  $('#tBlocks').innerHTML=blocksFor(n).map(([m,l,t])=>`<div class="blk"><div class="min">${m}<small>분</small></div><div><div class="lab">${l}</div><p>${esc(t)}</p>${goBtn(l)}</div></div>`).join('');
  $$('#tBlocks [data-drill]').forEach(b=>b.onclick=()=>openDrill(n));$$('#tBlocks [data-vocab]').forEach(b=>b.onclick=()=>go('vocab'));""")

# weakest part hint on today
rep("  $('#tWeak').innerHTML=html+'</p>';","  $('#tWeak').innerHTML=html+'</p>';\n  const wp=weakPart();if(wp&&wp.r<0.8)$('#tWeak').innerHTML+=`<p style=\"margin:6px 0 0\">문제 풀기 기록으로는 <b>${PNAME[wp.p]}</b> 정답률이 ${Math.round(wp.r*100)}%로 가장 낮습니다. 시간이 남으면 ‘문제 풀기 → 파트별 연습’에서 이 파트를 한 세트 더 푸세요.</p>`;")
# strategy bank note
rep("function renderStrategy(){","""function renderStrategy(){
  const cnt=p=>U.filter(u=>u.part===p).reduce((a,u)=>a+u.qs.length,0);
  $('#bankNote').innerHTML=`책은 없어도 됩니다. 앱 안에 <b>${BANKN}문항</b>이 들어 있습니다(Part 1 ${cnt(1)} · Part 2 ${cnt(2)} · Part 3 ${cnt(3)} · Part 4 ${cnt(4)} · Part 5 ${cnt(5)} · Part 6 ${cnt(6)} · Part 7 ${cnt(7)}). ‘문제 풀기’가 날마다 안 푼 문제부터 골라 주고, 매일 끝에 전날까지 틀린 문제 몇 개를 다시 내 줍니다(간격 복습). 빨리 끝나면 결과 화면의 ‘한 세트 더’로 같은 유형을 더 풀 수 있습니다. 뒤쪽 하프·실전 날에는 전에 푼 문제가 일부 다시 섞여 나옵니다. 듣기는 폰의 영어 음성(TTS)으로 읽어 주는데, 실제 시험 성우(미국·영국·호주·캐나다 발음)보다 기계적입니다. 실제 시험장 소리에 익숙해지려면 시험 1–2주 전에 ETS 공식 LC 음원을 한두 번 들어 보는 것을 권합니다.`;""")

# log: history + drill wrongs
rep("...S.vt.map(g=>['단어',g])]","...S.vt.map(g=>['단어',g]),...S.dr.map(g=>['문제',g])]")
rep("""...RI.filter(x=>S.rdwrong[x.id]).map(x=>['독해 · '+x.tag,x])];""","""...RI.filter(x=>S.rdwrong[x.id]).map(x=>['독해 · '+x.tag,x]),
    ...U.filter(u=>!'gpr'.includes(u.id[0])).flatMap(u=>u.qs.filter(q=>S.dw[q.id]).map(q=>{const vw=qView(q);return ['Part '+u.part+(q.tag?' · '+q.tag:''),{q:u.part===1?u.scene:u.part===6?(u.ptitle+' · '+q.q):q.q,opts:vw.opts,a:vw.a,exp:vw.exp}];}))];""")

# drill engine
rep("/* ================= scores ================= */",open('drill.js').read()+"\n/* ================= scores ================= */")
rep("/* ================= boot ================= */","/* ================= boot ================= */"+open('news.js').read())
rep("<main>\n","<main>\n<div id=\"news\" class=\"news\" aria-live=\"polite\"></div>\n")
open('toeic.html','w').write(s)
print(len(s))


/* ================= drill: daily problem sets from the in-app bank ================= */
const PNAME={1:'Part 1 사진 묘사',2:'Part 2 질의 응답',3:'Part 3 짧은 대화',4:'Part 4 짧은 담화',5:'Part 5 단문 빈칸',6:'Part 6 장문 빈칸',7:'Part 7 독해'};
const U=[],UM={};
function addU(u){u.qs.forEach((q,k)=>{q.id=u.id+'.'+k;q.u=u.id;});U.push(u);UM[u.id]=u;}
P1B.forEach((x,k)=>addU({id:'a'+k,part:1,tag:'사진',scene:x[0],art:k,qs:[{q:'사진을 가장 잘 묘사한 문장을 고르세요.',opts:x[1],a:x[2],exp:x[3]}]}));
P2.forEach((x,k)=>addU({id:'p'+k,part:2,tag:P2TAG[k],qs:[{q:x[0],opts:x[1],a:x[2],exp:x[3]}]}));
P2N.forEach((x,k)=>addU({id:'b'+k,part:2,tag:x[4],qs:[{q:x[0],opts:x[1],a:x[2],exp:x[3]}]}));
P3B.forEach((x,k)=>addU({id:'c'+k,part:3,tag:x.tag,script:x.s,visual:x.v,qs:x.q.map(q=>({q:q[0],opts:q[1],a:q[2],exp:q[3]}))}));
P4B.forEach((x,k)=>addU({id:'d'+k,part:4,tag:x.tag,script:x.s,visual:x.v,qs:x.q.map(q=>({q:q[0],opts:q[1],a:q[2],exp:q[3]}))}));
G.forEach((x,k)=>addU({id:'g'+k,part:5,tag:x[3],qs:[{q:x[0],opts:x[1],a:x[2],exp:x[4],tag:x[3]}]}));
G2.forEach((x,k)=>addU({id:'q'+k,part:5,tag:x[3],qs:[{q:x[0],opts:x[1],a:x[2],exp:x[4],tag:x[3]}]}));
P6B.forEach((x,k)=>addU({id:'e'+k,part:6,tag:'장문',ptitle:x.t,passage:x.p,qs:x.q.map((q,i)=>({q:`빈칸 (${i+1})에 들어갈 가장 알맞은 것은?`,opts:q[0],a:q[1],tag:q[2],exp:q[3]}))}));
RD.forEach((x,k)=>addU({id:'r'+k,part:7,tag:/문자/.test(x.t)?'chat':'single',ptitle:x.t,passage:x.p,qs:x.q.map(q=>({q:q[0],opts:q[1],a:q[2],tag:q[3],exp:q[4]}))}));
RD2.forEach((x,k)=>addU({id:'f'+k,part:7,tag:x.k,ptitle:x.t,passage:x.p,qs:x.q.map(q=>({q:q[0],opts:q[1],a:q[2],tag:q[3],exp:q[4]}))}));
const BANKN=U.reduce((a,u)=>a+u.qs.length,0);

/* deterministic shuffles so a question looks the same on every device */
function hsh(s){let h=2166136261;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619);}return h>>>0;}
function rng(a){return()=>{a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;};}
function sshuffle(a,seed){const r=rng(seed);a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(r()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
const LET=['A','B','C','D'];
function qView(q){if(q._v)return q._v;let idx=q.opts.map((_,i)=>i);
  if(!q.opts.every(o=>/^\[\d\]$/.test(o)))idx=sshuffle(idx,hsh(q.id));
  const re=c=>{const ni=idx.indexOf('ABCD'.indexOf(c));return ni<0?c:LET[ni];};
  const exp=q.exp.replace(/\(([A-D])\)/g,(m,c)=>'('+re(c)+')').replace(/(^|[^A-Za-z(])([A-D])는/g,(m,p,c)=>p+re(c)+'는');
  return q._v={opts:idx.map(i=>q.opts[i]),a:idx.indexOf(q.a),exp};}

/* ---------- day specs: [part, units, filter, mode] ---------- */
const LCH=[[1,4],[2,15],[3,6],[4,5]],RCH=[[5,20],[6,3],[7,4,'single'],[7,1,'double']];
const LCF=[[1,6],[2,25],[3,10],[4,8]],RCF1=[[5,30],[6,4],[7,6,'single']],RCF2=[[7,2,'double'],[7,2,'triple']];
const DS=[
 {it:[[5,30],[2,15],[7,2,'single']],lim:35},{it:[[5,25,'품사'],[1,10]],lim:25},{it:[[1,12],[2,25,'의문사']],lim:35},
 {it:[[5,20,'동사'],[6,2]],lim:20},{it:[[2,30,'!의문사']],lim:30},{it:[[5,20,'전치사·접속사'],[6,2]],lim:20},
 {it:[[3,8]],lim:35},{it:[[1,6],[2,25],[3,4]],lim:35},{it:[[5,20,'관계사·분사'],[5,10,'준동사·구문']],lim:15},
 {it:[[7,6,'single']],lim:30},{it:[[4,8]],lim:35},{it:[[5,30,'어휘']],lim:15},
 {it:[[6,5]],lim:20},{it:[[5,30],[6,4]],lim:20},{it:[[3,6,'hard']],lim:30},
 {it:[[7,7,'single']],lim:35},{it:[[2,15,'간접'],[2,15]],lim:30},{it:[[5,15,'비교·대명사'],[5,10,'준동사·구문']],lim:15},
 {it:[[4,6,'hard']],lim:30},{it:[[7,4,'double']],lim:30},{it:[[3,6],[4,6]],lim:40},
 {it:[[5,20,'어휘'],[6,3]],lim:20},{it:[[7,3,'triple'],[7,2,'chat']],lim:35},{it:[[5,40,null,'wrong']],lim:20},
 {it:LCH,lim:35},{it:RCH,lim:40},{it:[['wrong',40]],lim:40},
 {it:LCH,lim:35},{it:RCH,lim:39},{it:[['weak5',30]],lim:15},
 {it:LCH,lim:35},{it:RCH,lim:38},{it:[[7,6,'multi']],lim:30},
 {it:LCH,lim:35},{it:RCH,lim:37},{it:[['weakpart']],lim:35},
 {it:[[3,6,'hard'],[4,6,'hard']],lim:40},{it:LCF,lim:45},{it:RCF1,lim:46},
 {it:RCF2,lim:27},{it:LCF,lim:45},{it:RCF1,lim:46},
 {it:RCF2,lim:27},{it:[['weakpart']],lim:35},{it:[[2,25],[5,30]],lim:25},
 {it:[['wrong',15]],lim:20}];
/* mock days feed the score log automatically */
const MOCK={h1:{lc:[25],rc:[26]},h2:{lc:[28],rc:[29]},h3:{lc:[31],rc:[32]},h4:{lc:[34],rc:[35]},f1:{lc:[38],rc:[39,40]},f2:{lc:[41],rc:[42,43]}};
const MOCKDAY={};for(const g in MOCK)for(const s of ['lc','rc'])MOCK[g][s].forEach(d=>MOCKDAY[d]=[g,s]);

function unitWrong(u){return u.qs.some(q=>S.dw[q.id]);}
function flt(f){if(!f)return null;
  if(f==='hard')return u=>u.tag==='의도'||u.tag==='시각자료'||u.tag==='3인';
  if(f==='single')return u=>u.tag==='single'||u.tag==='chat';
  if(f==='multi')return u=>u.tag==='double'||u.tag==='triple';
  if(f[0]==='!'){const t=f.slice(1);return u=>u.tag!==t;}
  return u=>u.tag===f;}
function pickUnits(pool,n,seed,taken,mode){
  pool=sshuffle(pool.filter(u=>!taken.has(u.id)),seed);
  const key=u=>{const s=S.seen[u.id]||0,w=unitWrong(u);
    if(mode==='wrong')return w?0:s?2+s:1;
    return s?1+(w?0:1)+s*2:0;};
  const out=pool.map((u,i)=>[key(u),i,u]).sort((a,b)=>a[0]-b[0]||a[1]-b[1]).slice(0,n).map(x=>x[2]);
  out.forEach(u=>taken.add(u.id));return out;}
function weakPart(){let w=null;for(let p=1;p<=7;p++){const x=S.pstat[p];if(x&&x.n>=5){const r=x.r/x.n;if(!w||r<w.r)w={p,r};}}return w;}
const WEAKN={1:12,2:25,3:6,4:6,5:30,6:4,7:5};
function buildRun(items,seedKey,review){
  const taken=new Set();let ids=[],note='';
  items.forEach((it,k)=>{const seed=hsh(seedKey+':'+k);
    if(it[0]==='wrong'){let us=[],qn=0;for(const u of sshuffle(U.filter(unitWrong),seed)){if(qn>=it[1])break;us.push(u);qn+=u.qs.length;}us.sort((a,b)=>a.part-b.part);
      if(!us.length){note='아직 틀린 문제가 없어 Part 5·7 새 문제로 채웠습니다.';us=[...pickUnits(U.filter(u=>u.part===5),15,seed,taken),...pickUnits(U.filter(u=>u.part===7),2,seed+1,taken)];}
      us.forEach(u=>taken.add(u.id));ids.push(...us.map(u=>u.id));return;}
    if(it[0]==='weak5'){const w=weakest();const t=w?w.t:null;note=t?`문법 정답률이 가장 낮은 ‘${t}’ 유형입니다.`:'아직 유형별 기록이 부족해 틀린 문제부터 골랐습니다.';
      ids.push(...pickUnits(U.filter(u=>u.part===5&&(!t||u.tag===t)),it[1],seed,taken,'wrong').map(u=>u.id));return;}
    if(it[0]==='weakpart'){const w=weakPart();const p=w?w.p:7;note=w?`정답률이 가장 낮은 ${PNAME[p]} (${Math.round(w.r*100)}%)입니다.`:'아직 파트별 기록이 부족해 Part 7로 골랐습니다.';
      ids.push(...pickUnits(U.filter(u=>u.part===p),WEAKN[p],seed,taken,'wrong').map(u=>u.id));return;}
    const [p,n,f,mode]=it,fn=flt(f);
    ids.push(...pickUnits(U.filter(u=>u.part===p&&(!fn||fn(u))),n,seed,taken,mode).map(u=>u.id));});
  /* spaced review: a few questions missed on earlier days ride along at the end */
  if(review){let us=[],qn=0;for(const u of sshuffle(U.filter(u=>unitWrong(u)&&!taken.has(u.id)),hsh(seedKey+':rv'))){if(qn>=review)break;us.push(u);qn+=u.qs.length;taken.add(u.id);}
    if(us.length){ids.push(...us.map(u=>u.id));note=(note?note+' · ':'')+`끝에 지난 오답 ${qn}문항 복습 포함`;}}
  return {u:ids,pos:0,sel:{},t:0,fin:false,note,ut:{}};}
function runQs(r){const out=[];r.u.forEach(id=>{const u=UM[id];if(u)u.qs.forEach(q=>out.push(q));});return out;}
function runScore(r,parts){let c=0,n=0;const bp={};runQs(r).forEach(q=>{const p=UM[q.u].part;if(parts&&!parts.includes(p))return;const ok=r.sel[q.id]===qView(q).a;n++;if(ok)c++;bp[p]=bp[p]||[0,0];bp[p][1]++;if(ok)bp[p][0]++;});return {c,n,bp};}
function recAuto(){
  for(const g in MOCK){const e={id:'auto-'+g,k:g[0]==='f'?'full':'half',auto:true,lc:null,rc:null,nl:null,nr:null,d:null};
    for(const s of ['lc','rc']){const rs=MOCK[g][s].map(d=>S.runs['d'+d]);if(!rs.every(r=>r&&r.fin))continue;
      let c=0,n=0;rs.forEach(r=>{const x=runScore(r);c+=x.c;n+=x.n;if(!e.d||r.fd>e.d)e.d=r.fd;});e[s]=c;e[s==='lc'?'nl':'nr']=n;}
    const i=S.scores.findIndex(x=>x.id===e.id);
    if(e.lc==null&&e.rc==null){if(i>=0)S.scores.splice(i,1);}
    else if(i>=0)S.scores[i]=e;else S.scores.push(e);}}

/* ---------- speech (device English voice) ---------- */
const TTS={ok:typeof window.speechSynthesis!=='undefined'&&typeof window.SpeechSynthesisUtterance!=='undefined',rate:1,voices:[],tok:0,on:false};
try{const r=+localStorage.getItem('toeic-rate');if(r)TTS.rate=r;}catch(e){}
function ttsVoices(){if(!TTS.ok)return;let all=[];try{all=speechSynthesis.getVoices()||[];}catch(e){}
  const en=all.filter(v=>/^en[-_]/i.test(v.lang));TTS.voices=[...en.filter(v=>/^en[-_]US/i.test(v.lang)),...en.filter(v=>!/^en[-_]US/i.test(v.lang))];}
if(TTS.ok){ttsVoices();try{speechSynthesis.addEventListener('voiceschanged',ttsVoices);}catch(e){}}
const FEM=/female|samantha|victoria|karen|moira|tessa|zira|susan|allison|ava|serena|fiona|kate|joanna|salli|kimberly|nicky|jenny|aria|libby|sonia|natasha|michelle|emma|google us english$/i;
const MAL=/\bmale\b|daniel|alex\b|fred|david|mark|george|rishi|aaron|guy|ryan|tom\b|arthur|oliver|thomas|eric|christopher|andrew|brian/i;
function voiceFor(s){const vs=TTS.voices;
  const fem=vs.filter(v=>FEM.test(v.name)),mal=vs.filter(v=>!FEM.test(v.name)&&MAL.test(v.name)),oth=vs.filter(v=>!fem.includes(v));
  if(s==='W')return {v:fem[0]||vs[0]||null,p:fem[0]?1:1.2};
  if(s==='W2'){const v=fem[1]||fem[0]||vs[0]||null;return {v,p:fem[1]?1:1.35};}
  if(s==='M'){const v=mal[0]||oth[0]||vs[0]||null;return {v,p:mal[0]||oth[0]?1:0.8};}
  if(s==='M2'){const v=mal[1]||oth[1]||mal[0]||oth[0]||vs[0]||null;return {v,p:mal[1]||oth[1]?1:0.65};}
  return {v:vs[0]||null,p:1};}
function sentences(t){const P=String(t).replace(/\b(Mr|Ms|Mrs|Dr|St)\./g,'$1§').replace(/\b([AP])\.M\./g,'$1§M§');
  return (P.match(/[^.!?]+[.!?]+["'”]?|[^.!?]+$/g)||[P]).map(x=>x.replace(/§/g,'.').trim()).filter(Boolean);}
function ttsBtn(){const b=$('#auPlay');if(b)b.textContent=TTS.on?'■ 멈추기':'▶ 듣기';}
function ttsStop(){TTS.tok++;TTS.on=false;if(TTS.ok)try{speechSynthesis.cancel();}catch(e){}ttsBtn();}
function ttsPlay(lines){if(!TTS.ok||!lines)return;ttsStop();if(!TTS.voices.length)ttsVoices();
  const tok=TTS.tok,ch=[];lines.forEach(([s,t])=>sentences(t).forEach(c=>ch.push([s,c])));
  let i=0;TTS.on=true;ttsBtn();
  const nx=()=>{if(tok!==TTS.tok)return;if(i>=ch.length){TTS.on=false;ttsBtn();return;}
    const [s,t]=ch[i++],u=new SpeechSynthesisUtterance(t),vp=voiceFor(s);
    if(vp.v)u.voice=vp.v;u.lang=vp.v?vp.v.lang:'en-US';u.pitch=vp.p;u.rate=TTS.rate;
    u.onend=()=>setTimeout(nx,ch[i]&&ch[i][0]!==s?450:150);
    u.onerror=()=>{if(tok===TTS.tok){TTS.on=false;ttsBtn();}};
    try{speechSynthesis.speak(u);}catch(e){TTS.on=false;ttsBtn();}};
  nx();}
function unitAudio(u){const v=u.qs.map(qView);
  if(u.part===1)return [['N','Look at the picture.'],...v[0].opts.map((o,i)=>['N',LET[i]+'. '+o])];
  if(u.part===2){const a=hsh(u.id)%2?'M':'W',b=a==='M'?'W':'M';return [[a,u.qs[0].q],...v[0].opts.map((o,i)=>[b,LET[i]+'. '+o])];}
  if(u.part===3)return u.script.split('\n').map(l=>{const m=l.match(/^(M2|W2|M|W):\s*(.*)$/);return m?[m[1],m[2]]:['N',l];});
  if(u.part===4)return [[hsh(u.id)%2?'M':'W',u.script]];
  return null;}
function unitScript(u){if(u.part===3||u.part===4)return u.script.replace(/^(M2|W2):/gm,m=>m[0]+':');
  return unitAudio(u).map(([s,t])=>t).join('\n');}

/* table-like lines (aligned with runs of spaces) keep their columns in a monospace block */
function fmtPassage(t){const out=[];let tb=[];
  const flush=()=>{if(!tb.length)return;out.push(`<table class="ptbl">${tb.map((r,k)=>`<tr>${r.map(c=>`<td${k?'':' class="h"'}>${esc(c)}</td>`).join('')}</tr>`).join('')}</table>`);tb=[];};
  t.split('\n').forEach(l=>{if(/\S {2,}\S.* {2,}\S/.test(l))tb.push(l.trim().split(/ {2,}/));else{flush();out.push(esc(l)+'\n');}});flush();
  return out.join('').replace(/\n$/,'');}
/* ---------- drill view ---------- */
const dr={key:null,tmp:{},text:{},cap:{},h:null};
function dKey(){return dr.key||('d'+selDay);}
function specText(it){return it.map(x=>{const [p,n,f]=x;
  if(p==='wrong')return `틀린 문제 약 ${n}문항`;if(p==='weak5')return `가장 약한 문법 유형 ${n}문항`;if(p==='weakpart')return '가장 약한 파트 (틀린 문제부터)';
  const fl={hard:'고난도','!의문사':'의문사 외',single:'단일지문',multi:'이중·삼중',double:'이중지문',triple:'삼중지문',chat:'채팅'}[f]||f||'';
  return `Part ${p}${fl?' '+fl:''} ${p===3||p===4||p===6?n+'세트':p===7?(fl?'':'지문 ')+n+'개':n+'문항'}`;}).join(' · ');}
function dLimit(){const k=dKey();return k[0]==='d'?DS[+k.slice(1)-1].lim:null;}
function mmss(s){return `${String(Math.floor(s/60)).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`;}
function dClock(){const r=S.runs[dKey()];const el=$('#dClock');if(!el)return;
  if(!r){el.textContent='';return;}const lim=dLimit();
  el.textContent=`${mmss(r.t||0)}${lim?` / ${lim}분`:''}`;el.classList.toggle('over',!!lim&&r.t>lim*60&&!r.fin);}
setInterval(()=>{if(view!=='drill'||document.hidden)return;const r=S.runs[dKey()];if(!r||r.fin||!r.u.length)return;r.t=(r.t||0)+1;dClock();},1000);
function dModeBtns(){const k=dKey();
  $$('#dMode button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.m==='day'?k[0]==='d':b.dataset.m===k));}
function renderDrill(auto){
  ttsStop();dModeBtns();
  const k=dKey(),isDay=k[0]==='d',n=isDay?+k.slice(1):0;
  $('#dPick').hidden=k!=='free';$('#dDayNav').hidden=!isDay;
  if(isDay){$('#dEyebrow').textContent=`DAY ${n} / ${TOTAL}${n===dayNow?' · 오늘':''} · ${fmt(dateOf(n))}`;$('#dTitle').textContent=PLAN[n-1][0];
    $('#dPrev').disabled=n<=1;$('#dNext').disabled=n>=TOTAL;}
  else if(k==='more'){const b=(S.runs.more||{}).base||selDay;$('#dEyebrow').textContent=`DAY ${b} · 같은 유형 추가 세트`;$('#dTitle').textContent=PLAN[b-1][0]+' · 한 세트 더';}
  else{$('#dEyebrow').textContent=k==='free'?'원하는 파트만 골라서':'틀린 문제만 모아서';$('#dTitle').textContent=k==='free'?'파트별 연습':'오답 복습';}
  const r=S.runs[k];
  if(!r&&isDay){const sp=DS[n-1],lc=sp.it.some(x=>x[0]>=1&&x[0]<=4);
    $('#dLede').textContent=PLAN[n-1][1];$('#dProg').style.width='0';dClock();
    $('#dBox').innerHTML=`<div class="quiz"><div class="lab">이날 문제</div><p style="margin:0">${esc(specText(sp.it))}</p><p class="small muted" style="margin:0">목표 시간 ${sp.lim}분${lc?' · 듣기 문제는 폰의 영어 음성으로 읽어 줍니다. 이어폰을 준비하세요.':''}${MOCKDAY[n]?' · 다 풀면 점수가 ‘모의고사 점수’에 자동 기록됩니다.':''}</p><div class="row"><button class="btn primary" id="dStart">시작</button></div></div>`;
    $('#dStart').onclick=()=>{S.runs[k]=buildRun(sp.it,k,MOCKDAY[n]||!sp.it.every(x=>typeof x[0]==='number')?0:8);save();renderDrill(true);};return;}
  if(!r){$('#dLede').textContent=k==='free'?'위에서 파트를 고르세요.':'';$('#dProg').style.width='0';$('#dBox').innerHTML=k==='wrong'?'<p class="muted" style="margin:0">틀린 문제가 없습니다.</p>':'<p class="muted" style="margin:0">파트를 고르면 문제가 나옵니다.</p>';dClock();return;}
  $('#dLede').textContent=(isDay?PLAN[n-1][1]:'')+(r.note?` · ${r.note}`:'');
  const qs=runQs(r),done=qs.filter(q=>q.id in r.sel).length;
  $('#dProg').style.width=(qs.length?done/qs.length*100:0)+'%';dClock();
  if(!r.u.length){$('#dBox').innerHTML='<p class="muted" style="margin:0">풀 문제가 없습니다.</p>';return;}
  if(r.pos>=r.u.length){drawResult(r);return;}
  drawUnit(r,UM[r.u[r.pos]],auto);}
function drawUnit(r,u,auto){
  const qs=runQs(r),first=qs.findIndex(q=>q.u===u.id)+1,v=u.qs.map(qView);
  if(dr.shownFor!==u.id){dr.shownFor=u.id;dr.shownAt=Date.now();}
  const graded=u.qs.every(q=>q.id in r.sel),audio=u.part<=4,textMode=!TTS.ok||dr.text[u.id]||graded;
  const hideLC=(u.part===1||u.part===2)&&!textMode;
  let h=`<div class="quiz"><div class="row between"><span class="pill">${esc(PNAME[u.part])}</span><span class="kbd">${r.pos+1}/${r.u.length} 묶음 · 문항 ${first}${u.qs.length>1?'–'+(first+u.qs.length-1):''} / ${qs.length}</span></div>`;
  if(audio)h+=`<div class="audio">${TTS.ok?`<button class="btn primary sm" id="auPlay">▶ 듣기</button><span class="seg" id="auRate">${[0.8,0.9,1,1.1].map(x=>`<button data-r="${x}" aria-pressed="${TTS.rate===x}">${x}×</button>`).join('')}</span>`:'<span class="small muted">이 기기에서는 영어 음성을 쓸 수 없어 스크립트로 풉니다.</span>'}${TTS.ok&&!graded&&(u.part<=2)?`<button class="btn sm" id="auText">${dr.text[u.id]?'글자 숨기기':'글자로 보기'}</button>`:''}${TTS.ok&&!graded&&u.part>=3?`<button class="btn sm" id="auText">${dr.text[u.id]?'스크립트 숨기기':'스크립트 보기'}</button>`:''}</div>`;
  if(u.scene){const art=u.art!=null?ART(u.art):'',cap=!art||graded||dr.cap[u.id];
    h+=`<div class="scene">${art}${cap?`<p>${esc(u.scene)}</p>`:`<button class="btn sm" id="capBtn" style="margin-top:8px">그림이 헷갈리면 장면 설명 보기</button>`}</div>`;}
  if(u.visual)h+=`<pre class="passage visual">${esc(u.visual)}</pre>`;
  if(u.passage)h+=`<div><div class="lab" style="margin-bottom:6px">${esc(u.ptitle||'')}</div><div class="passage">${fmtPassage(u.passage)}</div></div>`;
  if(audio&&(u.part>=3?(dr.text[u.id]||!TTS.ok)&&!graded:false))h+=`<div class="passage">${esc(unitScript(u))}</div>`;
  u.qs.forEach((q,i)=>{const vw=v[i],sel=r.sel[q.id],pk=dr.tmp[q.id],g=sel!==undefined;
    const qt=u.part===2&&hideLC?'질문과 응답을 듣고 가장 알맞은 응답을 고르세요.':q.q;
    h+=`<div class="qq"><div class="row between"><div class="q"><span class="kbd">${first+i}.</span> ${esc(qt).replace(/\n/g,'<br>')}</div>${q.tag?`<span class="pill g">${esc(q.tag)}</span>`:''}</div><div class="opts">${vw.opts.map((op,j)=>{
      const cls=g?(j===vw.a?'right':j===sel?'wrong':''):(j===pk?'pick':'');
      return `<button class="opt ${cls}" data-q="${q.id}" data-j="${j}" ${g?'disabled':''}><span class="b">${LET[j]}</span><span>${hideLC?'<span class="muted">듣고 고르기</span>':esc(op)}</span></button>`;}).join('')}</div>
      ${g?`<div class="explain ${sel===vw.a?'':'bad'}"><b>${sel===vw.a?'정답':'오답 · 정답은 '+LET[vw.a]}</b><br>${esc(vw.exp)}</div>`:''}</div>`;});
  if(graded&&audio)h+=`<details open><summary>스크립트</summary><div class="passage" style="margin-top:8px">${esc(unitScript(u))}</div></details>`;
  if(!graded&&u.qs.length>1)h+=`<p class="small muted" style="margin:0">${u.qs.length}문제를 모두 고르면 채점됩니다. 고르기 전엔 바꿀 수 있어요.</p>`;
  if(graded)h+=`<div class="row"><button class="btn primary" id="dNextU">${r.pos+1<r.u.length?'다음':'결과 보기'}</button></div>`;
  $('#dBox').innerHTML=h+'</div>';
  $$('#dBox .opt').forEach(b=>b.onclick=()=>dPick(r,u,b.dataset.q,+b.dataset.j));
  const pl=$('#auPlay');if(pl)pl.onclick=()=>{if(TTS.on)ttsStop();else ttsPlay(unitAudio(u));};
  $$('#auRate button').forEach(b=>b.onclick=()=>{TTS.rate=+b.dataset.r;try{localStorage.setItem('toeic-rate',TTS.rate);}catch(e){}$$('#auRate button').forEach(x=>x.setAttribute('aria-pressed',x===b));});
  const cb=$('#capBtn');if(cb)cb.onclick=()=>{dr.cap[u.id]=1;drawUnit(r,u,false);if(TTS.on)ttsBtn();};
  const tx=$('#auText');if(tx)tx.onclick=()=>{dr.text[u.id]=!dr.text[u.id];const on=TTS.on;drawUnit(r,u,false);if(on)ttsBtn();};
  const nx=$('#dNextU');if(nx)nx.onclick=()=>{ttsStop();r.pos++;if(r.pos>=r.u.length)dFinish(r);save();renderDrill(true);$('main').scrollTop=0;};
  if(auto&&audio&&TTS.ok&&!graded)ttsPlay(unitAudio(u));}
function dPick(r,u,qid,j){if(qid in r.sel)return;dr.tmp[qid]=j;
  if(!u.qs.every(q=>q.id in dr.tmp)){drawUnit(r,u,false);return;}
  ttsStop();
  u.qs.forEach(q=>{const s=dr.tmp[q.id],ok=s===qView(q).a;r.sel[q.id]=s;delete dr.tmp[q.id];
    if(ok)delete S.dw[q.id];else S.dw[q.id]=1;
    const p=u.part;S.pstat[p]=S.pstat[p]||{r:0,n:0};S.pstat[p].n++;if(ok)S.pstat[p].r++;
    if(p===5&&GTYPES.includes(u.tag)){S.gstat[u.tag]=S.gstat[u.tag]||{r:0,n:0};S.gstat[u.tag].n++;if(ok)S.gstat[u.tag].r++;}
    if(u.id[0]==='g'){const gi=+u.id.slice(1);if(ok)delete S.gwrong[gi];else S.gwrong[gi]=true;}
    if(u.id[0]==='p'){const pi=+u.id.slice(1);if(ok)delete S.p2wrong[pi];else S.p2wrong[pi]=true;}
    if(u.id[0]==='r'){const ri=u.id.slice(1)+'-'+q.id.split('.')[1];if(ok)delete S.rdwrong[ri];else S.rdwrong[ri]=true;}});
  if(dr.shownFor===u.id){r.ut=r.ut||{};r.ut[u.id]=Math.min(600,Math.round((Date.now()-dr.shownAt)/1000));}
  S.seen[u.id]=(S.seen[u.id]||0)+1;save();
  const qs=runQs(r);$('#dProg').style.width=(qs.filter(q=>q.id in r.sel).length/qs.length*100)+'%';
  drawUnit(r,u,false);}
function dLabel(k){return k[0]==='d'?`Day ${k.slice(1)} ${PLAN[+k.slice(1)-1][0]}`:k==='more'?'추가 세트':k==='free'?'파트별 연습':'오답 복습';}
function dFinish(r){if(r.fin)return;r.fin=true;r.fd=iso(TODAY);const sc=runScore(r);
  S.dr.push({d:iso(TODAY),s:sc.c,t:sc.n,l:dLabel(dKey())});recAuto();}
function drawResult(r){
  const k=dKey(),sc=runScore(r),pct=sc.n?sc.c/sc.n:0,n=k[0]==='d'?+k.slice(1):0,mk=MOCKDAY[n];
  let rows=Object.keys(sc.bp).sort().map(p=>{const [c,t]=sc.bp[p];const x=Math.round(c/t*100);return `<div class="hbar"><span>Part ${p}</span><div class="t"><i class="${x<80?'lo':''}" style="width:${x}%"></i></div><span>${c}/${t}</span></div>`;}).join('');
  let msg=pct>=0.87?'800점 목표 페이스입니다.':pct>=0.75?'700점대 페이스입니다. 틀린 문제의 해설과 스크립트를 한 번 더 보세요.':'틀린 문제는 ‘오답 복습’에 모였습니다. 해설을 읽고 다시 풀어 보세요.';
  if(mk){const e=S.scores.find(x=>x.id==='auto-'+mk[0]);const s=e?entryEst(e):null;
    const part=mk[1]==='lc'?'LC':'RC';
    msg=`${part} 추정 환산 ${s&&s[mk[1]]!=null?s[mk[1]]+'점':'(다음 날 문제까지 풀면 계산)'} · ‘모의고사 점수’에 자동 기록했습니다. 앱 문제는 실제 시험보다 쉬울 수 있어 참고용입니다.`;}
  const PACE={5:20,6:30,7:60},pc=[];
  for(const p of [5,6,7]){let t=0,q=0;r.u.forEach(id=>{const u=UM[id];if(u&&u.part===p&&r.ut&&r.ut[id]!=null){t+=r.ut[id];q+=u.qs.length;}});
    if(q)pc.push(`Part ${p} 문항당 ${Math.round(t/q)}초 (목표 ${PACE[p]}초 ${t/q<=PACE[p]?'✓':'· 더 빠르게'})`);}
  const lim=dLimit();
  const wr=runQs(r).filter(q=>r.sel[q.id]!==qView(q).a);
  $('#dBox').innerHTML=`<div class="quiz"><div class="row between"><div class="stat"><b>${sc.c} / ${sc.n}</b><span>정답률 ${Math.round(pct*100)}% · 걸린 시간 ${mmss(r.t||0)}${lim?` (목표 ${lim}분)`:''}</span></div></div>
    <div style="display:flex;flex-direction:column;gap:8px">${rows}</div>${pc.length?`<p class="small muted" style="margin:0">풀이 속도 · ${pc.join(' · ')}</p>`:''}<p style="margin:0">${esc(msg)}</p>
    <div class="row">${n?`<button class="btn primary" id="dDone">${S.done[n]?'완료 표시됨 ✓':'이날 학습 완료로 표시'}</button>`:''}${n||k==='more'?'<button class="btn primary" id="dMore">한 세트 더 (같은 유형)</button>':''}<button class="btn" id="dAgain">처음부터 다시 풀기</button>${wr.length?`<button class="btn" id="dWrong">오답 복습 (${Object.keys(S.dw).length})</button>`:''}</div>
    ${wr.length?`<div><div class="lab" style="margin:6px 0">이번에 틀린 문제 ${wr.length}개</div>${wr.map(q=>{const vw=qView(q),u=UM[q.u];return `<details><summary><span class="pill" style="margin-right:8px">Part ${u.part}</span>${esc((u.part===1?u.scene:q.q).split('\n')[0])}</summary><p class="small muted">${vw.opts.map((op,j)=>`${LET[j]}. ${esc(op)}`).join(' &nbsp;/&nbsp; ')}</p><p><b>정답 ${LET[vw.a]}. ${esc(vw.opts[vw.a])}</b></p><p class="muted">${esc(vw.exp)}</p></details>`;}).join('')}</div>`:''}</div>`;
  const dd=$('#dDone');if(dd)dd.onclick=()=>{S.done[n]=true;save();renderRail();dd.textContent='완료 표시됨 ✓';};
  $('#dAgain').onclick=()=>{r.pos=0;r.sel={};r.t=0;r.fin=false;dr.tmp={};save();renderDrill(true);};
  const dw=$('#dWrong');if(dw)dw.onclick=()=>dStartWrong();
  const dm=$('#dMore');if(dm)dm.onclick=()=>{const b=k==='more'?r.base:n;let it=DS[b-1].it.filter(x=>typeof x[0]==='number');if(!it.length)it=[['wrong',20]];
    S.runs.more=buildRun(it,'more'+Date.now(),0);S.runs.more.base=b;S.runs.more.note='안 푼 문제부터 같은 유형으로';dr.key='more';save();renderDrill(true);$('main').scrollTop=0;};}
function dStartWrong(){dr.key='wrong';const us=U.filter(unitWrong).sort((a,b)=>a.part-b.part).slice(0,30);
  S.runs.wrong=us.length?{u:us.map(u=>u.id),pos:0,sel:{},t:0,fin:false,note:`틀린 문제 ${us.length}묶음`}:null;if(!us.length)delete S.runs.wrong;save();renderDrill(true);}
const FREEN={1:8,2:15,3:4,4:4,5:20,6:3,7:4};
$('#dPick').innerHTML=[1,2,3,4,5,6,7].map(p=>`<button data-p="${p}">Part ${p}</button>`).join('');
$$('#dPick button').forEach(b=>b.onclick=()=>{const p=+b.dataset.p;S.runs.free=buildRun([[p,FREEN[p]]],'free'+Date.now());S.runs.free.note=PNAME[p];save();$$('#dPick button').forEach(x=>x.setAttribute('aria-pressed',x===b));renderDrill(true);});
$$('#dMode button').forEach(b=>b.onclick=()=>{const m=b.dataset.m;if(m==='day')dr.key=null;else if(m==='wrong'){dStartWrong();return;}else dr.key=m;renderDrill(false);});
$('#dPrev').onclick=()=>{if(selDay>1){selDay--;renderDrill(false);}};
$('#dNext').onclick=()=>{if(selDay<TOTAL){selDay++;renderDrill(false);}};
function openDrill(n){selDay=n;dr.key=null;go('drill');}

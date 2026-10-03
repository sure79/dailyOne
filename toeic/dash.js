
/* ================= dashboard: 4 daily routines, streak, stats ================= */
function actDay(d){d=d||iso(TODAY);S.act[d]=S.act[d]||{};return S.act[d];}
function actAdd(k){const a=actDay();a[k]=(a[k]||0)+1;}
const ROUT=[
  {k:'v',n:20,t:'단어 카드 20개',s:'짝꿍 표현까지 소리 내어 · ‘외웠어요’/‘다시 볼래요’',go:()=>go('vocab')},
  {k:'p5',n:20,t:'Part 5 타임어택 20문항',s:'문항당 20초 · 보기 어형 먼저 훑기',go:()=>dFree(5,20,'Part 5 타임어택 · 문항당 20초')},
  {k:'p2',n:15,t:'Part 2 듣고 소거 15문항',s:'첫 단어 받아 적기 · 채점 후 ‘따라 읽기’',go:()=>dFree(2,15,'Part 2 소거법 · 채점 후 따라 읽기')},
  {k:'w',n:10,t:'오답노트 10문항',s:'백지에서 다시 풀기 · 설명되면 마스터',go:()=>{dr.key='wrong';dr.noteView=true;go('drill');}}];
function dFree(p,n,note){S.runs.free=buildRun([[p,n]],'free'+Date.now());S.runs.free.note=note;dr.key='free';save();go('drill');
  $$('#dPick button').forEach(x=>x.setAttribute('aria-pressed',x.dataset.p==String(p)));renderDrill(true);}
function routDone(x,a){if(a.m&&a.m[x.k]!=null)return a.m[x.k];
  if(x.k==='w'&&!Object.keys(S.dw).length&&(a.w||0)===0)return null;
  return (a[x.k]||0)>=x.n;}
function streak(){const on=d=>{const a=S.act[d];if(a&&(Object.keys(a).some(k=>k!=='m'&&a[k]>0)||(a.m&&Object.values(a.m).some(Boolean))))return true;
    const n=Math.round((new Date(d+'T00:00:00')-START)/864e5)+1;return n>=1&&n<=TOTAL&&!!S.done[n];};
  const t=new Date(TODAY);if(!on(iso(t)))t.setDate(t.getDate()-1);let c=0;while(on(iso(t))&&c<400){c++;t.setDate(t.getDate()-1);}return c;}
function renderDash(){const box=$('#tDash');if(!box)return;const a=actDay(),today=selDay===dayNow||dayNow<1||dayNow>TOTAL;
  let r=0,n=0;for(const p in S.pstat){r+=S.pstat[p].r;n+=S.pstat[p].n;}
  const w2=Object.values(S.dw).filter(v=>v===2).length,w1=Object.keys(S.dw).length-w2,kn=Object.values(S.known).filter(v=>v===true).length;
  const st=ROUT.map(x=>routDone(x,a)),ok=st.filter(v=>v!==false).length,sk=streak();
  box.innerHTML=`<div class="row between"><div class="lab">오늘의 4대 루틴 · ${ok}/4</div><span class="kbd">🔥 연속 ${sk}일</span></div>
    <ul class="rout">${ROUT.map((x,i)=>{const v=st[i],c=x.k==='w'&&v===null?'오답 없음':`${Math.min(a[x.k]||0,x.n)}/${x.n}`;
      return `<li class="${v!==false?'on':''}"><button class="ck" data-k="${x.k}" aria-pressed="${v!==false}" aria-label="${esc(x.t)} 완료 표시">${v!==false?'✓':''}</button>
        <div><b>${esc(x.t)}</b> <span class="kbd">${c}</span><br><span class="small muted">${esc(x.s)}</span></div><button class="btn sm" data-go="${i}">시작</button></li>`;}).join('')}</ul>
    ${today?'':'<p class="small muted" style="margin:0">체크리스트는 오늘 날짜 기준입니다.</p>'}
    <div class="dstats"><div><b>${n?Math.round(r/n*100)+'%':'–'}</b><span>정답률</span></div><div><b>${n}</b><span>푼 문제</span></div><div><b>${w1}<small>${w2?` +${w2}`:''}</small></b><span>오답${w2?' (+마스터 대기)':''}</span></div><div><b>${kn}</b><span>외운 단어</span></div></div>`;
  $$('#tDash [data-go]').forEach(b=>b.onclick=()=>ROUT[+b.dataset.go].go());
  $$('#tDash .ck').forEach(b=>b.onclick=()=>{const x=ROUT.find(y=>y.k===b.dataset.k),d=actDay();d.m=d.m||{};d.m[x.k]=!(routDone(x,d)!==false);save();renderDash();});}

/* ================= vocab: 3D flip cards with collocation, example and pronunciation ================= */
function vSay(e,which){if(e)e.stopPropagation();const w=vs.q[vs.i];if(!w)return;const x=VX[w[0]]||[];
  ttsPlay(which==='ex'?[['N',x[2]||w[0]]]:[['N',w[0]],...(x[1]&&x[1]!==w[0]?[['N',x[1]]]:[])]);}
function vDraw(){const w=vs.q[vs.i],c=$('#vCard');
  if(w!==vs.lastW){vs.lastW=w;c.classList.add('nt');c.classList.toggle('on',vs.flip);void c.offsetWidth;c.classList.remove('nt');}
  if(!w){vs.done=true;c.classList.remove('on');$('#vPos').textContent='';$('#vCol').textContent='';
    $('#vW').textContent=vs.set===0&&!vSetWords().length?'다시 볼 단어가 없어요':'한 바퀴 끝';$('#vHint').textContent='눌러서 처음부터 다시';$('#vCount').textContent='';}
  else{vs.done=false;const x=VX[w[0]]||[];
    $('#vPos').textContent=x[0]||'';$('#vW').textContent=w[0];$('#vCol').textContent=x[1]||'';$('#vCol').hidden=!x[1];
    $('#vM').textContent=w[1];$('#vEx').textContent=x[2]||'';$('#vExT').textContent=x[3]||'';$('#vExB').hidden=!x[2]||!TTS.ok;
    $('#vHint').textContent='눌러서 뒤집기';$('#vCount').textContent=`${vs.i+1} / ${vs.q.length}`;c.classList.toggle('on',vs.flip);}
  $('#vSay').hidden=!w||!TTS.ok;$('#vKnow').disabled=$('#vAgain').disabled=!w;}
$('#vSay').onclick=e=>vSay(e,'w');$('#vExB').onclick=e=>vSay(e,'ex');
$('#vCard').onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();$('#vCard').click();}};

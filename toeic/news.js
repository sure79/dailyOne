
/* ================= update news bar (top of every page) ================= */
let newsOpen=null;
function renderNews(){
  const box=$('#news');if(!box||!BANKLOG.length)return;
  const last=BANKLOG[BANKLOG.length-1],prev=BANKLOG[BANKLOG.length-2],sum=a=>a.reduce((x,y)=>x+y,0);
  const diff=i=>prev?last.c[i]-prev.c[i]:0,tot=sum(last.c),add=prev?tot-sum(prev.c):tot;
  let seen='';try{seen=localStorage.getItem('toeic-news-seen')||'';}catch(e){}
  const isNew=seen!==last.f,md=d=>isoFmt(d);if(newsOpen===null)newsOpen=isNew;
  const chips=last.c.map((n,i)=>`<span class="nchip"><b>P${i+1}</b> ${n}${diff(i)>0?`<em>+${diff(i)}</em>`:''}</span>`).join('');
  const hist=[...BANKLOG].reverse().map((b,k,arr)=>{const p=arr[k+1];const a=p?sum(b.c)-sum(p.c):sum(b.c);
    const parts=b.c.map((n,i)=>p&&n-p.c[i]>0?`P${i+1} +${n-p.c[i]}`:'').filter(Boolean).join(' · ');
    return `<li><span class="kbd">${md(b.d)}</span> <b>${esc(b.l)}</b> · ${p?'+':''}${a}문항${parts?` <span class="muted">(${parts})</span>`:''}${b.n?`<br><span class="muted small">${esc(b.n)}</span>`:''}</li>`;}).join('');
  box.innerHTML=`<div class="nhead"><span class="pill">${isNew?'NEW · ':''}업데이트</span>
    <span class="ntitle">${md(last.d)} ${esc(last.l)}${prev?` · 새 문제 <b>+${add}</b>`:''}</span>
    <span class="ntot">총 <b>${tot.toLocaleString()}</b>문항 · 단어 ${V.length}개${newsOpen?'':' <button class="xbtn" id="nOpen">파트별 보기 ▾</button>'}</span></div>
    ${newsOpen?`<div class="nchips">${chips}</div>
    ${last.n?`<p class="small" style="margin:0">${esc(last.n)}</p>`:''}
    <div class="nfoot"><span class="muted small">최신 반영 ${esc(BUILD_AT)} · 매일 새벽 자동 추가</span>
      <span class="row"><button class="btn sm" id="nHist">지난 업데이트 ${BANKLOG.length}건</button><button class="btn sm" id="nOk">${isNew?'확인':'접기'}</button></span></div>
    <ul class="nlist" id="nList" hidden>${hist}</ul>`:''}`;
  const hb=$('#nHist');if(hb)hb.onclick=()=>{$('#nList').hidden=!$('#nList').hidden;};
  const op=$('#nOpen');if(op)op.onclick=()=>{newsOpen=true;renderNews();};
  const ok=$('#nOk');if(ok)ok.onclick=()=>{try{localStorage.setItem('toeic-news-seen',last.f);}catch(e){}newsOpen=false;renderNews();};}
renderNews();

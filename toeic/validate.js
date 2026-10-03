const { chromium } = require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:390,height:844},deviceScaleFactor:2});
const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.goto('file://'+process.cwd()+'/toeic.html');await p.waitForTimeout(800);
const chk=await p.evaluate(()=>{const bad=[];
 U.forEach(u=>u.qs.forEach(q=>{if(!(q.a>=0&&q.a<q.opts.length))bad.push('ans '+q.id);if(new Set(q.opts).size!==q.opts.length)bad.push('dup '+q.id);const v=qView(q);if(v.opts[v.a]!==q.opts[q.a])bad.push('view '+q.id);}));
 if(DS.length!==46)bad.push('DS '+DS.length);if(PLAN.length!==46)bad.push('PLAN '+PLAN.length);
 if(P2TAG.length!==P2.length)bad.push('p2tag');
 const QIDS=new Set();U.forEach(u=>u.qs.forEach(q=>{QIDS.add(q.id);const x=q.x||{};
   if(x.trap&&x.trap.length!==q.opts.length)bad.push('trap '+q.id);if(x.otr&&x.otr.length!==q.opts.length)bad.push('otr '+q.id);
   evList(x).forEach(e=>{if(!((u.passage||'')+'\n'+(u.script||'')).includes(e))bad.push('ev '+q.id);});}));
 Object.keys(EX).forEach(k=>{if(!UM[k]&&!QIDS.has(k))bad.push('EX '+k);else if(UM[k]&&UM[k].qs.length>1)bad.push('EX multi '+k);});
 Object.keys(VX).forEach(k=>{if(!V.some(w=>w[0]===k))bad.push('VX '+k);else if(!Array.isArray(VX[k])||VX[k].length!==4)bad.push('VX len '+k);});
 const dist={};U.forEach(u=>u.qs.forEach(q=>{const a=qView(q).a;dist[a]=(dist[a]||0)+1;}));
 const per={};U.forEach(u=>{per[u.part]=(per[u.part]||0)+u.qs.length});
 return {bad,BANKN,dist,per};});
console.log(JSON.stringify(chk));
// Simulate all 46 days: answer with the correct option 70% of the time
const res=await p.evaluate(()=>{const out=[];
 for(let n=1;n<=46;n++){const k='d'+n;S.runs[k]=buildRun(DS[n-1].it,k);const r=S.runs[k];
   const qs=runQs(r);qs.forEach((q,i)=>{const v=qView(q);const ok=((hsh(q.id+n)%10)<7);const j=ok?v.a:(v.a+1)%v.opts.length;
     r.sel[q.id]=j;if(ok)delete S.dw[q.id];else S.dw[q.id]=1;const u=UM[q.u];S.pstat[u.part]=S.pstat[u.part]||{r:0,n:0};S.pstat[u.part].n++;if(ok)S.pstat[u.part].r++;});
   r.u.forEach(id=>S.seen[id]=(S.seen[id]||0)+1);r.pos=r.u.length;dr.key=k;dFinish(r);
   out.push(n+':'+r.u.length+'u/'+qs.length+'q');}
 return {out:out.join(' '),scores:S.scores.map(e=>[e.id,e.lc,e.nl,e.rc,e.nr,JSON.stringify(entryEst(e))]),size:JSON.stringify(S).length};});
console.log(res.out);console.log(JSON.stringify(res.scores));console.log('state bytes',res.size);
console.log('errors',errs);await b.close();})();

const { chromium } = require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:390,height:844},deviceScaleFactor:2});
const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.addInitScript(()=>{window.__spoken=[];
  const voices=[{name:'Samantha',lang:'en-US'},{name:'Daniel',lang:'en-GB'},{name:'Alex',lang:'en-US'},{name:'Karen',lang:'en-AU'}];
  Object.defineProperty(window,'speechSynthesis',{configurable:true,value:{getVoices:()=>voices,speak:u=>{window.__spoken.push([u.voice&&u.voice.name,u.pitch,u.text]);setTimeout(()=>u.onend&&u.onend(),5);},cancel:()=>{},addEventListener:()=>{}}});
  window.SpeechSynthesisUtterance=function(t){this.text=t;};});
await p.goto('file://'+process.cwd()+'/toeic.html');await p.waitForTimeout(800);
await p.screenshot({path:'out_today.png'});
await p.click('[data-drill]');await p.waitForTimeout(300);await p.screenshot({path:'out_intro.png'});
await p.click('#dStart');await p.waitForTimeout(300);await p.screenshot({path:'out_q1.png'});
// answer all units of day 1 by clicking first option
for(let i=0;i<120;i++){
  const fin=await p.$('#dAgain');if(fin)break;
  const qq=await p.$$('#dBox .qq');let clicked=false;
  for(const q of qq){if(await q.$('.opt.pick')||await q.$('.opt[disabled]'))continue;const o=await q.$('.opt');if(o){await o.click();await p.waitForTimeout(40);clicked=true;break;}}
  if(clicked)continue;
  const part=await p.$eval('#dBox .pill',e=>e.textContent);
  if(i===12||part.includes('Part 2')&&!global.p2shot){global.p2shot=1;await p.screenshot({path:'out_p2.png',fullPage:false});}
  await p.click('#dNextU');await p.waitForTimeout(60);
}
await p.screenshot({path:'out_result.png'});
// day 7: Part 3 audio
await p.evaluate(()=>{selDay=7;dr.key=null;renderDrill(false);});await p.click('#dStart');await p.waitForTimeout(200);
await p.screenshot({path:'out_p3.png'});
const sp=await p.evaluate(()=>window.__spoken.slice(-8));console.log(JSON.stringify(sp,null,0));
// P7 double passage from day 20
await p.evaluate(()=>{selDay=20;renderDrill(false);});await p.click('#dStart');await p.waitForTimeout(200);await p.screenshot({path:'out_p7.png'});await p.evaluate(()=>{const e=document.querySelector('#dBox .passage');e.scrollTop=e.scrollHeight;});await p.screenshot({path:'out_p7b.png'});
// P1 day 2 into part1 unit
await p.evaluate(()=>{dr.key='free';S.runs.free=buildRun([[1,2]],'x');renderDrill(true);});await p.waitForTimeout(200);await p.screenshot({path:'out_p1.png'});
console.log(JSON.stringify(await p.evaluate(()=>window.__spoken.slice(-5))));
await p.evaluate(()=>go('log'));await p.waitForTimeout(200);await p.screenshot({path:'out_log.png',fullPage:true});
await p.evaluate(()=>go('strategy'));await p.waitForTimeout(200);
console.log(await p.$eval('#bankNote',e=>e.textContent));
console.log('errors',errs);await b.close();})();

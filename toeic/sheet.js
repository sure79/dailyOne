const { chromium } = require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1400,height:900}});const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.goto('file://'+process.cwd()+'/sheet.html');await p.waitForTimeout(300);await p.screenshot({path:'sheet.png',fullPage:true});console.log(errs);await b.close();})();

/* Print bank items with their ids, to pick items for EX backfill.
   node list.js G2 [from] [count] [--missing]      Part 5 (ids q<i>)
   node list.js P2N [from] [count] [--missing]     Part 2 (ids b<i>)
   node list.js VX                                 words without card extras, in study order */
const fs=require('fs'),vm=require('vm'),glob=d=>fs.readdirSync('.').filter(f=>d.test(f)).sort();
const page=fs.readFileSync('page.html','utf8');
const ctx={EX:{},VX:{},__snap(){},G:[],P2:[],RD:[]};vm.createContext(ctx);
vm.runInContext('var V='+page.match(/const V=(\[[\s\S]*?\]\]);/)[1]+';',ctx);
for(const f of glob(/^bank.*\.js$/))vm.runInContext(fs.readFileSync(f,'utf8').replace(/^const /gm,'var '),ctx);
for(const f of glob(/^vocab.*\.js$/))vm.runInContext(fs.readFileSync(f,'utf8'),ctx);
const [arr,from='0',cnt='40']=process.argv.slice(2),miss=process.argv.includes('--missing');
if(arr==='VX'){const seen=new Set();const out=ctx.V.filter(w=>!seen.has(w[0])&&seen.add(w[0])).map((w,i)=>[i,w]).filter(([i,w])=>!ctx.VX[w[0]]);
  console.log(out.slice(0,+cnt||60).map(([i,w])=>`set ${Math.floor(i/20)+1}  ${w[0]} — ${w[1]}`).join('\n'));process.exit();}
const A=ctx[arr],pre={G2:'q',P2N:'b'}[arr];if(!A||!pre){console.log('use G2, P2N or VX');process.exit(1);}
let n=0;for(let i=+from;i<A.length&&n<+cnt;i++){const x=A[i],id=pre+i,has=(x[5]&&typeof x[5]==='object')||ctx.EX[id];if(miss&&has)continue;n++;
  console.log(`${id}${has?' (has extras)':''}\n  ${x[0]}\n  ${x[1].map((o,j)=>(j===x[2]?'*':' ')+o).join(' | ')}\n  ${arr==='G2'?x[4]:x[3]}`);}
console.log(`-- ${A.length} items in ${arr}`);

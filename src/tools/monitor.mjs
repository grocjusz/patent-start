import fs from 'node:fs';
import path from 'node:path';
import {sourceFingerprint} from './source-fingerprint.mjs';
const root=path.resolve(import.meta.dirname,'..');
const bank=JSON.parse(fs.readFileSync(path.join(root,'app/assets/bank.json')));
const changed=[],errors=[];
function links(html){const values=[...html.matchAll(/href\s*=\s*['"]([^'"]+\.(?:pdf|docx?)(?:\?[^'"]*)?)['"]/gi)].map(m=>m[1].replaceAll('&amp;','&').trim());if(!values.length)throw Error('Brak dokumentów w wykazie');return [...new Set(values)].sort().join('\n');}
for(const source of bank.sources){
 try{const response=await fetch(source.url,{signal:AbortSignal.timeout(45000),headers:{'User-Agent':'PatentStart/1.0 source-monitor'}});if(!response.ok)throw Error('HTTP '+response.status);const bytes=Buffer.from(await response.arrayBuffer());const fingerprint=sourceFingerprint(source,bytes);if(fingerprint!==source.fingerprint)changed.push({id:source.id,title:source.title,url:source.url,expected:source.fingerprint,observed:fingerprint,questions:bank.questions.filter(q=>q.sources.includes(source.id)).map(q=>q.id)});}catch(e){errors.push({id:source.id,error:e.message});}
}
const today=new Date().toISOString().slice(0,10);
const result={at:new Date().toISOString(),version:bank.version,changed,errors,reviewDue:today>=bank.reviewUntil};
const dest=process.argv[2]||path.join(root,'source-monitor.json');
fs.writeFileSync(dest,JSON.stringify(result,null,2));
console.log(JSON.stringify(result,null,2));
if(changed.length||errors.length||result.reviewDue)process.exitCode=2;

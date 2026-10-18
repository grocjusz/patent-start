import assert from 'node:assert/strict';import fs from 'node:fs';import path from 'node:path';import os from 'node:os';import crypto from 'node:crypto';import {spawnSync} from 'node:child_process';import {sourceFingerprint,scopedBytes} from './source-fingerprint.mjs';
const root=path.resolve(import.meta.dirname,'..'),source={kind:'sha256',scope:'html-main-v1',url:'https://saami.org/glossary/gauge/'};
const wrap=(text='Własna definicja testowa.',nonce='one')=>Buffer.from(`<html><head><script>var nonce='${nonce}'</script></head><body><main id="main"><h1>Test</h1><div class="entry-content">${text}</div></main><script>var ver='${nonce}'</script></body></html>`);
const cases=[wrap(),wrap('Własna definicja testowa.','two'),wrap('Zmieniona definicja.'),Buffer.from('<main id="main">Brak treści hasła</main>'),Buffer.from('<html>Brak main</html>'),Buffer.concat([wrap(),wrap()]),Buffer.from(wrap().toString().replace('<h1>Test</h1>','')),Buffer.from(wrap().toString().replace('entry-content','other'))];
assert.equal(sourceFingerprint(source,cases[0]),sourceFingerprint(source,cases[1]));
assert.notEqual(sourceFingerprint(source,cases[0]),sourceFingerprint(source,cases[2]));
assert.notEqual(sourceFingerprint(source,cases[0]),sourceFingerprint(source,Buffer.from(cases[0].toString().replace('<h1>Test','<h1>Inny tytuł'))));
for(const item of cases.slice(3))assert.throws(()=>sourceFingerprint(source,item));
assert.throws(()=>sourceFingerprint({...source,scope:'unknown'},cases[0]));assert.throws(()=>sourceFingerprint({...source,url:'https://example.com/'},cases[0]));assert.throws(()=>sourceFingerprint({...source,kind:'meta'},cases[0]));
const raw={kind:'sha256'};assert.notEqual(sourceFingerprint(raw,cases[0]),sourceFingerprint(raw,cases[1]));
// Ten sam ekstraktor działa na telefonie; sprawdzamy rzeczywisty kod Javy, nie jego kopię.
const task=fs.mkdtempSync(path.join(os.tmpdir(),'patent-fingerprint-'));
const jdk=process.env.JAVA_HOME||path.resolve(root,'../../../work/toolchain/jdk/jdk-17.0.20.1+1'),ext=process.platform==='win32'?'.exe':'';
const run=(name,args)=>{const r=spawnSync(path.join(jdk,'bin',name+ext),args,{encoding:'utf8'});if(r.status!==0)throw Error(r.stderr||r.error||name);return r.stdout.trim();};
fs.writeFileSync(path.join(task,'Harness.java'),'import java.nio.file.*;import java.security.*;import pl.patentstart.SourceFingerprint; public class Harness{public static void main(String[] args)throws Exception{for(String file:args)try{byte[] bytes=SourceFingerprint.htmlMain(Files.readAllBytes(Paths.get(file)));byte[] hash=MessageDigest.getInstance("SHA-256").digest(bytes);StringBuilder out=new StringBuilder();for(byte b:hash)out.append(String.format("%02x",b&255));System.out.println(out);}catch(Exception e){System.out.println("ERROR");}}}');
const files=cases.map((bytes,i)=>{const file=path.join(task,i+'.html');fs.writeFileSync(file,bytes);return file;});
run('javac',['-encoding','UTF-8','-d',task,path.join(root,'app/java/pl/patentstart/SourceFingerprint.java'),path.join(task,'Harness.java')]);
const java=run('java',['-cp',task,'Harness',...files]).split(/\r?\n/),js=cases.map(item=>{try{return sourceFingerprint(source,item);}catch{return 'ERROR';}});assert.deepEqual(java,js);
console.log('Kontrola źródeł: nonce i CSS poza hasłem nie wywołują alarmu; zmiana definicji/tytułu jest wykrywana; brak/duplikat treści nie przechodzi. Java i Node zgodne dla 8 przypadków.');

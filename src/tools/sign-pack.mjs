import fs from 'node:fs';
import crypto from 'node:crypto';
import path from 'node:path';
import {PENDING} from './audit-corrections.mjs';
import {validateBank111} from './compat-111.mjs';
const root=path.resolve(import.meta.dirname,'..');
const payload=fs.readFileSync(process.argv[2]||path.join(root,'app/assets/bank.json'));
// Nie podpisujemy pakietu z niepoliczonym odciskiem źródła ani niezgodnego z APK 1.1.x bez pola minApp.
const content=JSON.parse(payload.toString('utf8'));
const pending=content.sources.filter(s=>s.fingerprint===PENDING).map(s=>s.id);
if(pending.length)throw Error('Odciski źródeł nie są policzone ('+pending.join(', ')+'). Uruchom: node tools/refresh-sources.mjs');
if(!content.minApp)validateBank111(content);
const secret=process.env.PATENT_SECRET_DIR||path.resolve(root,'../../../work/keys');
fs.mkdirSync(secret,{recursive:true});
const keyPath=path.join(secret,'content-private.pem');
if(!fs.existsSync(keyPath)){
 if(fs.existsSync(path.join(root,'app/assets/public-key.der')))throw Error('Brak prywatnego klucza wydawcy. Przywróć lokalny klucz treści; nie zastępuj go nowym kluczem istniejącej aplikacji.');
 const pair=crypto.generateKeyPairSync('rsa',{modulusLength:3072,publicKeyEncoding:{type:'spki',format:'der'},privateKeyEncoding:{type:'pkcs8',format:'pem'}});
 fs.writeFileSync(keyPath,pair.privateKey,{mode:0o600});
 fs.writeFileSync(path.join(root,'app/assets/public-key.der'),pair.publicKey);
}
const privateKey=fs.readFileSync(keyPath);
const publicKey=crypto.createPublicKey(privateKey).export({format:'der',type:'spki'});
if(!fs.readFileSync(path.join(root,'app/assets/public-key.der')).equals(publicKey))throw Error('Klucz podpisujący nie odpowiada kluczowi aplikacji.');

const signature=crypto.sign('RSA-SHA256',payload,privateKey);
fs.mkdirSync(path.join(root,'public'),{recursive:true});
const file=process.argv[3]||path.join(root,'public/latest.patentpack');
fs.writeFileSync(file,JSON.stringify({payload:payload.toString('base64'),signature:signature.toString('base64')}));
console.log('Podpisano pakiet:',path.basename(file));

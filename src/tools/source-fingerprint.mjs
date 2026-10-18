import crypto from 'node:crypto';

// SHA-256 nadal obejmuje całą treść hasła, razem z nagłówkiem i odsyłaczami.
// Zmienne skrypty, tokeny i wersje CSS poza <main> nie są treścią słownika.
export function scopedBytes(source,bytes){
 if(!source.scope)return bytes;
 if(source.scope!=='html-main-v1'||source.kind!=='sha256'||new URL(source.url).hostname!=='saami.org')throw Error('Nieobsługiwany zakres kontroli');
 const html=bytes.toString('utf8'),matches=[...html.matchAll(/<main\b[^>]*\bid=["']main["'][^>]*>([\s\S]*?)<\/main\s*>/gi)];
 if(matches.length!==1||!/<h1\b/i.test(matches[0][1])||!/<div\b[^>]*\bclass=["'][^"']*\bentry-content\b[^"']*["']/i.test(matches[0][1]))throw Error('Brak jednoznacznej treści hasła SAAMI');
 return Buffer.from(matches[0][1].replaceAll('\r\n','\n'),'utf8');
}
export function sourceFingerprint(source,bytes){
 if(source.scope)return crypto.createHash('sha256').update(scopedBytes(source,bytes)).digest('hex');
 if(source.kind==='meta')return JSON.parse(bytes.toString('utf8')).changeDate;
 if(source.kind==='links'){
  const values=[...bytes.toString('utf8').matchAll(/href\s*=\s*['"]([^'"]+\.(?:pdf|docx?)(?:\?[^'"]*)?)['"]/gi)].map(m=>m[1].replaceAll('&amp;','&').trim());
  if(!values.length)throw Error('Brak dokumentów w wykazie');
  return crypto.createHash('sha256').update([...new Set(values)].sort().join('\n')).digest('hex');
 }
 if(source.kind!=='sha256')throw Error('Nieobsługiwany typ kontroli');
 return crypto.createHash('sha256').update(scopedBytes(source,bytes)).digest('hex');
}

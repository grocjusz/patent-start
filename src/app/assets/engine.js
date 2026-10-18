'use strict';
(function(global){
 const day=86400000;
 function shuffle(a,random=Math.random){const r=[...a];for(let i=r.length-1;i>0;i--){let j=Math.floor(random()*(i+1));[r[i],r[j]]=[r[j],r[i]];}return r;}
 function key(q){return q.id+':'+q.revision;}
 function schedule(prev={},correct,confidence,now=Date.now()){
  const intervals=[1,3,7,14,30,60];
  const early=correct&&prev.seen&&prev.due>now;
  let level=correct&&confidence===2?Math.min((prev.level||0)+(early?0:1),6):correct?Math.max(0,(prev.level||0)-1):0;
  const interval=!correct?10*60000:confidence===0?12*3600000:confidence===1?day:intervals[Math.max(0,level-1)]*day;
  return {...prev,level,seen:(prev.seen||0)+1,right:(prev.right||0)+(correct?1:0),wrong:(prev.wrong||0)+(correct?0:1),lastCorrect:correct,confidence,lastAt:now,due:early?Math.min(prev.due,now+interval):now+interval};
 }
 function available(q,bank,status={},now=Date.now()){
  if(now>new Date(bank.reviewUntil+'T23:59:59').getTime())return false;
  return !q.sources.some(s=>{const ss=(status.sources||{})[s]||{};const matched=ss.lastMatchedAt||new Date(bank.releaseDate+'T12:00:00').getTime();return ss.changed||now-matched>7*day;});
 }
 function exam(bank,status={},now=Date.now(),random=Math.random){
  if((status.sources||{}).patent?.changed||(status.sources||{})['patent-index']?.changed)throw Error('Zmieniono regulamin egzaminu. Potrzebny nowy pakiet.');
  const qs=[];for(let cat=0;cat<5;cat++){
   const pool=bank.questions.filter(q=>q.cat===cat&&available(q,bank,status,now));
   if(pool.length<bank.exam.perCategory)throw Error('Za mało zweryfikowanych pytań w dziale: '+bank.categories[cat]);
   qs.push(...shuffle(pool,random).slice(0,bank.exam.perCategory));
  }return qs;
 }
 function grade(questions,answers,config){const correct=questions.filter((q,i)=>answers[i]===q.correct).length;const critical=questions.filter((q,i)=>config.criticalCategories.includes(q.cat)&&answers[i]!==q.correct).length;return{correct,critical,passed:correct>=config.minCorrect&&critical===0};}
 function select(bank,progress,status,kind,cat=null,now=Date.now(),limit=10){
  let qs=bank.questions.filter(q=>available(q,bank,status,now)&&(cat===null||q.cat===cat));
  if(kind==='errors')qs=qs.filter(q=>(progress[key(q)]||{}).lastCorrect===false);
  if(kind==='bookmarks')qs=qs.filter(q=>(progress[key(q)]||{}).bookmarked);
  if(kind==='due')qs=qs.filter(q=>progress[key(q)]&&progress[key(q)].due<=now);
  const priority=q=>{const p=progress[key(q)];return !p?2:(!p.lastCorrect?0:p.due<=now?1:3);};
  return shuffle(qs).sort((a,b)=>priority(a)-priority(b)).slice(0,limit);
 }
 const api={day,shuffle,key,schedule,available,exam,grade,select};global.Engine=api;
 if(typeof module!=='undefined')module.exports=api;
})(typeof window!=='undefined'?window:globalThis);

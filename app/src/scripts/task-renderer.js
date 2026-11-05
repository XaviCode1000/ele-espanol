/* Render, corrección y refresco de tareas (portado verbatim desde el original) */
import { $, $$, norm, lnorm, toast } from '../lib/utils.js';
import { TASKS } from '../data/tasks.js';
import { S, save } from '../lib/state.js';
import { updateScore } from './score.js';
import { frBadge, frSpan } from './widgets.js';

export function isDone(id){const c=S.checked[id]||{};const n=TASKS[id].items.length;let k=0;for(let i=0;i<n;i++)if(c[i]!==undefined)k++;return k===n}
export function answeredCount(id){const a=S.answers[id]||{};return TASKS[id].items.filter((_,i)=>{const v=a[i];return v!==undefined&&v!==null&&String(v).trim()!==''}).length}

export function renderTask(id){
 const T=TASKS[id];const A=S.answers[id]||{};const C=S.checked[id]||{};
 const done=isDone(id);
 let ok=0;Object.values(C).forEach(v=>{if(v===true)ok++});
 let h=`<div class="card" id="task_${id}"><div class="card-head"><div><h3>${T.t}</h3>${done?`<span class="tag g">Corregido · ${ok}/${T.items.length}</span>`:`<span class="tag">${answeredCount(id)}/${T.items.length} respondidas</span>`}</div></div><p class="cons">${T.c}${frBadge(id)}</p>`;

 if(T.type==='choice'){
   h+=`<div>`;T.items.forEach((it,i)=>{
     const st=C[i];const cls=st===true?'ok':st===false?'ko':'pending';
     h+=`<div class="item ${st!==undefined?cls:''}"><p class="q">${i+1}. ${it.q}</p><div class="opts">`;
     it.o.forEach((op,oi)=>{
       h+=`<button type="button" class="opt ${A[i]===oi?'sel':''}" data-opt="${id}|${i}|${oi}" aria-pressed="${A[i]===oi}" ${st!==undefined?'disabled':''}>${op}</button>`;});
     h+=`</div>`;
     if(S.teacher&&st===undefined)h+=`<div class="fb ok">👁️ Clave: <b>${it.o[it.a]}</b> — ${it.r||''}</div>`;
     if(st===true)h+=`<div class="fb ok">✔ ¡Correcto! ${it.r||''}</div>`;
     if(st===false)h+=`<div class="fb ko">✘ La respuesta correcta es <b>${it.o[it.a]}</b>. ${it.r||''}</div>`;
     h+=`</div>`;});
   h+=`</div>`;
 }
 else if(T.type==='fill'){
   h+=`<div class="${T.grid?'grid g'+T.grid:''}">`;T.items.forEach((it,i)=>{
     const st=C[i];const cls=st===true?'ok':st===false?'ko':'pending';
     const label=String(it.q).replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').trim();
     h+=`<div class="item ${st!==undefined?cls:''}"><p class="q">${T.grid?'':(i+1)+'. '}${it.q}</p>
     <input type="text" id="answer_${id}_${i}" data-fill="${id}|${i}" value="${(A[i]||'').replace(/"/g,'&quot;')}" placeholder="…" aria-label="${label.replace(/"/g,"'")}" ${st!==undefined?'readonly':''}>`;
     if(S.teacher&&st===undefined)h+=`<div class="fb ok">👁️ Clave: <b>${it.a}</b></div>`;
     if(st===false)h+=`<div class="fb ko">✘ Respuesta correcta: <b>${it.a}</b>${it.note?' — '+it.note:''}</div>`;
     if(st===true)h+=`<div class="fb ok">✔ ¡Correcto!${it.note?' '+it.note:''}</div>`;
     h+=`</div>`;});
   h+=`</div>`;
 }
 else if(T.type==='match'){
   h+=`<div class="grid g3">`;T.items.forEach((it,i)=>{
     const st=C[i];const cls=st===true?'ok':st===false?'ko':'pending';
     h+=`<div class="item ${st!==undefined?cls:''}" style="text-align:center"><p class="q" style="margin-bottom:6px"><b>${it.w}</b></p>
     <input type="text" id="answer_${id}_${i}" data-fill="${id}|${i}" value="${(A[i]||'').replace(/"/g,'&quot;')}" placeholder="opuesto…" aria-label="Antónimo de ${it.w}" style="text-align:center" ${st!==undefined?'readonly':''}>`;
     if(st===false)h+=`<div class="fb ko">✘ <b>${it.a}</b></div>`;
     if(st===true)h+=`<div class="fb ok">✔</div>`;
     h+=`</div>`;});
   h+=`</div>`;
 }
 else if(T.type==='spell'){
   h+=`<div class="grid g2">`;T.items.forEach((it,i)=>{
     const st=C[i];const cls=st===true?'ok':st===false?'ko':'pending';
     h+=`<div class="item ${st!==undefined?cls:''}"><p class="q"><b>${it.w}</b></p>
     <input type="text" id="answer_${id}_${i}" data-fill="${id}|${i}" value="${(A[i]||'').replace(/"/g,'&'+'quot;')}" placeholder="eme-a-ene-o" aria-label="Deletrea ${it.w}" ${st!==undefined?'readonly':''}>`;
     if(S.teacher&&st===undefined)h+=`<div class="fb ok">👁️ Clave: <b>${it.a.join('-')}</b></div>`;
     if(st===false)h+=`<div class="fb ko">✘ Revisa el deletreo: <b>${it.a.join('-')}</b></div>`;
     if(st===true)h+=`<div class="fb ok">✔ ¡Deletreo correcto!</div>`;
     h+=`</div>`;});
   h+=`</div>`;
 }
 else if(T.type==='err'){
   h+=`<div>`;T.items.forEach((it,i)=>{
     const st=C[i];
     h+=`<div class="item ${st!==undefined?'ok':'pending'}">
       <p class="q"><span style="color:var(--bad);font-weight:800">✘</span> <i>${it.w}</i></p>
       <input type="text" id="answer_${id}_${i}" data-fill="${id}|${i}" value="${(A[i]||'').replace(/"/g,'&quot;')}" placeholder="Escribe la frase corregida…" aria-label="Corrige la frase: ${it.w.replace(/"/g,"'")}" ${st!==undefined?'readonly':''}>`;
     if(S.teacher&&st===undefined)h+=`<div class="fb ok">👁️ Clave: <b>${it.a}</b></div>`;
     if(st!==undefined){
       const good=st===true;
       h+=`<div class="fb ${good?'ok':'ko'}">${good?'✔ ¡Muy bien!':'✘ Compara con la solución:'} <b>${it.a}</b><br><span style="opacity:.85">${it.r}</span></div>`;}
     h+=`</div>`;});
   h+=`</div>`;
 }
 else if(T.type==='syll'){
   h+=`<div class="grid g4">`;T.items.forEach((it,i)=>{
     const st=C[i];
     h+=`<div class="item ${st===true?'ok':st===false?'ko':'pending'}"><p class="syl-word">${it.w}</p><div class="syls">`;
     it.s.forEach((sy,si)=>{
       let cls='syl';
       if(A[i]===si)cls+=' sel';
       if(st===true&&si===it.a)cls='syl right';
       if(st===false){if(si===it.a)cls='syl right';else if(A[i]===si)cls='syl wrong';}
       h+=`<button type="button" class="${cls}" data-syl="${id}|${i}|${si}" aria-pressed="${A[i]===si}" ${st!==undefined?'disabled':''}>${sy}</button>`;});
     h+=`</div>`;
     if(S.teacher&&st===undefined)h+=`<div class="fb ok">👁️ Clave: <b>${it.s[it.a]}</b></div>`;
     if(st===false)h+=`<div class="fb ko">✘ La sílaba fuerte es <b>${it.s[it.a]}</b>.</div>`;
     h+=`</div>`;});
   h+=`</div>`;
 }
 else if(T.type==='select'){
   h+=`<div class="grid g2">`;T.items.forEach((it,i)=>{
     const st=C[i];const sel=A[i]===true;
     let cls='item '+((st===true)?'ok':(st===false)?'ko':'pending');
     h+=`<button type="button" class="${cls} select-choice" style="display:flex;gap:10px;align-items:center;cursor:pointer;text-align:left" data-sel="${id}|${i}" aria-pressed="${sel}">
       <span style="font-size:1.05rem" aria-hidden="true">${sel?'☑':'☐'}</span><span class="mini" style="flex:1;${sel?'text-decoration:line-through;color:var(--muted)':''}">${it.t}</span></button>`;});
   h+=`</div>`;
   if(Object.keys(C).length){
     h+=`<div class="box green mini" style="margin-top:12px"><b>Solución:</b> sobra el artículo en 1, 2, 3, 4, 5, 6, 8 y 9 (profesiones). Las frases 7 (<i>una francesa</i>) y 10 (<i>unas personas</i>) son correctas: no son profesiones.</div>${frSpan('sol-i2_4')}`;}
 }

 const allAns=T.items.every((_,i)=>{const v=A[i];return T.type==='select'?v!==undefined:(v!==undefined&&String(v).trim()!=='')});
 h+=`<div class="ex-actions">
   <button type="button" class="btn btn-primary btn-sm" data-check="${id}" ${(!allAns||done)?'disabled':''}>Comprobar respuestas</button>
   ${done?`<button type="button" class="btn btn-ghost btn-sm" data-retry="${id}">↺ Reintentar</button>`:''}
   <span class="score-chip ${done?'ok':''}">${done?ok+'/'+T.items.length+' aciertos':answeredCount(id)+'/'+T.items.length+' completadas'}</span>
 </div></div>`;
 return h;
}

export function refreshTask(id){
 const el=$('#task_'+id);if(!el)return;
 const tmp=document.createElement('div');tmp.innerHTML=renderTask(id);
 el.replaceWith(tmp.firstElementChild);
}

/* Monta las tareas estáticas del build sobre sus mounts data-task-mount */
export function mountTasks(){
 $$('[data-task-mount]').forEach(el=>{
   const tmp=document.createElement('div');
   tmp.innerHTML=renderTask(el.dataset.taskMount);
   el.replaceWith(tmp.firstElementChild);
 });
}

/* Re-render de todas las tareas montadas (modo profesor cambia las claves visibles) */
export function refreshAllTasks(){
 $$('.card[id^="task_"]').forEach(el=>refreshTask(el.id.slice(5)));
}

export function checkTask(id){
 const T=TASKS[id],A=S.answers[id]||{};S.checked[id]=S.checked[id]||{};let ok=0;
 T.items.forEach((it,i)=>{
   let good=false;
   if(T.type==='choice'){good=A[i]===it.a}
   else if(T.type==='syll'){good=A[i]===it.a}
   else if(T.type==='select'){good=(A[i]===true)===it.s}
   else if(T.type==='spell'){
     const toks=String(A[i]||'').split(/[\s\-–—.,;|/]+/).filter(Boolean).map(lnorm);
     good=toks.length===it.a.length&&toks.every((t,k)=>t===lnorm(it.a[k]));
   }
   else{
     const u=norm(A[i]);const acc=[it.a].concat(it.acc||[]).map(norm);good=acc.includes(u);
   }
   S.checked[id][i]=good;if(good)ok++;
 });
 save();refreshTask(id);
 toast(ok===T.items.length?`🎉 ¡Perfecto! ${ok}/${T.items.length}`:`Corregido: ${ok}/${T.items.length} aciertos`);
 updateScore();
}
export function retryTask(id){delete S.answers[id];delete S.checked[id];save();refreshTask(id);updateScore()}

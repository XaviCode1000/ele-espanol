/* Dominó encadenado: render del estado de la partida */
import { $, toast } from '../lib/utils.js';
import { DOMINO } from '../data/domino.js';
import { S, save } from '../lib/state.js';
import { frSpan } from './widgets.js';

export function renderDom(){
 const w=$('#domWrap');if(!w)return;
 const placed=S.domino, n=placed.length, pct=Math.round(n/30*100);
 let h=`<div style="display:flex;align-items:center;gap:12px;margin-bottom:12px"><div class="bar"><i style="width:${pct}%"></i></div><b style="font-size:.85rem;color:var(--brand)">${n}/30</b></div>`;
 if(n){
   h+=`<p class="mini" style="font-weight:700;color:var(--muted);margin-bottom:6px">CADENA CONSTRUIDA</p><div class="chain">`;
   placed.forEach(id=>{const t=DOMINO.find(d=>d.id===id);h+=`<div class="tile placed ${t.start?'start':''}"><div class="ans">▲ ${t.top}</div><div class="que">▼ ${t.bot}</div></div>`;});
   h+=`</div>`;
 }
 if(n===30){
   h+=`<div class="box green" style="text-align:center;padding:18px"><b style="font-size:1.05rem;color:#166534">🎉 ¡Cadena completada y cerrada!</b><p class="mini" style="color:#166534;margin-top:4px">La pregunta de la ficha 30 conecta con la respuesta de la ficha 1: el dominó es correcto. Ahora jugad la <b>ronda oral</b>: sin mirar las fichas, un miembro lee la pregunta y otro responde de memoria.</p></div>`;
 }else{
   const next=n+1;
   h+=`<p class="mini" style="font-weight:700;color:var(--muted);margin-bottom:6px">FICHAS DISPONIBLES ${n===0?'· empieza por la ★ dorada':'· la siguiente es la '+next}</p><div class="pool">`;
   DOMINO.filter(t=>!placed.includes(t.id)).forEach(t=>{
     const clickable=(t.id===next)||(n===0&&t.start);
     h+=`<button type="button" class="tile ${t.start?'start':''} ${clickable?'':'locked'}" data-dom="${t.id}" ${clickable?'':'disabled'} aria-label="Ficha ${t.id}. Respuesta: ${t.top}. Pregunta: ${t.bot}"><span class="ans">▲ ${t.top}</span><span class="que">▼ ${t.bot}</span></button>`;});
   h+=`</div><p class="hint">Las fichas atenuadas todavía no encajan: la respuesta de arriba debe contestar a la pregunta de la última ficha colocada.${frSpan('dom-hint')}</p>`;
 }
 w.innerHTML=h;
}

export function placeDom(id){
 const next=S.domino.length+1;
 if(id!==next){toast('Esa ficha todavía no encaja: busca la respuesta a la última pregunta.');return}
 S.domino.push(id);save();renderDom();
 if(S.domino.length===30){toast('🎉 ¡Dominó completado y cerrado!')}
}
export function resetDom(){S.domino=[];save();renderDom()}

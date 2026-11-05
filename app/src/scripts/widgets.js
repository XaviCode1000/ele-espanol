/* Hidratación cliente de las partes que dependen del estado (localStorage) */
import { $, $$ } from '../lib/utils.js';
import { S } from '../lib/state.js';
import { FR } from '../data/fr.js';

/* ---------- AYUDAS EN FRANCÉS ---------- */
/* Span de traducción (se abre con el toggle global, sin badge propio). */
export function frSpan(key){
 const fr=FR[key];return fr?`<span class="cons-fr" data-fr-text="${key}">${fr}</span>`:'';
}
/* Devuelve el markup del badge FR + la traducción oculta (o '' si no hay). */
export function frBadge(key){
 const fr=FR[key];if(!fr)return'';
 return `<button type="button" class="fr-badge" data-fr-badge data-fr-target="${key}" aria-expanded="false" aria-label="Aide en français">FR</button>${frSpan(key)}`;
}
/* Inyecta badges en las consignas estáticas marcadas con data-fr="clave". */
export function enhanceFr(){
 $$('[data-fr]').forEach(el=>{
   if(el.querySelector('[data-fr-badge]'))return;
   el.insertAdjacentHTML('beforeend',frBadge(el.dataset.fr));
 });
}
/* Preferencia global: mostrar/ocultar todas las ayudas. */
export function applyFrAll(){
 const on=!!S.frAll;
 $$('.cons-fr').forEach(el=>el.classList.toggle('open',on));
 $$('[data-fr-badge]').forEach(b=>b.setAttribute('aria-expanded',String(on)));
 const btn=$('#btnFr');
 if(btn)btn.setAttribute('aria-pressed',String(on));
}

export function critTotal(){let t=0;for(let i=0;i<7;i++){const v=S.texts['crit'+i];if(v)t+=parseInt(v)||0}return t}

export function updCando(){
 const g=$('#cdG'),y=$('#cdY'),r=$('#cdR');if(!g)return;
 let a=0,b=0,c=0;Object.values(S.canDo).forEach(v=>{if(v==='green')a++;else if(v==='yellow')b++;else if(v==='red')c++});
 g.textContent=a;y.textContent=b;r.textContent=c;
}

/* Semáforo can-do: un clic sobre un botón actualiza su fila y los contadores */
export function applyCando(btn){
 const [i,c]=btn.dataset.cando.split('|');
 S.canDo[i]=(S.canDo[i]===c?'':c);save();
 const row=btn.closest('.cando-row');
 if(row){row.querySelectorAll('[data-cando]').forEach(b=>{
   const on=S.canDo[i]===b.dataset.cando.split('|')[1];
   b.classList.toggle('on',on);b.setAttribute('aria-pressed',String(on));
 });}
 updCando();
}

/* Muro de errores: filas dinámicas dentro de tbody#errBody */
export function renderErrBody(){
 const body=$('#errBody');if(!body)return;
 const rows=(S.errors.length?S.errors:[{a:'/p/',b:'badre',c:'padre',d:3},{a:'diptongo ie',b:'desperto',c:'despierto',d:0},{a:'',b:'',c:'',d:0}]);
 body.innerHTML=rows.map((e,i)=>`
 <tr><td><input type="text" data-err="${i}|a" aria-label="Fila ${i+1}: sonido o regla" value="${(e.a||'').replace(/"/g,'&quot;')}"></td>
 <td><input type="text" data-err="${i}|b" aria-label="Fila ${i+1}: mi error real" value="${(e.b||'').replace(/"/g,'&quot;')}"></td>
 <td><input type="text" data-err="${i}|c" aria-label="Fila ${i+1}: forma correcta" value="${(e.c||'').replace(/"/g,'&quot;')}"></td>
 <td><input type="number" min="0" max="99" data-err="${i}|d" aria-label="Fila ${i+1}: veces practicado" value="${e.d||0}"></td></tr>`).join('');
}

export function addErrorRow(){S.errors.push({a:'',b:'',c:'',d:0});save();renderErrBody()}

function hydrateDataValues(){
 $$('[data-text]').forEach(el=>{
   const v=S.texts[el.dataset.text];
   if(el.type==='checkbox'){el.checked=v==='1';return}
   if(v!==undefined&&v!==null)el.value=v;
 });
}
function hydrateRoute(){
 $$('input[data-route]').forEach(el=>{el.checked=!!S.route[el.dataset.route]});
}
function hydrateProj(){
 $$('[data-proj]').forEach(el=>{
   const [i,f]=el.dataset.proj.split('|');const c=S.proj[i]||{};
   el.value=c[f]||'';
 });
}
function hydrateMembers(){
 $$('[data-member]').forEach(el=>{
   const i=parseInt(el.dataset.member,10);
   el.textContent=S.members[i]||('Miembro '+(i+1));
 });
}
function hydrateVariety(){
 $$('[data-variety]').forEach(el=>{
   el.textContent=S.variety==='latam'?el.dataset.varietyLatam:el.dataset.variety;
 });
}
function hydrateCrit(){
 $$('input[data-crit]').forEach(el=>{
   const [i,n]=el.dataset.crit.split('|');
   el.checked=S.texts['crit'+i]===String(n);
 });
 const t=$('#critTotal');if(t)t.textContent=String(critTotal());
}
function hydrateCando(){
 $$('[data-cando]').forEach(btn=>{
   const [i,c]=btn.dataset.cando.split('|');
   const on=S.canDo[i]===c;
   btn.classList.toggle('on',on);btn.setAttribute('aria-pressed',String(on));
 });
 updCando();
}
function hydrateSpell(){
 $$('[data-spell]').forEach(el=>{
   const sel=S.spell.includes(parseInt(el.dataset.spell,10));
   el.classList.toggle('sel',sel);el.setAttribute('aria-pressed',String(sel));
 });
 const chip=$('#spellChip');if(chip)chip.textContent=S.spell.length+' / 20';
}

export function hydrateAll(){
 hydrateDataValues();hydrateRoute();hydrateProj();hydrateMembers();
 hydrateVariety();hydrateCrit();hydrateCando();hydrateSpell();renderErrBody();
}

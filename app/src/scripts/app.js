/* Punto de entrada: navegación, modal, dock y delegación de eventos */
import { $, $$, toast } from '../lib/utils.js';
import { S, save, resetState } from '../lib/state.js';
import { TASKS } from '../data/tasks.js';
import { checkTask, retryTask, refreshTask, refreshAllTasks, mountTasks, isDone, answeredCount } from './task-renderer.js';
import { renderDom, placeDom, resetDom } from './domino.js';
import { applyCando, addErrorRow, renderErrBody, critTotal, hydrateAll, enhanceFr, applyFrAll } from './widgets.js';
import { updateScore } from './score.js';

/* ---------- NAVEGACIÓN ---------- */
function setMenuOpen(open){
 const button=$('#btnMenu'),panel=$('#menuPanel');if(!button||!panel)return;
 button.setAttribute('aria-expanded',String(open));panel.hidden=!open;
}
function selectTab(name){
 const button=$(`[data-tab="${name}"]`);if(!button)return;
 $$('.menu-item').forEach(b=>{b.classList.remove('active');b.removeAttribute('aria-current')});
 button.classList.add('active');button.setAttribute('aria-current','page');
 $$('.tab-pane').forEach(p=>p.classList.add('hidden'));
 const pane=$('#tab-'+name);if(pane)pane.classList.remove('hidden');
 updateScore();setMenuOpen(false);window.scrollTo({top:0,behavior:'smooth'});
}

/* ---------- DELEGACIÓN DE EVENTOS ---------- */
document.addEventListener('click',e=>{
 const t=e.target;
 const hit=(sel)=>t.closest(sel);

 let el;
 if(el=hit('#btnMenu')){
   const button=$('#btnMenu');setMenuOpen(button.getAttribute('aria-expanded')!=='true');
   return;
 }
 if(el=hit('[data-tab]')){selectTab(el.dataset.tab);return}
 if(el=hit('[data-jump-tab]')){selectTab(el.dataset.jumpTab);return}
 if(el=hit('[data-acc]')){
   const acc=$('#acc'+el.dataset.acc);const open=acc.classList.toggle('open');
   el.setAttribute('aria-expanded',String(open));return;
 }
 if(el=hit('[data-flip]')){const open=el.classList.toggle('on');el.setAttribute('aria-pressed',String(open));return}
 if(el=hit('[data-opt]')){
   const [id,i,o]=el.dataset.opt.split('|');S.answers[id]=S.answers[id]||{};S.answers[id][i]=parseInt(o);
   save();refreshTask(id);return;
 }
 if(el=hit('[data-syl]')){
   const [id,i,s]=el.dataset.syl.split('|');S.answers[id]=S.answers[id]||{};S.answers[id][i]=parseInt(s);
   save();refreshTask(id);return;
 }
 if(el=hit('[data-sel]')){
   const [id,i]=el.dataset.sel.split('|');S.answers[id]=S.answers[id]||{};
   S.answers[id][i]=S.answers[id][i]===true?false:true;save();refreshTask(id);return;
 }
 if(el=hit('[data-check]')){checkTask(el.dataset.check);return}
 if(el=hit('[data-retry]')){retryTask(el.dataset.retry);return}
 if(el=hit('[data-cando]')){applyCando(el);return}
 if(el=hit('[data-spell]')){
   const i=parseInt(el.dataset.spell);const k=S.spell.indexOf(i);
   if(k>=0)S.spell.splice(k,1);else S.spell.push(i);
   save();const selected=el.classList.toggle('sel');el.setAttribute('aria-pressed',String(selected));
   const chip=$('#spellChip');if(chip)chip.textContent=S.spell.length+' / 20';return;
 }
 if(el=hit('[data-dom]')){placeDom(parseInt(el.dataset.dom));return}
 if(el=hit('#domReset')){if(confirm('¿Reiniciar la partida de dominó?'))resetDom();return}
 if(el=hit('#addErr')){addErrorRow();return}
 if(el=hit('[data-fr-badge]')){
   const fr=el.nextElementSibling;
   if(fr&&fr.classList.contains('cons-fr')){const open=fr.classList.toggle('open');el.setAttribute('aria-expanded',String(open))}
   return;
 }
 if(el=hit('#btnFr')){S.frAll=!S.frAll;save();applyFrAll();return}
 if(el=hit('#btnTeacher')){S.teacher=!S.teacher;save();const te=$('#teacherEmoji');if(te)te.textContent=S.teacher?'🙈':'👁️';const tl=$('#teacherLbl');if(tl)tl.textContent=S.teacher?' Ocultar claves':' Claves';refreshAllTasks();toast(S.teacher?'Modo profesor activado: claves visibles.':'Modo alumno.');return}
 if(el=hit('#btnReset')){if(confirm('¿Reiniciar TODO el progreso del dossier?')){resetState();save();location.reload()}return}
 if(!hit('#btnMenu,#menuPanel'))setMenuOpen(false);
});

document.addEventListener('change',e=>{
 const t=e.target;
 if(t.dataset&&t.dataset.route){S.route[t.dataset.route]=t.checked;save();toast(t.checked?'✔ Tarea marcada.':'Tarea desmarcada.');return}
 if(t.dataset&&t.dataset.flag){S.texts['chk_'+t.dataset.flag]=t.checked?'1':'';save();return}
 if(t.dataset&&t.dataset.crit){const [i]=t.dataset.crit.split('|');S.texts['crit'+i]=t.value;save();const el=$('#critTotal');if(el)el.textContent=critTotal();return}
});

document.addEventListener('input',e=>{
 const t=e.target,d=t.dataset;if(!d)return;
 if(d.fill){const [id,i]=d.fill.split('|');S.answers[id]=S.answers[id]||{};S.answers[id][i]=t.value;save();
   const card=t.closest('.card');if(card){const chip=card.querySelector('.score-chip');const btn=card.querySelector('[data-check]');
     const T=TASKS[id];
     if(chip&&!isDone(id))chip.textContent=answeredCount(id)+'/'+T.items.length+' completadas';
     if(btn){const allAns=T.items.every((_,k)=>{const v=(S.answers[id]||{})[k];return v!==undefined&&String(v).trim()!==''});btn.disabled=!allAns||isDone(id)}}
   return}
 if(d.text){S.texts[d.text]=t.value;save();return}
 if(d.proj){const [i,f]=d.proj.split('|');S.proj[i]=S.proj[i]||{};S.proj[i][f]=t.value;save();return}
 if(d.err){const [i,f]=d.err.split('|');while(S.errors.length<=i)S.errors.push({a:'',b:'',c:'',d:0});
   S.errors[i][f]=(f==='d')?(parseInt(t.value)||0):t.value;save();return}
});

document.addEventListener('keydown',e=>{
 if(e.key==='Escape'){
   if($('#btnMenu').getAttribute('aria-expanded')==='true')setMenuOpen(false);
   else closeModal();
 }
 const modal=$('#setupModal');
 if(modal&&!modal.classList.contains('hidden')&&e.key==='Tab'){
   const focusable=[...modal.querySelectorAll('button,input,select,textarea,a[href],[tabindex]:not([tabindex="-1"])')].filter(el=>!el.disabled&&el.offsetParent!==null);
   if(focusable.length){
     const first=focusable[0],last=focusable[focusable.length-1];
     if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}
     else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}
   }
 }
 if(e.key==='Enter'&&modal&&!modal.classList.contains('hidden')){
   const ae=document.activeElement;if(ae&&ae.tagName!=='TEXTAREA'){e.preventDefault();startApp()}
 }
});

/* ---------- MODAL + ARRANQUE ---------- */
let modalOpener=null;
function setBackgroundInert(value){
 ['header.hero','nav.tabs','main'].forEach(sel=>{const el=$(sel);if(el)el.inert=value});
}
function closeModal(){
 const m=$('#setupModal');if(!m)return;
 m.classList.add('hidden');m.style.display='none';m.setAttribute('aria-hidden','true');setBackgroundInert(false);
 if(modalOpener&&document.contains(modalOpener))modalOpener.focus();
 modalOpener=null;
}
function openModal(opener){
 const m=$('#setupModal');if(!m)return;
 modalOpener=(opener&&opener.nodeType===1)?opener:document.activeElement;
 $('#familyName').value=S.family||'';
 $('#member1').value=S.members[0]||'';$('#member2').value=S.members[1]||'';$('#member3').value=S.members[2]||'';
 $('#varietySelect').value=S.variety||'peninsular';
 m.classList.remove('hidden');m.style.display='flex';m.removeAttribute('aria-hidden');setBackgroundInert(true);
 setTimeout(()=>{try{$('#familyName').focus()}catch(e){}},60);
}
function startApp(){
 try{
   S.family=($('#familyName').value||'').trim()||'Nuestra familia';
   S.members=[$('#member1').value.trim(),$('#member2').value.trim(),$('#member3').value.trim()].map((m,i)=>m||('Miembro '+(i+1)));
   S.variety=$('#varietySelect').value;
   save();
 }catch(e){/* nunca bloquear el cierre por un error de datos */}
 closeModal();
 $('#familyPill').textContent=S.family||'Nuestra familia';
 hydrateMembers();
 toast('👪 Datos de '+S.family+' actualizados. ¡A repasar!');
}

function boot(){
 $('#familyPill').textContent=S.family||'Nuestra familia';
 const te=$('#teacherEmoji');if(te)te.textContent=S.teacher?'🙈':'👁️';
 const tl=$('#teacherLbl');if(tl)tl.textContent=S.teacher?' Ocultar claves':' Claves';
 mountTasks();renderDom();hydrateAll();enhanceFr();applyFrAll();updateScore();
}

$('#btnStart').addEventListener('click',startApp);
$('#btnCloseSetup').addEventListener('click',closeModal);
$('#btnOpenSetup').addEventListener('click',e=>openModal(e.currentTarget));
$('#setupModal').addEventListener('click',e=>{if(e.target.id==='setupModal')closeModal()});

try{
 boot();
}catch(err){
 console.error(err);
}

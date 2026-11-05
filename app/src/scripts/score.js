/* Barra de progreso del dossier */
import { $ } from '../lib/utils.js';
import { TASKS } from '../data/tasks.js';
import { S } from '../lib/state.js';

export function updateScore(){
 let ok=0,ko=0,total=0;
 Object.keys(TASKS).forEach(id=>{const T=TASKS[id],C=S.checked[id]||{};
   T.items.forEach((_,i)=>{total++;if(C[i]===true)ok++;else if(C[i]===false)ko++})});
 $('#nOk').textContent=ok;$('#nKo').textContent=ko;
 const pct=total?Math.round(ok/total*100):0;
 $('#ringTxt').textContent=pct+'%';
 $('#ringFg').style.strokeDashoffset=String(119.4-(119.4*pct/100));
 const ring=$('#progressRing');if(ring)ring.setAttribute('aria-valuenow',String(pct));
}

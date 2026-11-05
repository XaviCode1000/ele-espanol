/* 1. UTILIDADES */
export const $=s=>document.querySelector(s);
export const $$=s=>Array.from(document.querySelectorAll(s));
export function norm(s){return String(s==null?'':s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'')
  .replace(/[¿?¡!.,;:"'«»()]/g,'').replace(/\s+/g,' ').trim()}
export const LMAP={a:'a',be:'b',b:'b',ce:'c',c:'c',de:'d',d:'d',e:'e',efe:'f',f:'f',ge:'g',g:'g',hache:'h',h:'h',
  jota:'j',j:'j',ka:'k',k:'k',ele:'l',l:'l',eme:'m',m:'m',ene:'n',n:'n','eñe':'ñ',ñ:'ñ',o:'o',pe:'p',p:'p',
  cu:'q',q:'q',erre:'r',r:'r',ese:'s',s:'s',te:'t',t:'t',u:'u',uve:'v',v:'v','uve doble':'w',w:'w',
  equis:'x',x:'x',ye:'y',y:'y','i griega':'y',zeta:'z',z:'z'};
export function lnorm(t){t=String(t||'').toLowerCase().trim().replace(/[.\-_,;:\s]/g,'').replace(/[áéíóúü]/g,m=>({'á':'a','é':'e','í':'i','ó':'o','ú':'u','ü':'u'}[m]));return LMAP[t]||t}
export function toast(msg,ms=2200){const t=$('#toast');t.textContent=msg;t.classList.add('show');clearTimeout(t._h);t._h=setTimeout(()=>t.classList.remove('show'),ms)}

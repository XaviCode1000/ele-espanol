/* 0. ALMACENAMIENTO SEGURO (no depende de localStorage) */
const KEY='ele_a1_dossier_v3';
const mem={};
function sGet(k){try{const v=window.localStorage.getItem(k);return v===null?(mem[k]??null):v}catch(e){return mem[k]??null}}
function sSet(k,v){mem[k]=v;try{window.localStorage.setItem(k,v)}catch(e){}}

export function blank(){return{family:'Nuestra familia',members:['Miembro 1','Miembro 2','Miembro 3'],variety:'peninsular',
  answers:{},checked:{},route:{},canDo:{},texts:{},proj:[{},{},{}],errors:[],
  domino:[],spell:[],teacher:false,frAll:false}}
export function read(){try{const r=sGet(KEY);if(!r)return blank();const p=JSON.parse(r);const b=blank();const defaults={family:b.family,members:b.members.slice()};const merged=Object.assign(b,p);if(!merged.family)merged.family=defaults.family;if(!Array.isArray(merged.members)||merged.members.length!==3)merged.members=defaults.members.slice();else merged.members=merged.members.map((m,i)=>String(m||'').trim()||defaults.members[i]);return merged}catch(e){return blank()}}
export const S=read();
export function save(){sSet(KEY,JSON.stringify(S))}
export function resetState(){Object.assign(S,blank())}

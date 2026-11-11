import {canViewService} from './role-access.js';
import {recommendations,homeIcons} from './catalog-spec.js?v=20261106';
import {serviceMatchRank} from './search-suggestions.js?v=20261106';

export const quickModes={default:'推荐应用',frequent:'高频应用',custom:'我的常用'};
export const defaultNames=homeIcons.filter(name=>name!=='馆藏搜索');
const normalize=name=>name==='研讨间预约'?'研讨间预约（校内IP）':name;
export function audiences(service){
 if(service.audiences)return service.audiences;
 return Object.entries(recommendations).filter(([,names])=>names.some(name=>normalize(name)===service.name)).map(([role])=>role);
}
export function ensurePortal(state){
 state.portal??={};const p=state.portal;
 p.modes??={};
 if(Object.hasOwn(quickModes,p.mode)&&!p.modes[state.role])p.modes[state.role]=p.mode;
 delete p.mode;
 p.custom??={};p.usage??={};
 return p;
}
export function getMode(state,role){return ensurePortal(state).modes[role]||'default';}
export function setMode(state,role,mode){if(!Object.hasOwn(quickModes,mode))throw Error('未知应用显示方式');ensurePortal(state).modes[role]=mode;}
export function filterApps(catalog,role,audience='all',q=''){
 const needle=String(q).trim().toLowerCase();
 return catalog.filter(s=>canViewService(role,s)&&(audience==='all'||audiences(s).includes(audience))&&(
  !needle||Number.isFinite(serviceMatchRank(s,needle))||
  (/[\p{Script=Han}]/u.test(needle)&&(`${s.name} ${s.description||''} ${s.category} ${(s.placements||[]).map(place=>place.primary+' '+place.category).join(' ')}`).toLowerCase().includes(needle))
 ));
}
export function quickApps(state,catalog,role,mode,recommendedOrder=null){
 const p=ensurePortal(state),available=filterApps(catalog,role),byId=new Map(available.map(s=>[s.id,s]));
 if(mode==='custom')return [...new Set(p.custom[role]||[])].map(id=>byId.get(id)).filter(Boolean).slice(0,9);
 const quickCandidates=available.filter(s=>s.name!=='馆藏搜索');
 const defaults=defaultNames.map(n=>quickCandidates.find(s=>s.name===n)).filter(Boolean);
 if(mode==='frequent'){
  const fallback=[...defaults,...quickCandidates.filter(s=>!defaults.includes(s))];
  const used=quickCandidates.filter(s=>p.usage[role]?.[s.id]?.count>0).sort((a,b)=>p.usage[role][b.id].count-p.usage[role][a.id].count||p.usage[role][b.id].last-p.usage[role][a.id].last);
  return [...used,...fallback.filter(s=>!used.includes(s))].slice(0,defaultNames.length);
 }
 if(Array.isArray(recommendedOrder)){
  return recommendedOrder.map(id=>byId.get(id)).filter(s=>s&&s.name!=='馆藏搜索').slice(0,9);
 }
 return defaults;
}
export function recordUse(state,role,id){
 const p=ensurePortal(state);p.usage[role]??={};const old=p.usage[role][id]||{count:0};
 p.usage[role][id]={count:Math.max(0,Number(old.count)||0)+1,last:Date.now()};
}
export function setCustom(state,role,ids){
 const unique=[...new Set(ids)];if(unique.length>9)throw Error('我的常用最多选择 9 个应用。');
 ensurePortal(state).custom[role]=unique;
}

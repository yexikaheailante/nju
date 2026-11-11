import {sourceRows,previousTargets} from './catalog-spec.js?v=20261106';
import {originalLinks} from './original-links.js?v=20261111.2';

// A function may be listed in more than one section of the source workbook.
export const originalGroups=[];
for(const row of sourceRows){
 let group=originalGroups.find(item=>item.primary===row.primary&&item.name===row.category);
 if(!group){group={primary:row.primary,name:row.category,items:[]};originalGroups.push(group);}
 if(!group.items.some(([name])=>name===row.name))group.items.push([row.name,previousTargets[row.name]||`service/original-${encodeURIComponent(row.name)}`]);
}

export function originalCatalog(services,legacy){
 const byId=new Map([...services,...legacy].map(item=>[item.id,item]));
 const list=[],byName=new Map();
 for(const row of sourceRows){
  const placement={primary:row.primary,category:row.category};
  if(byName.has(row.name)){
   const existing=byName.get(row.name);
   if(!existing.placements.some(place=>place.primary===placement.primary&&place.category===placement.category))existing.placements.push(placement);
   continue;
  }
  const target=previousTargets[row.name]||`service/original-${encodeURIComponent(row.name)}`;
  const id=target.startsWith('service/')?target.slice(8):`original-${encodeURIComponent(row.name)}`;
  const previous=byId.get(id),origin=originalLinks[row.name];
  const item={...previous,id,name:row.name,primary:row.primary,category:row.category,placements:[placement],
   source:'南京大学图书馆',sourceName:row.name,sourceUrl:origin?.sourceUrl||null,externalUrl:origin?.url||null,
   originalLink:origin,description:previous?.description||'查看服务入口与办理说明。',route:previous?.route||'directory',
   depth:origin?.url?'外部服务':origin?.kind==='unconfigured'?'暂未开放':origin?.kind==='content'?'服务说明':previous?.depth||'服务目录',target};
  byName.set(row.name,item);list.push(item);
 }
 return list;
}

import {quickModes,quickApps,filterApps,getMode} from './portal.js';

export function audienceTabs(c,selected='all'){
 return `<div class="portal-audiences" role="group" aria-label="按人群查找应用">${[['all','全部服务'],...Object.entries(c.roles)].map(([id,name])=>`<button data-action="audience" data-id="${id}" class="${id===selected?'active':''}" aria-pressed="${id===selected}">${name}</button>`).join('')}</div>`;
}
export function appTile(c,s,kind='portal-app'){
 const graphic={'文献服务':'book','科研服务':'layers','空间服务':'calendar','馆员':'grid','服务反馈':'message'}[s.category]||'folder';
 return c.originalLink(s.name,s.target||'service/'+s.id,kind,`<span class="portal-app-icon">${c.icon(graphic)}</span><span class="portal-app-name">${c.esc(s.name)}</span>${kind==='portal-app'?`<span class="portal-app-category">${c.esc(s.category)}</span><span class="portal-app-arrow">↗</span>`:''}`);
}
export function homePage(c){
 const mode=getMode(c.state,c.state.role),apps=quickApps(c.state,c.catalog,c.state.role,mode),list=filterApps(c.catalog,c.state.role,c.audience);
 return `<div class="portal-home" data-page="unified-home">
 <section class="hero portal-search" aria-label="搜索"><div class="search-tabs" role="group" aria-label="搜索范围">${[['resources','馆藏图书'],['services','图书馆服务']].map(([id,name])=>`<button data-action="scope" data-id="${id}" class="${c.scope===id?'active':''}" aria-pressed="${c.scope===id}">${name}</button>`).join('')}</div>
 ${c.searchForm()}<div class="portal-search-foot">${c.link(c.icon('message')+' 使用帮助','usage','btn usage-entry')}</div></section>
 <section class="portal-quick-section" aria-label="常用应用"><div class="portal-section-bar"><div class="portal-mode-tabs" role="group" aria-label="常用应用显示方式">${Object.entries(quickModes).map(([id,name])=>`<button data-action="quick-mode" data-id="${id}" aria-pressed="${mode===id}" class="${mode===id?'active':''}">${name}</button>`).join('')}</div><button class="portal-customize" data-action="customize">设置我的常用 ${c.icon('pen')}</button></div>
 ${apps.length?`<div class="portal-quick-grid">${apps.map(s=>appTile(c,s,'portal-quick')).join('')}</div>`:`<div class="portal-custom-empty"><span>还未添加常用应用</span>${c.btn('选择应用','customize','','soft')}</div>`}</section>
 <section class="portal-catalog"><div class="section-head"><h2>服务大厅</h2>${c.link('查看全部 →','services'+(c.audience==='all'?'':'?audience='+c.audience))}</div>${audienceTabs(c,c.audience)}
 ${list.length?`<div class="portal-app-grid">${list.slice(0,12).map(s=>appTile(c,s)).join('')}</div><div class="portal-show-more">${c.link(`查看全部 ${list.length} 项服务 →`,'services'+(c.audience==='all'?'':'?audience='+c.audience),'btn soft')}</div>`:`<div class="empty"><h3>当前身份没有可使用的此类应用</h3><p>人群标签用于查找服务，业务权限由服务提供方核验。</p></div>`}</section></div>`;
}
export function hallPage(c){
 const extended=c.params.get('source')==='reference',q=c.params.get('q')||'',audience=c.params.get('audience')||'all',cat=c.params.get('cat')||'全部',primary=c.params.get('primary')||'';
 const all=extended?c.referenceCatalog:c.catalog;
 const pool=filterApps(all,c.state.role,audience,q),list=pool.filter(s=>cat==='全部'||(extended?s.category===cat:(s.placements||[]).some(place=>place.primary===primary&&place.category===cat)));
 const query=(extra={})=>new URLSearchParams({...(extended?{source:'reference'}:{}),...(q?{q}:{}),...(audience!=='all'?{audience}:{}),...extra}).toString();
 const groups=extended?[...new Set(all.map(s=>s.category))].map(name=>({primary:'更多服务',name})):c.groups;
 return `${c.head('服务大厅','')}<div class="portal-hall-head"><form id="service-search" class="toolbar"><input name="q" aria-label="请输入功能名称" placeholder="输入服务名称或办理需求" value="${c.esc(q)}"><input type="hidden" name="audience" value="${c.esc(audience)}">${extended?'<input type="hidden" name="source" value="reference">':''}<button class="btn primary">${c.icon('search')} 搜索</button></form>${audienceTabs(c,audience)}</div>
 <div class="portal-hall-layout"><aside class="portal-category-nav"><h2>服务分类</h2>${c.link('全部','services?'+query({cat:'全部'}),cat==='全部'?'active':'')}${groups.map((group,i)=>`${i===0||groups[i-1].primary!==group.primary?`<div class="portal-primary">${c.esc(group.primary)}</div>`:''}${c.link(group.name,'services?'+query({primary:group.primary,cat:group.name}),primary===group.primary&&cat===group.name?'active':'')}`).join('')}<div class="portal-catalog-switch">${c.link('图书馆应用','services','text-link')}${c.link('更多服务','services?source=reference','text-link')}</div></aside>
 <section><div class="section-head"><span class="count">${list.length} 项服务</span>${c.btn('导出服务目录','export-catalog','','small')}</div>${list.length?`<div class="portal-hall-grid">${list.map(c.serviceCard).join('')}</div>`:c.empty('没有找到匹配服务','可更换关键词或人群分类。',c.link('查看全部服务','services','btn soft'))}</section></div>`;
}
export function myPage(c,content){
 return `<section class="portal-my-header"><div><span class="portal-eyebrow">个人服务</span><h1>我的</h1></div><label class="portal-identity">当前身份<select id="role" aria-label="当前身份">${c.opts(Object.entries(c.roles),c.state.role)}</select></label></section>
 <p class="portal-local-note">资料和申请保存在当前浏览器。学校账号与业务权限由统一身份认证及服务系统核验。</p>
 <nav class="portal-my-links" aria-label="我的资料">${c.link(c.icon('star')+' 我的收藏','research?tab=favorites')}${c.link(c.icon('folder')+' 研学助手','research')}${c.state.role==='teacher'?c.link(c.icon('book')+' 课程文献中心','courses'):''}${c.state.role==='librarian'?c.link(c.icon('grid')+' 馆员系统','services?audience=librarian'):''}<button data-action="customize">${c.icon('pen')} 我的常用</button></nav>${content}`;
}

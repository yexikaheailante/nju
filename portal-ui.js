import {quickModes,quickApps,filterApps,getMode} from './portal.js?v=20261112.2';
import {originalLinks} from './original-links.js?v=20261112.2';

const catalogShortcuts = [
 ['进入检索首页','https://opac.nju.edu.cn/#/Home'],
 ['新书通报','https://opac.nju.edu.cn/#/newBookInform'],
 ['分类浏览','https://opac.nju.edu.cn/#/categorySearchList'],
 ['读者荐购',originalLinks['资源荐购'].url],
 ['馆藏分布','https://lib.nju.edu.cn/gytsg/gzbj/xlg.htm'],
 ['借阅制度','https://lib.nju.edu.cn/gytsg/gzzd.htm'],
];
const campusAvailability = [
 {name:'仙林校区',seats:{available:426,total:1200},rooms:{available:8,total:18}},
 {name:'鼓楼校区',seats:{available:128,total:520},rooms:{available:3,total:8}},
 {name:'浦口校区',seats:{available:68,total:260},rooms:{available:2,total:5}},
 {name:'苏州校区',seats:{available:102,total:360},rooms:{available:4,total:9}},
];
const countFormat = new Intl.NumberFormat('zh-CN');
const availabilityCount = ({available,total})=>`<strong>${countFormat.format(available)}</strong><span> / ${countFormat.format(total)}</span>`;

const nameParts = {
 '研讨间预约（校内IP）':['研讨间预约','（校内IP）'],
 '科技查新/查收查引':['科技查新/','查收查引'],
 '江苏省高校智盟卡':['江苏省','高校智盟卡'],
 '馆际互借与文献传递':['馆际互借','与文献传递'],
 '一体化微服务平台':['一体化','微服务平台'],
 '知识产权信息服务':['知识产权','信息服务'],
 '人文社科数据服务':['人文社科','数据服务'],
 'CNKI AI学术研究助手':['CNKI AI','学术研究助手'],
 'E-Academic（易学术）':['E-Academic','（易学术）'],
 '校友线下扫码入馆':['校友','线下扫码入馆'],
};
const words = typeof Intl.Segmenter==='function'?new Intl.Segmenter('zh', {granularity:'word'}):null;
function quickName(name, esc){
 const parts=Object.hasOwn(nameParts,name)?nameParts[name]
  :name.length<=6?[name]:words?[...words.segment(name)].map(part=>part.segment):null;
 if(!parts)return esc(name);
 return parts.map(part=>`<span class="quick-name-part${part.length>10?' long':''}">${esc(part)}</span>`).join('<wbr>');
}

export function audienceTabs(c,selected='all'){
 return `<div class="portal-audiences" role="group" aria-label="按人群查找应用">${[['all','全部服务'],...Object.entries(c.roles)].map(([id,name])=>`<button data-action="audience" data-id="${id}" class="${id===selected?'active':''}" aria-pressed="${id===selected}">${name}</button>`).join('')}</div>`;
}
export function appTile(c,s,kind='portal-app'){
 const external=s.externalUrl||s.originalLink?.kind==='role';
 const body=`<span class="portal-app-icon">${c.serviceIcon(s.name)}</span>${kind==='portal-app'?`<span class="portal-app-copy"><span class="portal-app-name">${c.esc(s.name)}</span><span class="portal-app-category">${c.esc(s.category)}</span></span><span class="portal-app-arrow" aria-hidden="true">${external?'↗':'→'}</span>`:`<span class="portal-app-name">${quickName(s.name,c.esc)}</span>`}`;
 return c.serviceLink(s,kind,body);
}

function spacePreview(c){
 const seat=c.catalog.find(service=>service.name==='座位预约');
 const roomUrl=originalLinks['研讨间预约（校内IP）'].url;
 const links=[
  seat&&['user','座位预约','',c.serviceLink(seat,'btn soft','预约指引 <span aria-hidden="true">→</span>')],
  ['calendar','研讨间预约','校内IP',`<a class="btn soft" href="${c.esc(roomUrl)}" target="_blank" rel="noopener noreferrer" aria-label="研讨间预约，立即预约">立即预约 <span aria-hidden="true">↗</span></a>`],
 ].filter(Boolean);
 return `<section class="portal-catalog space-preview" aria-labelledby="space-preview-title">
  <div class="section-head"><h2 id="space-preview-title">空间与座位</h2></div>
  <div class="space-preview-layout">
   <div class="campus-availability">
    <table>
     <caption><span>各校区预约概览</span><span class="campus-example">示例数据</span></caption>
     <thead><tr><th scope="col">校区</th><th scope="col">可预约座位<span class="campus-total-label"><span class="campus-label-divider"> / </span>总座位</span></th><th scope="col">可预约研讨间<span class="campus-total-label"><span class="campus-label-divider"> / </span>总研讨间</span></th></tr></thead>
     <tbody>${campusAvailability.map(({name,seats,rooms})=>`<tr><th scope="row">${name}</th><td>${availabilityCount(seats)}</td><td>${availabilityCount(rooms)}</td></tr>`).join('')}</tbody>
    </table>
   </div>
   <div class="space-preview-links">${links.map(([icon,name,note,entry])=>`<div class="space-preview-entry">
    <span class="portal-app-icon" aria-hidden="true">${c.icon(icon)}</span><div><h3>${name}</h3>${note?`<small>${note}</small>`:''}</div>
    ${entry}
   </div>`).join('')}</div>
  </div></section>`;
}
export function homePage(c){
 const mode=getMode(c.state,c.state.role),apps=quickApps(c.state,c.catalog,c.state.role,mode,c.recommendedOrder),list=filterApps(c.catalog,c.audience==='all'?c.state.role:c.audience,c.audience);
 return `<div class="portal-home" data-page="unified-home">
 <section class="hero portal-search" aria-label="搜索"><div class="search-tabs" role="group" aria-label="搜索范围">${[['resources','馆藏资源检索'],['services','应用搜索']].map(([id,name])=>`<button data-action="scope" data-id="${id}" class="${c.scope===id?'active':''}" aria-pressed="${c.scope===id}">${name}</button>`).join('')}<a class="portal-search-tab-link" href="${c.esc(originalLinks['南雍闻道'].url)}" target="_blank" rel="noopener noreferrer">南雍闻道</a></div>
 ${c.searchForm()}${c.scope==='resources'?`<nav class="catalog-shortcuts" aria-label="馆藏资源快捷入口">${catalogShortcuts.map(([label,url])=>`<a href="${c.esc(url)}" target="_blank" rel="noopener noreferrer">${label}</a>`).join('')}</nav>`:`<div class="portal-search-foot"><div class="portal-search-hints" id="portal-search-hints" aria-live="polite">${c.searchHints()}</div></div>`}</section>
 <section class="portal-quick-section" aria-label="常用应用"><div class="portal-section-bar"><div class="portal-mode-tabs" role="group" aria-label="常用应用显示方式">${Object.entries(quickModes).map(([id,name])=>`<button data-action="quick-mode" data-id="${id}" aria-pressed="${mode===id}" class="${mode===id?'active':''}">${name}</button>`).join('')}</div><button class="portal-customize" data-action="customize">设置我的常用 ${c.icon('pen')}</button></div>
 ${apps.length?`<div class="portal-quick-grid">${apps.map(s=>appTile(c,s,'portal-quick')).join('')}</div>`:mode==='custom'?`<div class="portal-custom-empty"><span>还未添加常用应用</span>${c.btn('选择应用','customize','','soft')}</div>`:`<div class="portal-custom-empty"><span>暂无${quickModes[mode]}</span></div>`}</section>
 <section class="portal-catalog"><div class="section-head"><h2>服务大厅</h2>${c.link('查看全部 →','services'+(c.audience==='all'?'':'?audience='+c.audience))}</div>${audienceTabs(c,c.audience)}
 ${list.length?`<div class="portal-app-grid">${list.slice(0,12).map(s=>appTile(c,s)).join('')}</div>${list.length>12?`<div class="portal-show-more">${c.link(`查看全部 ${list.length} 项服务 →`,'services'+(c.audience==='all'?'':'?audience='+c.audience),'btn soft')}</div>`:''}`:`<div class="empty"><h3>暂无对应服务</h3><p>可切换人群查看其他服务。</p></div>`}</section>${spacePreview(c)}</div>`;
}
export function hallPage(c){
 const q=c.params.get('q')||'', requestedAudience=c.params.get('audience');
 const oldRole=c.params.get('primary')==='推荐服务'
  ?Object.keys(c.roles).find(role=>c.roles[role]===c.params.get('cat')):undefined;
 const audience=requestedAudience==='all'||Object.hasOwn(c.roles,requestedAudience)?requestedAudience:oldRole||'all';
 const groups=c.groups.filter(group=>group.primary!=='推荐服务');
 const selected=groups.find(group=>group.primary===c.params.get('primary')&&group.name===c.params.get('cat'));
 const pool=filterApps(c.catalog,audience==='all'?c.state.role:audience,audience,q);
 const list=pool.filter(s=>!selected||s.placements.some(place=>place.primary===selected.primary&&place.category===selected.name));
 const query=(extra={})=>new URLSearchParams({...(q?{q}:{}),...(audience!=='all'?{audience}:{}),...extra}).toString();
 return `${c.head('服务大厅','')}<div class="portal-hall-head"><form id="service-search" class="toolbar"><input name="q" aria-label="请输入功能名称" placeholder="输入服务名称或办理需求" value="${c.esc(q)}"><input type="hidden" name="audience" value="${c.esc(audience)}"><button class="btn primary">${c.icon('search')} 搜索</button></form>${audienceTabs(c,audience)}</div>
 <div class="portal-hall-layout"><aside class="portal-category-nav"><h2>服务分类</h2>${c.link('全部','services?'+query(),selected?'':'active')}${groups.map((group,i)=>`${i===0||groups[i-1].primary!==group.primary?`<div class="portal-primary">${c.esc(group.primary)}</div>`:''}${c.link(c.esc(group.name),'services?'+query({primary:group.primary,cat:group.name}),group===selected?'active':'')}`).join('')}</aside>
 <section><div class="section-head"><span class="count">${list.length} 项服务</span></div>${list.length?`<div class="portal-hall-grid">${list.map(c.serviceCard).join('')}</div>`:c.empty('没有找到匹配服务','可更换关键词或人群分类。',c.link('查看全部服务','services','btn soft'))}</section></div>`;
}
export function myPage(c,content){
 return `<section class="portal-my-header"><div><span class="portal-eyebrow">个人服务</span><h1>我的</h1></div><label class="portal-identity">当前身份<select id="role" aria-label="当前身份">${c.opts(Object.entries(c.roles),c.state.role)}</select></label></section>
 <p class="portal-local-note">资料和申请保存在当前浏览器。学校账号与业务权限由统一身份认证及服务系统核验。</p>
 <nav class="portal-my-links" aria-label="我的资料">${c.link(c.icon('star')+' 我的收藏','research?tab=favorites')}${c.link(c.icon('folder')+' 研学助手','research')}${c.state.role==='teacher'?c.link(c.icon('book')+' 课程文献中心','courses'):''}${c.state.role==='librarian'?c.link(c.icon('grid')+' 馆员系统','services?audience=librarian'):''}<button data-action="customize">${c.icon('pen')} 我的常用</button></nav>${content}`;
}

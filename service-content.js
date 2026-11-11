import {donationInstructions} from './original-links.js?v=20261111.2';
const descriptions={
 '馆藏搜索':'检索馆藏图书，查看馆藏位置与可借状态。',
 '图书续借':'查看当前借阅、应还日期，并办理符合条件的图书续借。',
 '数据库导航':'按学科、语种和资源类型查找图书馆数据库。',
 '资源动态':'查看数字资源更新、新增资源和试用通知。',
 '热门借阅':'查看图书借阅排行，发现读者关注的馆藏。',
 '资源荐购':'向图书馆推荐需要采购的图书或其他资源。',
 '到馆新书':'查看近期到馆图书及其馆藏信息。',
 '图书捐赠':'了解图书捐赠范围、接收原则及联系办法。',
 '图书资产入库':'查询图书资产登记与入库办理要求。',
 '馆际互借与文献传递':'通过馆际合作获取本馆未收藏的文献。',
 'CADAL数字资源':'检索和阅读CADAL提供的数字化文献。',
 '南雍撷珍':'浏览南京大学图书馆古籍与特色文献数字资源。',
 '校友云书房':'查看面向校友提供的数字阅读资源及使用方法。',
 '江苏省高校智盟卡':'查询联盟高校馆藏，了解跨校入馆和图书借阅服务。',
 '科技查新/查收查引':'查询科技查新、论文收录与引用检索的办理要求。',
 '知识产权信息服务':'了解专利检索、知识产权咨询与分析服务。',
 '人文社科数据服务':'查找人文社会科学研究中的数据支持服务。',
 '开放时间':'查询各馆舍开放时间和临时调整安排。',
 '全景导览':'通过全景视图了解图书馆空间与馆舍环境。',
 '座位预约':'通过南京大学信息门户或南京大学 APP 预约阅览座位。',
 '研讨间预约（校内IP）':'查看研讨间使用要求并进入预约系统。',
 'AI馆员':'向图书馆智能咨询助手提问，查询服务信息。',
 '意见反馈':'向图书馆反映使用问题、提出服务建议。',
 '校园生活助手':'咨询校园生活相关信息。',
 '南雍闻道':'使用面向南京大学的学术检索与研究辅助平台。',
 '研学助手':'进入研学助手，开展文献检索与研究资料整理。',
 '科学导航':'检索科学文献，查找研究相关资料。',
 'CNKI AI学术研究助手':'使用知网学术研究助手检索和阅读学术资料。',
 'E-Academic（易学术）':'使用易学术平台辅助文献查找与学术阅读。',
 'AMiner':'查询学术文献、研究者和研究领域信息。',
 '沁言学术':'使用沁言学术开展资料检索与研究辅助。',
 '秘塔AI':'使用秘塔AI搜索资料并查看来源。',
 'Scopus AI':'在Scopus平台中开展学术资料探索。',
 'Deepseek':'进入Deepseek，进行问答和文本处理。',
 '豆包':'进入豆包，进行问答、写作与资料处理。',
 'Kimi':'进入Kimi，开展问答与文档阅读。',
 '通义千问':'进入通义千问，开展问答与文本处理。',
 '文心一言':'进入文心一言，开展问答与内容创作。',
 '讯飞星火':'进入讯飞星火，开展问答与写作辅助。',
 '腾讯元宝':'进入腾讯元宝，进行问答与文档分析。',
 '智谱清言':'进入智谱清言，开展问答与内容处理。',
 '办公小浣熊':'进入办公小浣熊，辅助处理办公文档。',
 'ChatExcel':'使用自然语言辅助分析和处理表格。',
 '有道写作':'使用有道写作辅助修改和润色文字。',
 '新生指南':'了解入馆、借阅、资源使用等基础事项。',
 '校友线下扫码入馆':'了解校友校园码入馆的办理与使用方法。',
 'NLSP':'进入图书馆业务管理系统。',
 '一体化微服务平台':'进入图书馆一体化微服务业务平台。',
 '学术追踪':'在南雍闻道中关注研究主题与学术动态。',
};
export function serviceCopy(service,config={services:{}}){
 const custom=config.services?.[service.id];
 const intro=custom?.intro||(Object.hasOwn(descriptions,service.name)?descriptions[service.name]:'')||service.description||'查看服务内容与办理方法。';
 const specific={
  '馆藏搜索':'输入书名、作者、ISBN或主题进行检索。打开书目详情，查看收藏馆、索书号和借阅状态。个人借阅信息需登录后查看。',
  '图书续借':'登录后进入“我的借阅”，查看应还日期并选择可续借图书。是否符合续借条件及续借结果以馆藏系统显示为准。',
  '江苏省高校智盟卡':'在“江苏省高校数字图书馆JALIS”公众号完成首次绑定认证。使用前查询收藏馆的入馆和借阅要求。',
  '座位预约':'请打开「南京大学」APP，或用微信扫描下方二维码，关注「南京大学信息门户」。登录后进入「座位预约」办理。',
  '研讨间预约（校内IP）':'连接校园网络，打开预约入口，按系统要求选择场地、日期和时段。查看审核状态并按时使用。',
  '意见反馈':'通过“我的图书馆”进入问题反馈。可先在本站整理反馈草稿，再复制内容到反馈入口发送。',
  '校友线下扫码入馆':'准备校友校园码，按入馆现场指引核验身份并扫码入馆。',
 };
 const instructions=custom?.instructions||(Object.hasOwn(specific,service.name)?specific[service.name]:'')||(service.name==='图书捐赠'?donationInstructions.join('\n\n'):service.externalUrl?'点击服务入口，按页面提示完成检索或办理。需要账号或机构权限的资源，请按服务提供方要求登录。':'查看本页服务说明，按提示使用对应功能。');
 return {intro,instructions};
}
export function validateConfig(value){
 if(!value||value.version!==1||!value.services||Array.isArray(value.services)||typeof value.services!=='object')throw Error('配置文件格式不正确');
 for(const item of Object.values(value.services)){
  if(!item||typeof item.intro!=='string'||typeof item.instructions!=='string'||item.intro.length>300||item.instructions.length>6000)throw Error('简介或使用说明格式不正确');
  if(/https?:\/\/|www\./i.test(item.intro+' '+item.instructions))throw Error('请将网址保留在服务入口中，简介与说明只填写文字。');
 }
 return value;
}
export async function publishConfig(config,token,request=fetch){
 validateConfig(config);if(!token.trim())throw Error('请填写具有本仓库内容写入权限的GitHub访问令牌');
 const url='https://api.github.com/repos/yexikaheailante/nju/contents/service-content.json';
 const headers={Accept:'application/vnd.github+json',Authorization:'Bearer '+token.trim(),'X-GitHub-Api-Version':'2022-11-28'};
 const old=await request(url+'?ref=main',{headers});
 if(!old.ok&&old.status!==404)throw Error('无法读取发布配置，请检查仓库授权。');
 const existing=old.ok?await old.json():{};
 const bytes=new TextEncoder().encode(JSON.stringify(config,null,2)+'\n');let binary='';for(const byte of bytes)binary+=String.fromCharCode(byte);
 const result=await request(url,{method:'PUT',headers:{...headers,'Content-Type':'application/json'},body:JSON.stringify({message:'更新服务大厅简介与使用说明',branch:'main',...(existing.sha?{sha:existing.sha}:{}),content:btoa(binary)})});
 if(!result.ok)throw Error(result.status===409?'配置刚被其他管理员更新，请刷新后重新编辑。':'发布失败，请检查仓库内容写入权限。');
 return (await result.json()).commit?.sha;
}

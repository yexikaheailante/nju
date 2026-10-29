export const usageGuides={
student:[
{title:'馆藏搜索与文献收藏',route:'discover',image:'student-search.png',caption:'文献服务：检索、筛选、收藏与加入文献夹',steps:['在首页“馆藏搜索”输入书名、作者或主题，点击“馆藏搜索”，查看匹配文献。','使用左侧“资源类型”“出版时间”筛选，点击“应用筛选”；点击书目上的“收藏”或“加入文献夹”。','首页快捷入口和功能目录中带 ↗ 的链接会打开原网站；正式馆藏与数据库需要在原网站查询。']},
{title:'研学助手',route:'research',image:'student-project.png',caption:'研学助手：文献夹、阅读笔记、综述矩阵与开题提纲',steps:['进入“科研服务”，点击“研学助手”建立项目，填写项目名称和研究问题。','在“文献服务”找到书目，点击“加入文献夹”并选择项目。返回项目后，从“阅读笔记”记录摘录、页码和思考。','在“综述矩阵”和“开题提纲”逐项填写并保存；“引用导出”可下载文本或 BibTeX。内容由你填写，本站不会自动生成论文。']},
{title:'馆际互借与文献传递',route:'resource/r3',image:'student-request.png',caption:'文献获取申请：填入书目信息和已尝试的渠道',steps:['进入一条文献记录的详情，点击“馆际互借与文献传递”；也可在该服务的“使用说明”中选择办理。','填写题名、说明和已尝试的获取渠道，点击“保存并继续”。通过页面右上角“咨询反馈”查看申请。','状态为“待补材料”时进入申请并点击“补充材料”；收到馆员回复后可“确认已解决”或“继续提问”。首页同名外链通向办理说明。']},
{title:'座位预约与研讨间预约',route:'spaces?tab=rooms',image:'student-space.png',caption:'空间服务：预约入口与时段需求登记',steps:['首页“座位预约”提供微信二维码，也可使用南京大学 APP。研讨间预约请在校内网络访问官方入口。','在“空间服务”点击“选择日期与时段”登记个人需求，填写日期和起止时间。此记录保存在当前浏览器，实际预约仍需在官方系统完成。','与本浏览器已登记时段重叠时会提示冲突。通过“我的预约”查看或取消登记，取消后可重新选择时段。']}
],
teacher:[
{title:'课程文献中心',route:'courses',image:'teacher-course.png',caption:'课程文献中心：建立书单、添加书目与申请馆员补充',steps:['先在页面右上角选择“教职工”，点击首页常用功能中的“课程文献中心”，也可从“科研服务”进入。','点击“创建课程文献中心”，填写课程名称与说明。创建后点击“添加书目”，选择文献记录加入课程。','点击“申请馆员补充”，说明需要补充的资料方向并提交。请求将关联到这门课程。']},
{title:'查看课程请求的处理结果',route:'workspace',image:'teacher-result.png',caption:'课程请求处理记录：查看馆员回复与关联课程',steps:['进入“课程文献中心”下方的“关联补充请求”，或点击右上角“咨询反馈”查看申请。','如果馆员要求补充材料，打开申请并点击“补充材料”，填写所需信息后提交。','馆员回复后，在申请中阅读处理记录；点击“确认已解决”完成本次申请，或点击“继续提问”。“返回课程文献中心”可回到原书单。']},
{title:'科研与文献服务',route:'services?cat=科研服务',image:'teacher-services.png',caption:'图书馆服务：分类查看功能与办理入口',steps:['通过首页或“图书馆服务”查找“科技查新/查收查引”“知识产权信息服务”“南雍闻道”等功能。','点击功能名或“打开服务入口”前往原网站；“使用说明”可查看访问条件及相关办理说明。','教职工也可使用文献记录收藏、研学助手、阅读笔记及空间预约。不同身份的自建项目分别保存。']}
],
alumni:[
{title:'查找资源与服务入口',route:'services',image:'alumni-services.png',caption:'校友/社会公众：按功能名称搜索和分类查找服务',steps:['在右上角选择“校友/社会公众”，进入“图书馆服务”。输入功能名称后点击“搜索”，或点击分类查看。','点击“校友云书房”“南雍撷珍”“CADAL数字资源”等原名入口，打开对应网站。','外部服务可能需要独立账号或机构授权。标注“暂未开放”的功能可通过咨询留言了解。']},
{title:'高校智盟卡',route:'service/n8',image:'alumni-card.png',caption:'江苏省高校智盟卡：服务入口与访问说明',steps:['在首页快捷入口或专门的“高校智盟卡”卡片中，点击“江苏省高校智盟卡”。','阅读原微信指南，核对申领对象、参与高校及使用要求。若电脑不能打开微信页面，可在微信中打开。','本站不发卡、不核验校友资格。需要进一步确认时，可使用“咨询留言”。校友身份不能提交本站的座位或研讨间预约。']},
{title:'咨询留言与回复查询',route:'workspace',image:'alumni-consult.png',caption:'咨询反馈：提交咨询并追踪申请',steps:['首页“咨询留言”打开图书馆咨询入口。在本站记录和管理问题时，点击右上角“咨询反馈”，再点击“咨询留言”。','填写主题和问题后点击“保存并继续”。申请出现在当前身份的“我的服务申请”中。','打开申请查看状态和回复；如需补充材料或继续提问，使用申请详情右侧的相应按钮。']}
],
librarian:[
{title:'查看与受理服务工单',route:'workspace',image:'librarian-list.png',caption:'馆员服务台：跨角色查看申请并按状态筛选',steps:['在右上角选择“馆员”，首页即显示馆员服务台。点击工单状态或“查看全部工单”进入列表，也可从“咨询反馈”进入。','通过“待受理”“处理中”“待补材料”等状态筛选工单，点击“查看与处理”。','核对书目信息、申请说明与关联课程，点击“受理此申请”。只有先受理，才能要求补充材料或回复。']},
{title:'补充材料与回复处理结果',route:'workspace',image:'librarian-process.png',caption:'馆员工单详情：要求补充材料或回复处理结果',steps:['在“处理中”的工单右侧点击“要求补充材料”，写清需要补充的内容。申请人补充后，工单返回处理中。','点击“回复处理结果”，填写处理意见或获取路径并提交。回复会显示在申请处理记录中。','申请人可确认解决或继续提问。课程请求还会显示在教职工原课程的“关联补充请求”中。']},
{title:'馆员系统与处理记录',route:'services?cat=馆员',image:'librarian-tools.png',caption:'馆员系统：一体化微服务平台与 NLSP',steps:['保持“馆员”身份，在“图书馆服务”选择“馆员”分类，点击“一体化微服务平台”或“NLSP”进入原系统。','外部系统需要原有馆员账号和权限；请使用相应系统的授权账号。','本站工单详情中的“导出处理记录”可保存当前申请的记录；页脚“导出数据”可备份当前浏览器的数据。']}
]};

export function usagePage(role,activeRole,roles,esc,step){
 const selected=Object.hasOwn(usageGuides,role)?role:activeRole;
 const entries=usageGuides[selected];
 const requested=Number(step);const index=Number.isInteger(requested)&&requested>=1&&requested<=entries.length?requested-1:0;
 const entry=entries[index];const href=n=>'#usage?role='+selected+'&step='+(n+1);
 return `<section class="usage-header"><div><h1>使用帮助</h1><p>按角色查看操作步骤与页面截图</p></div><a class="usage-back" href="#home">返回首页 ↗</a></section>
 <nav class="usage-role-tabs" aria-label="使用帮助角色">${Object.entries(roles).map(([id,name])=>`<a class="usage-role-tab ${id===selected?'active':''}" href="#usage?role=${id}" ${id===selected?'aria-current="page"':''}>${esc(name)}</a>`).join('')}</nav>
 <div class="usage-layout"><aside class="usage-sidebar"><div class="usage-directory-title">${esc(roles[selected])}<span>${entries.length} 项操作</span></div><nav class="usage-directory" aria-label="本角色帮助目录">${entries.map((e,i)=>`<a class="${i===index?'active':''}" href="${href(i)}" ${i===index?'aria-current="step"':''}><span>${String(i+1).padStart(2,'0')}</span><span>${esc(e.title)}</span><span class="usage-directory-arrow">›</span></a>`).join('')}</nav><section class="usage-tips" aria-labelledby="usage-tips-title"><h3 id="usage-tips-title">使用前须知</h3><p>右上角下拉框切换操作身份；这里的角色标签只切换帮助内容。</p><p>外部入口在新窗口打开，账号与授权由原网站提供。资料与申请保存在当前浏览器。</p><p>“咨询反馈”可查看申请和回复；页脚可导出数据或清空本地数据。重置会清除自建内容。</p></section></aside>
 <article class="usage-tutorial"><header class="usage-tutorial-header"><div><span class="usage-step-meta">操作 ${String(index+1).padStart(2,'0')} / ${String(entries.length).padStart(2,'0')}</span><h2>${esc(entry.title)}</h2></div><a class="btn soft" href="#${entry.route}">打开功能 →</a></header><ol class="usage-instructions">${entry.steps.map((s,i)=>`<li><span>${i+1}</span><p>${esc(s)}</p></li>`).join('')}</ol><figure class="usage-figure"><figcaption><span>${esc(entry.caption)}</span><a href="assets/help/${entry.image}" target="_blank" rel="noopener noreferrer">查看大图 ↗</a></figcaption><a class="usage-image" href="assets/help/${entry.image}" target="_blank" rel="noopener noreferrer" aria-label="查看${esc(entry.caption)}截图大图"><img src="assets/help/${entry.image}" alt="${esc(entry.caption)}" width="1120" height="720"></a></figure><nav class="usage-pager" aria-label="帮助翻页">${index>0?`<a href="${href(index-1)}">← 上一项<span>${esc(entries[index-1].title)}</span></a>`:'<span></span>'}${index<entries.length-1?`<a href="${href(index+1)}">下一项 →<span>${esc(entries[index+1].title)}</span></a>`:'<a href="#home">返回首页 →</a>'}</nav></article></div>`;
}

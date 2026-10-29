const experiences={
 student:{landing:'reader',focus:'文献服务',shortcuts:[['search','馆藏搜索','discover'],['book','图书续借','service/s6'],['grid','数据库导航','discover?tab=databases'],['file','馆际互借与文献传递','service/s10'],['calendar','座位预约','spaces?tab=seats'],['folder','研学助手','research']],sections:[['文献服务',['馆藏搜索','图书续借','数据库导航','资源荐购','馆际互借与文献传递']],['科研服务',['研学助手','南雍闻道','人文社科数据服务','科技查新/查收查引','知识产权信息服务']],['空间服务',['座位预约','研讨间预约（校内IP）','开放时间','全景导览','江苏省高校智盟卡']]]},
 teacher:{landing:'reader',focus:'科研服务',shortcuts:[['layers','科技查新/查收查引','service/s12'],['file','知识产权信息服务','service/s42'],['grid','人文社科数据服务','service/n5'],['search','南雍闻道','research'],['book','课程文献中心','courses'],['folder','研学助手','research']],sections:[['科研服务',['科技查新/查收查引','知识产权信息服务','人文社科数据服务','南雍闻道','研学助手']],['课程文献中心',['课程文献中心','数据库导航','资源荐购','馆际互借与文献传递','图书资产入库']],['文献服务',['馆藏搜索','图书续借','热门借阅','到馆新书','江苏省高校智盟卡']]]},
 alumni:{landing:'reader',focus:'文献服务',shortcuts:[['book','校友云书房','service/n4'],['folder','南雍撷珍','service/n2'],['grid','CADAL数字资源','service/n3'],['book','图书捐赠','service/s49'],['clock','开放时间','spaces?tab=hours'],['message','咨询留言','service/original-consult']],sections:[['文献服务',['校友云书房','南雍撷珍','CADAL数字资源','馆藏搜索','图书捐赠']],['推荐服务',['江苏省高校智盟卡','开放时间','全景导览','AI馆员','咨询留言']]]},
 librarian:{landing:'staff',focus:'馆员服务台',shortcuts:[['grid','一体化微服务平台','service/n14'],['layers','NLSP','service/n15'],['file','待受理','workspace?status=待受理'],['clock','处理中','workspace?status=处理中'],['message','待补材料','workspace?status=待补材料'],['check','已回复','workspace?status=已回复']],sections:[]}
};
export const roleExperience=role=>experiences[role]||experiences.student;
export const canCreateCourse=role=>role==='teacher';
export const canReserve=role=>role==='student'||role==='teacher';
export const canViewService=(role,service)=>!service||!(service.category==='馆员'||service.category==='馆员业务系统'||['n14','n15'].includes(service.id))||role==='librarian';
export const canViewTicket=(role,ticket)=>!!ticket&&(role==='librarian'||ticket.owner===role);
export function requireAction(role,action){
 if(['new-course','course-add','course-remove','course-request'].includes(action)&&!canCreateCourse(role))throw Error('课程文献中心的创建与补充申请仅限教职工。');
 if(action==='reserve'&&!canReserve(role))throw Error('当前身份可查看官方预约入口，不能登记时段需求。');
 if(['ticket-accept','ticket-need','ticket-reply'].includes(action)&&role!=='librarian')throw Error('仅馆员可受理和回复工单。');
}

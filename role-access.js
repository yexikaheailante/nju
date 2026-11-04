export const canCreateCourse=role=>role==='teacher';
export const canReserve=role=>role==='student'||role==='teacher';
export const canViewService=(role,service)=>!service||(!(service.category==='馆员'||service.category==='馆员业务系统'||['n14','n15'].includes(service.id))||role==='librarian')&&!(role==='guest'&&(['n4','n9'].includes(service.id)||['校友云书房','校友线下扫码入馆','校友扫码入馆'].includes(service.name)));
export const canViewTicket=(role,ticket)=>!!ticket&&(role==='librarian'||ticket.owner===role);
export function requireAction(role,action){
 if(['new-course','course-add','course-remove','course-request'].includes(action)&&!canCreateCourse(role))throw Error('课程文献中心的创建与补充申请仅限教职工。');
 if(action==='reserve'&&!canReserve(role))throw Error('当前身份可查看官方预约入口，不能登记时段需求。');
 if(['ticket-accept','ticket-need','ticket-reply'].includes(action)&&role!=='librarian')throw Error('仅馆员可受理和回复工单。');
}

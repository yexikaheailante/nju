import {uiIcon} from './ui-icons.js?v=20261105.4';
const symbols={
 "馆藏搜索": "BookSearch",
 "图书续借": "BookClock",
 "数据库导航": "FolderSearch",
 "资源动态": "Newspaper",
 "热门借阅": "Flame",
 "资源荐购": "BookPlus",
 "到馆新书": "BookOpen",
 "图书捐赠": "HandHeart",
 "图书资产入库": "Archive",
 "馆际互借与文献传递": "BookCopy",
 "CADAL数字资源": "LibraryBig",
 "南雍撷珍": "Landmark",
 "校友云书房": "CloudDownload",
 "江苏省高校智盟卡": "IdCard",
 "科技查新/查收查引": "FileSearch",
 "知识产权信息服务": "ShieldCheck",
 "人文社科数据服务": "ChartNoAxesCombined",
 "开放时间": "Clock",
 "全景导览": "Compass",
 "座位预约": "Armchair",
 "研讨间预约（校内IP）": "Presentation",
 "AI馆员": "Bot",
 "意见反馈": "MessageSquareText",
 "校园生活助手": "School",
 "南雍闻道": "GraduationCap",
 "研学助手": "NotebookPen",
 "科学导航": "Atom",
 "新生指南": "BookMarked",
 "校友线下扫码入馆": "QrCode",
 "NLSP": "BookUser",
 "一体化微服务平台": "Network",
 "学术追踪": "Radar"
};
const marks={
 "CNKI AI学术研究助手": [
  "知网"
 ],
 "E-Academic（易学术）": [
  "易学术"
 ],
 "AMiner": [
  "AMiner"
 ],
 "沁言学术": [
  "沁言"
 ],
 "秘塔AI": [
  "秘塔"
 ],
 "Scopus AI": [
  "Scopus"
 ],
 "Deepseek": [
  "Deep",
  "Seek"
 ],
 "豆包": [
  "豆包"
 ],
 "Kimi": [
  "Kimi"
 ],
 "通义千问": [
  "千问"
 ],
 "文心一言": [
  "文心"
 ],
 "讯飞星火": [
  "星火"
 ],
 "腾讯元宝": [
  "元宝"
 ],
 "智谱清言": [
  "清言"
 ],
 "办公小浣熊": [
  "浣熊"
 ],
 "ChatExcel": [
  "Excel"
 ],
 "有道写作": [
  "有道"
 ]
};
export function serviceIcon(name){
 const mark=Object.hasOwn(marks,name)?marks[name]:null;
 if(mark){const label=mark.join('');return '<span class="service-mark '+(mark.some(word=>/^[A-Za-z]{5,}$/.test(word))?'service-mark-latin':'')+(label.length>7?' service-mark-long':'')+'" aria-hidden="true"><span>'+label+'</span></span>';}
 return uiIcon(Object.hasOwn(symbols,name)?symbols[name]:'BookOpen','service-icon');
}

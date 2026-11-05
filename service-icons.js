const drawings={
 '馆藏搜索':'M3 4h11v16H3zM6 8h5M6 12h3M21 21l-4-4M20 13a5 5 0 1 1-10 0 5 5 0 0 1 10 0',
 '图书续借':'M3 4h10v16H3zM6 8h4M17 7a6 6 0 1 1-2 10M17 3v4h4',
 '数据库导航':'M3 5c0-4 14-4 14 0s-14 4-14 0v10c0 4 14 4 14 0V5M3 10c0 4 14 4 14 0M15 18h7m-3-3 3 3-3 3',
 '资源动态':'M3 4h18v16H3zM7 8h5v5H7zM15 8h3M15 12h3M7 16h11',
 '热门借阅':'M13 2c1 6-5 6-5 10 0 3 2 5 5 5-2-3 2-5 2-8 5 5 6 8 3 11-3 3-10 2-12-2C2 12 5 9 6 7c0 4 3 2 7-5Z',
 '资源荐购':'M3 4h13v16H3zM6 8h6M6 12h5M16 13h6m-3-3v6',
 '到馆新书':'M3 5h14v16H3zM6 9h7M6 13h5M20 2v7m-3-3 3 3 3-3',
 '图书捐赠':'M5 3h12v10H5zM8 6h6M2 17h5l4 4h5l6-6-2-2-5 4h-4M2 13h5l4 4',
 '图书资产入库':'M3 10l9-7 9 7v11H3zM8 21v-8h8v8M12 8v8m-3-3 3 3 3-3',
 '馆际互借与文献传递':'M2 5h7v12H2zM15 7h7v12h-7zM11 3h9m-3-3 3 3-3 3M13 21H4m3-3-3 3 3 3',
 'CADAL数字资源':'M3 4h8v16H3zM14 4h7v7h-7zM14 14h7v6h-7zM6 8h2M6 12h2',
 '南雍撷珍':'M3 8l9-5 9 5M5 10v9m5-9v9m4-9v9m5-9v9M3 21h18M3 8h18',
 '校友云书房':'M3 13h8v8H3zM14 13h7v8h-7zM4 9c-3-5 4-7 6-4 3-6 10-3 9 1 5 0 5 5 1 5H5',
 '江苏省高校智盟卡':'M2 5h20v14H2zM2 9h20M6 13h4M6 16h3M15 14l2 2 3-4',
 '科技查新/查收查引':'M4 3h12v18H4zM7 7h5M7 11h4M20 21l-3-3M20 15a4 4 0 1 1-8 0 4 4 0 0 1 8 0',
 '知识产权信息服务':'M12 2l9 4v6c0 6-9 10-9 10S3 18 3 12V6zM15 8a4 4 0 1 0 0 8',
 '人文社科数据服务':'M3 3v18h19M7 17v-5m5 5V6m5 11V9M5 8l6-5 6 4 4-3',
 '开放时间':'M12 7v5l4 2M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0',
 '全景导览':'M2 7c6-4 14-4 20 0v10c-6 4-14 4-20 0zM8 5v14M16 5v14M10 12l4-3v6z',
 '座位预约':'M6 3h12v9H6zM4 12h16v5H4zM6 17v5M18 17v5M2 8v7M22 8v7',
 '研讨间预约（校内IP）':'M4 3h16v18H4zM7 9h10M7 15h10M8 9v6m8-6v6M10 18h4',
 'AI馆员':'M5 7h14v13H5zM9 12h1m4 0h1M9 16h6M12 3v4M10 3h4M2 11v5m20-5v5',
 '意见反馈':'M3 3h18v14H9l-6 4zM7 7h10M7 11h7',
 '校园生活助手':'M2 10l10-8 10 8M5 8v13h14V8M9 21v-7h6v7M9 9h6',
 '南雍闻道':'M3 5c4-1 7 0 9 2 2-2 5-3 9-2v14c-4-1-7 0-9 2-2-2-5-3-9-2zM12 7v14M7 9h2m6 0h2',
 '研学助手':'M3 6h8l2 3h8v12H3zM3 6V3h7l3 3M8 14l2 2 5-5',
 '科学导航':'M12 2l9 5v10l-9 5-9-5V7zM15 8l-2 6-5 2 2-6z',
 '新生指南':'M3 4h16v17H3zM7 8h8M7 12h6M16 2v6M12 16l2 2 4-4',
 '校友线下扫码入馆':'M2 3h6v6H2zM16 3h6v6h-6zM2 16h6v6H2zM13 13h4v4h5v5h-9zM11 2v7M2 12h7',
 'NLSP':'M3 3h18v5H3zM3 11h7v10H3zM13 11h8v4h-8zM13 18h8v3h-8z',
 '一体化微服务平台':'M2 3h7v7H2zM15 3h7v7h-7zM8 16h8v6H8zM5 10v3h14v-3M12 13v3',
 '学术追踪':'M2 12h4l3-8 5 16 3-8h5M5 3h14M5 22h14',
};
const initials={'CNKI AI学术研究助手':'知','E-Academic（易学术）':'易','AMiner':'A','沁言学术':'沁','秘塔AI':'秘','Consensus':'C','Scopus AI':'S','Deepseek':'D','豆包':'豆','Kimi':'K','通义千问':'千','文心一言':'文','讯飞星火':'讯','腾讯元宝':'元','智谱清言':'智','办公小浣熊':'浣','ChatExcel':'表','有道写作':'写'};
export function serviceIcon(name){
 const drawing=drawings[name];
 const body=drawing?`<path d="${drawing}"/>`:`<rect x="3" y="3" width="18" height="18" rx="5"/><text x="12" y="16" text-anchor="middle" stroke="none" fill="currentColor" font-size="12" font-family="Microsoft YaHei,sans-serif">${initials[name]||'书'}</text>`;
 return `<svg class="icon service-icon" viewBox="0 0 24 24" aria-hidden="true">${body}</svg>`;
}

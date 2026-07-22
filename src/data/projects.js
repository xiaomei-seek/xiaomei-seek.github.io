export const featuredProjects = [
  {
    id: 'youyuntong',
    title: '油运通',
    subtitle: '多角色移动端 App',
    period: '2025.12 — 2026.03',
    role: '负责 APP 开发',
    summary:
      '基于 uni-app (Vue3) 构建，覆盖老板、调度、司机等 10+ 角色，打通派单—运输—签收—对账全流程。',
    techStack: ['uni-app', 'Vue3', 'WebSocket', 'uniUI', '腾讯地图', 'Canvas'],
    description: [
      '基于 uni-app (Vue3) 构建的 App，覆盖老板、项目经理、调度、司机、铅封员、财务、出纳等 10 多角色，打通派单—运输—签收—对账，支持消息通知、位置上报与数据看板。'
    ],
    highlights: [
      '多角色权限与操作配置（角色 + 状态驱动的按钮/流程），支撑多角色协作与业务合规。',
      '搭建 WebSocket 实时推送与未读消息角标机制，保障任务与通知的实时触达。',
      '实现司机位置周期上报，轨迹/位置展示，提升运输过程可视化与追踪能力。'
    ],
    images: ['/images/new/yy.png'],
    imageDescriptions: ['简介图']
  },
  {
    id: 'youbaoche',
    title: '柚包车 / 移新家',
    subtitle: '滴滴三方运力供应商全栈项目',
    period: '2025.08 — 2025.09',
    role: '柚包车全栈；移新家司机端 APP 与后台管理',
    summary:
      '对接滴滴包车/搬家开放平台的多租户系统，涵盖后端、后台、司机端 App 与自营小程序。',
    techStack: ['Java', 'Vue3', 'Arco Design', 'TypeScript', 'uniappX', 'uni-app', 'MySQL', 'Redis', 'OSS'],
    description: [
      '多租户服务。后端基于 ContiNew 开源框架二开，增加司机端、小程序端登录认证。',
      '对接滴滴包车开放平台，包含接口鉴权、报价、开城、车型服务、接单、司机做单、退款等全流程。',
      'APP 端使用 uniappX 开发，包含司机入驻、做单、经纬度上报、服务图上报、司机钱包等。',
      '小程序端为自营订单来源，除滴滴订单外也可在「柚包车」下单，含定位、逆地址解析、微信登录与支付。'
    ],
    highlights: [
      '多租户系统、对接滴滴开放平台，同时兼容自营订单。',
      '司机端使用 uniappX，性能优于 uni-app 开发的 App，采用 UTS、UVue 写法。'
    ],
    images: ['/images/new/bc.png', '/images/new/bj.png'],
    imageDescriptions: ['包车部分截图', '搬家部分截图']
  },
  {
    id: 'wodichong',
    title: '我滴宠',
    subtitle: '宠物 AI 跨端应用',
    period: '2025.08 — 2026.02',
    role: '跨端应用开发（小程序、Android、iOS）',
    summary:
      '宠物智能设备与 AI 互动平台，支持档案、健康数据、AI 识别与 SSE 流式聊天。',
    techStack: ['uni-app', 'Vuex', 'WebSocket', 'SSE', 'Canvas 2D', 'Lottie', '腾讯地图', 'OSS'],
    description: [
      '宠物智能设备与 AI 互动小程序/APP。提供宠物档案、设备管理、健康数据、AI 识别与对话、内容广场等功能，支持多端发布并与硬件设备保持实时连接。'
    ],
    highlights: [
      '一套代码多端使用（部分能力按端单独适配：摄像头、地图、Canvas 分享图、原生 video、登录等）。',
      'AI 交互链路：宠物心情/品种识别任务提交、结果查询、反馈闭环；聊天机器人支持 SSE 流式输出。',
      '实时推送：封装全局 WebSocket 管理器，订阅用户私有频道，统一触发异常/电量/定位/升级等弹窗。',
      '设备能力闭环：绑定/解绑、连接/断连、日汇总与测量数据、功能开关、固件 OTA 升级。',
      '多媒体与分享：聊天记录通过 Canvas 2D 生成分享图，适配多端分享。'
    ],
    images: ['/images/new/wdc.png'],
    imageDescriptions: ['简介图']
  },
  {
    id: 'dazidao',
    title: '打字岛',
    subtitle: '在线打字练习平台',
    period: '2025.07 — 2025.08',
    role: '负责前端开发',
    summary:
      'Typing Island 多模式打字练习平台，含用户体系、会员支付与 WPM/准确率能力统计。',
    techStack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Monaco Editor', 'Framer Motion', 'Radix UI', 'PM2'],
    description: [
      '打字岛（Typing Island）在线打字练习平台，提供指法、拼音、中文/英文文章、单词、编程代码等多种练习模式与课程体系。',
      '集成用户体系（验证码/密码登录、微信登录、游客登录）与角色选择；课程进度、练习结果与能力统计落库。',
      '支持会员体系与支付流程（支付宝/微信），包含二维码支付、激活码兑换。'
    ],
    highlights: [
      '练习引擎：逐字对比 + 错误历史 + 进度条 + 速度/准确率/退格统计 + 得分/星级，练习完成后生成成绩报告。',
      '编程打字模块基于 Monaco Editor 定制主题与输入逻辑，实现代码级对比、实时统计与课程进度保存。',
      '课程数据与进度体系完整：课程包/关卡进度/能力统计（WPM、准确率、弱键位/手指统计）等接口齐全。',
      '微信/支付宝支付链路：创建订单、生成二维码、轮询支付状态。'
    ],
    images: ['/images/new/dzd.jpg'],
    imageDescriptions: ['练习界面']
  },
  {
    id: 'lockin',
    title: 'Lockin 鹿客官网',
    subtitle: '智能锁品牌营销站点',
    period: '2025.09 — 2025.10',
    role: '负责前端开发',
    summary:
      '配置化驱动的多页面品牌官网，运营可在后台更新，前端动态渲染。',
    techStack: ['Next.js 15', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion'],
    description: [
      '鹿客智能锁官网，覆盖首页、产品详情、产品对比、媒体中心、帮助中心、服务中心、零售门店、招聘等核心业务页面。',
      '通过后端配置化接口驱动页面内容（首页模块、菜单、产品详情组件、帮助/媒体文章、招聘岗位、门店配置等），支持运营后台更新、前端动态渲染。',
      '重点页面：产品详情（组件化可配置渲染）、产品对比、帮助中心搜索与反馈、门店地图定位、合作申请表单等。'
    ],
    highlights: [
      '配置化页面引擎：产品详情基于接口动态渲染不同模块（场景、规格、视频、表单等），前端零硬编码扩展内容类型。',
      '全站 Framer Motion 动效、全屏视频/轮播、移动端响应式导航与折叠菜单。'
    ],
    images: ['/images/new/lk.png'],
    imageDescriptions: ['简介图']
  },
  {
    id: 'flask-monitor',
    title: 'Python Flask 监测后台',
    subtitle: '内网全栈监测项目',
    period: '2025.05 — 2025.12',
    role: '全栈开发（内网项目）',
    summary:
      '煤矿监测与核生化监测两套系统，含视频流、Modbus 告警与本地大模型部署。',
    techStack: ['Python', 'Flask', 'Vue', 'OpenUI', 'MySQL', 'Modbus', '本地大模型'],
    description: [
      'Flask 作为后端，前端用 Vue，构建煤矿监测系统和核生化监测系统。',
      '煤矿监测：从海康威视接口获取视频流，后端通过 HLS 传输到前端面板；Modbus 读取堆煤状态，实时弹窗提醒；通过 OpenUI 部署本地 DeepSeek 小参数模型。',
      '核生化监测：大屏项目，与三方对接获取实时浓度数据，页面渲染与模拟报警。'
    ],
    highlights: [
      '内网项目，使用麒麟操作系统，含远程部署与运维经验。'
    ],
    images: ['/images/new/jc.png'],
    imageDescriptions: ['简介图']
  }
];

export const moreProjects = [
  {
    id: 'jiyaowang',
    title: '及药网',
    subtitle: '药品销售小程序、后台管理',
    period: '—',
    role: '前端开发',
    summary: 'uni-app 药品电商小程序，含线上售卖与线下药柜取件。',
    techStack: ['uni-app', 'Vue', '小程序'],
    description: ['uni-app 开发的药品电商小程序，包含线上售卖和线下药柜取件。'],
    highlights: [],
    images: ['/images/new/jyw.png'],
    imageDescriptions: ['简介图']
  },
  {
    id: 'dinamanke',
    title: '迪纳曼可电商小程序',
    subtitle: '微信小程序 + Vue2 后台',
    period: '—',
    role: '小程序与后台管理开发',
    summary: '典型电商小程序，含社区、积分签到与任务体系。',
    techStack: ['vant-weapp', 'Vue2', 'Vuex', 'Element UI', 'echarts', '阿里云 OSS'],
    description: [
      '电商小程序，包含商品上下架、社区讨论分享、积分签到、做任务等功能。负责后台管理和小程序端开发。'
    ],
    highlights: [],
    images: ['/images/dinamanke/1.png'],
    imageDescriptions: ['小程序个人中心界面']
  },
  {
    id: 'charging',
    title: '洛阳市充电桩大屏',
    subtitle: '数据可视化项目',
    period: '—',
    role: '前端开发',
    summary: '充电桩分布、预警与热力图等数据可视化大屏。',
    techStack: ['Vue3', 'echarts', 'v-scale-screen', '百度地图'],
    description: [
      '充电桩信息展示、预警、热力图等数据可视化大屏，负责自适应布局与数据展示。'
    ],
    highlights: [],
    images: ['/images/charging/1.png', '/images/charging/2.png', '/images/charging/3.png'],
    imageDescriptions: ['充电桩分布热力图', '实时数据监控面板', '充电桩状态预警系统']
  },
  {
    id: 'swiftgifts',
    title: 'Swiftgifts 电商',
    subtitle: '全栈 · 多端适配',
    period: '—',
    role: '独立全栈开发',
    summary: '面向国际的跨境礼物电商平台，独自完成全栈开发。',
    techStack: ['Next.js', 'MySQL', 'Vercel', 'Redis', 'Vercel Blob'],
    description: [
      '基于公司自有交友 APP 搭建的面向国际的电商平台，方便国外用户给国内用户送礼物。'
    ],
    highlights: [],
    images: [
      '/images/swiftgifts/1.png',
      '/images/swiftgifts/2.png',
      '/images/swiftgifts/3.png',
      '/images/swiftgifts/4.png',
      '/images/swiftgifts/5.png'
    ],
    imageDescriptions: ['电商平台首页', 'PayPal 支付页', '商品列表页', '后台商品管理', '后台订单管理']
  },
  {
    id: 'data-annotation',
    title: '数据标注管理平台',
    subtitle: '企业管理系统',
    period: '—',
    role: '前端开发',
    summary: '员工、项目、基地管理与预警可视化。',
    techStack: ['Vue3', 'Element Plus', 'echarts', 'Ruoyi'],
    description: [
      '数据标注管理平台，涉及员工信息、项目信息、基地管理、员工日报、项目预警可视化等功能。'
    ],
    highlights: [],
    images: ['/images/data-annotation/1.png', '/images/data-annotation/2.png', '/images/data-annotation/3.png'],
    imageDescriptions: ['项目管理面板', '员工任务分配界面', '数据标注质量监控']
  },
  {
    id: 'ai-apps',
    title: 'AI 应用开发',
    subtitle: '人工智能应用',
    period: '—',
    role: '独立开发',
    summary: 'AI 客服、虚拟用户、高考志愿填报等多个 AI 应用。',
    techStack: ['大模型', 'Python', 'Node.js', 'Flask', 'Next.js', 'MySQL'],
    description: [
      '独自搭建多个 AI 应用：AI 客服机器人（大模型 + RPA）、AI 模仿真实用户（环信虚拟交友机器人）、AI 高考志愿填报系统等。'
    ],
    highlights: [],
    images: ['/images/ai-apps/1.png', '/images/ai-apps/2.png', '/images/ai-apps/3.png', '/images/ai-apps/4.png'],
    imageDescriptions: ['企微客服机器人后台', 'AI 虚拟人物对话', 'AI 高考志愿填报系统']
  },
  {
    id: 'ai-widget',
    title: '网页嵌入 AI 对话 / 客服组件',
    subtitle: '可嵌入的 AI 客服方案',
    period: '—',
    role: '独立全栈（4 个服务）',
    summary: 'Node.js + React 网页嵌入组件，支持多模型 API 与转人工。',
    techStack: ['大模型', 'React', 'Node.js', 'WebSocket'],
    description: [
      '前端组件、客服后端管理、总后台管理、服务端。支持多种大模型 API、知识库问答与转人工。'
    ],
    highlights: [],
    images: ['/images/kefu/1.png', '/images/kefu/2.png', '/images/kefu/4.png', '/images/kefu/3.png'],
    imageDescriptions: ['AI 客服对话界面', '客服后台管理', '客服后台管理', '总管理后台']
  }
];

export const allProjects = [...featuredProjects, ...moreProjects];

export function getProjectById(id) {
  return allProjects.find((p) => p.id === id) ?? null;
}

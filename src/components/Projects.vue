<template>
  <section class="section" :id="id">
    <div class="container">
      <div class="section-title fade-in">
        <h2>项目经验</h2>
      </div>
      <div class="projects-container">
        <ProjectCard 
          v-for="(project, index) in projects" 
          :key="index" 
          :project="project"
          @view-project="openImageViewer" 
        />
      </div>
    </div>
    
    <!-- 图片查看器组件 -->
    <ImageViewer 
      :is-visible="isImageViewerVisible" 
      :project="currentProject"
      @close="closeImageViewer"
    />
  </section>
</template>

<script setup>
import { defineProps, ref } from 'vue';
import ProjectCard from './ProjectCard.vue';
import ImageViewer from './ImageViewer.vue';

defineProps({
  id: {
    type: String,
    default: 'projects'
  }
});

// 控制图片查看器的显示
const isImageViewerVisible = ref(false);
const currentProject = ref(null);

// 打开图片查看器
function openImageViewer(project) {
  currentProject.value = project;
  isImageViewerVisible.value = true;
}

// 关闭图片查看器
function closeImageViewer() {
  isImageViewerVisible.value = false;
}

// 项目数据，添加了图片数组
const projects = [
{
    title: '油运通',
    subtitle: '多角色移动端App（uni-app）',
    description: '覆盖老板、调度、司机等10+角色的油品运输管理App，打通派单—运输—签收—对账全流程，支持实时消息推送与司机轨迹追踪。',
    techStack: ['uni-app', 'Vue3', 'WebSocket', 'uniUI', '腾讯地图', 'Canvas'],
    images: ['/images/new/yy.png'],
    imageDescriptions: ['简介图']
  },
  {
    title: '豆包车 / 移新家',
    subtitle: '滴滴三方运力供应商全栈项目',
    description: '对接滴滴包车/搬家开放平台的多租户系统，涵盖后端服务、后台管理、司机端App及自营小程序，支持接单、做单、退款等全流程。',
    techStack: ['Java', 'Vue3', 'uniappX', 'uni-app', 'Arco Design', 'TypeScript', 'MySQL', 'Redis', 'OSS'],
    images: ['/images/new/bc.png','/images/new/bj.png'],
    imageDescriptions: ['包车部分截图','搬家部分截图']
  },
  {
    title: '我滴宠',
    subtitle: '宠物AI跨端应用，小程序、iOS、安卓',
    description: '宠物智能设备与AI互动平台，支持宠物档案、健康数据、AI品种/心情识别、SSE流式聊天及设备实时连接管理。',
    techStack: ['uni-app', 'Vuex', 'WebSocket', 'SSE', 'Canvas 2D', 'Lottie', '腾讯地图', 'OSS'],
    images: ['/images/new/wdc.png'],
    imageDescriptions: ['简介图']
  },
  {
    title: '打字岛',
    subtitle: '在线打字练习平台（Next.js）',
    description: '多模式打字练习网站，支持拼音、中英文、编程代码等课程体系，集成用户体系、会员支付及详细的WPM/准确率能力统计。',
    techStack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Monaco Editor', 'Framer Motion', 'Radix UI', 'PM2'],
    images: ['/images/new/dzd.jpg'],
    imageDescriptions: ['练习界面']
  },
  {
    title: '鹿客官网',
    subtitle: '智能锁品牌营销站点（Next.js）',
    description: '配置化驱动的多页面品牌官网，覆盖产品详情、产品对比、帮助中心、门店地图等核心页面，运营可在后台动态更新内容。',
    techStack: ['Next.js 15', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion'],
    images: ['/images/new/lk.png'],
    imageDescriptions: ['简介图']
  },
  {
    title: '煤矿/核生化监测后台',
    subtitle: 'Python Flask 内网全栈项目',
    description: '内网监测系统，集成海康威视视频流（HLS）展示、Modbus堆煤状态告警，以及本地部署DeepSeek大模型；另含核生化大屏实时浓度监测与模拟报警。',
    techStack: ['Python', 'Flask', 'Vue', 'OpenUI', 'MySQL', 'Modbus', '本地大模型'],
    images: ['/images/new/jc.png'],
    imageDescriptions: ['简介图']
  },
  {
    title: '及药网',
    subtitle: '药品销售小程序、后台管理',
    description: 'uniapp开发的药品电商小程序，包含线上售卖和线下药柜取件。',
    techStack: ['uniapp','vue','小程序'],
    images: ['/images/new/jyw.png'],
    imageDescriptions: ['简介图']
  },
  {
    title: '迪纳曼可电商小程序',
    subtitle: '微信小程序 + Vue2后台管理',
    description: '一款典型的电商小程序，包含商品上下架、社区讨论分享、积分签到、做任务等功能。负责后台管理和小程序端开发。',
    techStack: ['vant-weapp', '阿里云OSS', 'Vue2', 'vuex', 'vue-router', 'ElementUI', 'echarts'],
    images: [
      '/images/dinamanke/1.png',
    ],
    imageDescriptions: [
      '小程序个人中心界面',
    ]
  },
  {
    title: '洛阳市充电桩大屏',
    subtitle: '数据可视化项目',
    description: '充电桩信息展示、预警、热力图等数据可视化大屏项目。负责前端页面实现，包括自适应布局和数据展示。',
    techStack: ['Vue3', 'echarts', 'v-scale-screen', '百度地图'],
    images: [
      '/images/charging/1.png',
      '/images/charging/2.png',
      '/images/charging/3.png'
    ],
    imageDescriptions: [
      '充电桩分布热力图',
      '实时数据监控面板',
      '充电桩状态预警系统'
    ]
  },
  {
    title: 'Swiftgifts电商',
    subtitle: '全栈开发项目、多端适配',
    description: '基于公司自有交友APP搭建的一款面向国际的电商平台，目的是方便国外用户给国内用户送礼物。独自完成全栈开发。',
    techStack: ['Next.js', 'MySQL', 'Vercel', 'Redis', 'VercelBlob', 'Gmail'],
    images: [
      '/images/swiftgifts/1.png',
      '/images/swiftgifts/2.png',
      '/images/swiftgifts/3.png',
      '/images/swiftgifts/4.png',
      '/images/swiftgifts/5.png'
    ],
    imageDescriptions: [
      '电商平台首页',
      'PayPal支付页',
      '商品列表页',
      '后台商品管理',
      '后台订单管理'
    ]
  },
  {
    title: '数据标注管理平台',
    subtitle: '企业管理系统',
    description: '构建数据标注管理平台，涉及员工信息、项目信息、基地管理、员工日报、项目预警可视化等功能。负责前端开发。',
    techStack: ['Vue3', 'Element Plus', 'echarts', 'Ruoyi框架'],
    images: [
      '/images/data-annotation/1.png',
      '/images/data-annotation/2.png',
      '/images/data-annotation/3.png'
    ],
    imageDescriptions: [
      '项目管理面板',
      '员工任务分配界面',
      '数据标注质量监控'
    ]
  },
  {
    title: 'AI应用开发',
    subtitle: '人工智能应用',
    description: '独自搭建了多个AI应用，包含AI客服机器人(大模型+RPA)，AI模仿真实用户(基于环信的虚拟交友平台机器人)；AI高考志愿填报系统等。',
    techStack: ['大模型', 'Python', 'Node.js', 'Flask', 'Next.js', 'MySQL'],
    images: [
      '/images/ai-apps/1.png',
      '/images/ai-apps/2.png',
      '/images/ai-apps/3.png',
      '/images/ai-apps/4.png'
    ],
    imageDescriptions: [
      '企微客服机器人后台',
      '基于环信的AI虚拟人物对话',
      'AI高考志愿填报系统'
    ]
  },
    {
    title: '网页嵌入AI对话/客服组件',
    subtitle: '人工智能应用',
    description: '独自完成4个服务；前端组件、客服后端管理、总后台管理、服务端。使用Node.js和react搭建的网页嵌入AI对话/客服组件，支持多种大模型API接入。包含知识库问答、转人工等功能。',
    techStack: ['大模型', 'react', 'Node.js', 'WebSocket'],
    images: [
      '/images/kefu/1.png',
      '/images/kefu/2.png',
      '/images/kefu/4.png',
      '/images/kefu/3.png'
    ],
    imageDescriptions: [
      'AI客服机器人对话界面',
      '客服后台监控/管理界面',
      '客服后台监控/管理界面',
      '总管理后台界面'
    ]
  }
];
</script>

<style scoped>
.projects-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
}

@media (max-width: 768px) {
  .projects-container {
    grid-template-columns: 1fr;
  }
}
</style>
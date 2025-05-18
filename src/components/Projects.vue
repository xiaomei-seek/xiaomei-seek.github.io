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
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from 'vue';
import ProjectCard from './ProjectCard.vue';

defineProps({
  id: {
    type: String,
    default: 'projects'
  }
});

const projects = [
  {
    title: '迪纳曼可电商小程序',
    subtitle: '微信小程序 + Vue2后台管理',
    description: '一款典型的电商小程序，包含商品上下架、社区讨论分享、积分签到、做任务等功能。负责后台管理和小程序端开发。',
    techStack: ['vant-weapp', '阿里云OSS', 'Vue2', 'vuex', 'vue-router', 'ElementUI', 'echarts']
  },
  {
    title: '洛阳市充电桩大屏',
    subtitle: '数据可视化项目',
    description: '充电桩信息展示、预警、热力图等数据可视化大屏项目。负责前端页面实现，包括自适应布局和数据展示。',
    techStack: ['Vue3', 'echarts', 'v-scale-screen', '百度地图']
  },
  {
    title: 'Swiftgifts电商',
    subtitle: '全栈开发项目',
    description: '基于公司自有交友APP搭建的一款面向国际的电商平台，目的是方便国外用户给国内用户送礼物。独自完成全栈开发。',
    techStack: ['Next.js', 'MySQL', 'Vercel', 'Redis', 'VercelBlob', 'Gmail']
  },
  {
    title: '数据标注管理平台',
    subtitle: '企业管理系统',
    description: '构建数据标注管理平台，涉及员工信息、项目信息、基地管理、员工日报、项目预警可视化等功能。负责前端开发。',
    techStack: ['Vue3', 'Element Plus', 'echarts', 'Ruoyi框架']
  },
  {
    title: 'AI应用开发',
    subtitle: '人工智能应用',
    description: '独自搭建了多个AI应用，包含AI客服机器人(大模型+RPA)，AI模仿真实用户(基于环信的虚拟交友平台机器人)；AI高考志愿填报系统等。',
    techStack: ['大模型', 'Python', 'Node.js', 'Flask', 'Next.js', 'MySQL']
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
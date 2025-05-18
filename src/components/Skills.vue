<template>
  <section class="section" :id="id">
    <div class="container">
      <div class="section-title fade-in">
        <h2>专业技能</h2>
      </div>
      <div class="skills-container">
        <div v-for="(category, index) in skillCategories" :key="index" class="skill-category fade-in">
          <h3><i :class="category.icon"></i> {{ category.title }}</h3>
          <ul class="skills-list">
            <li v-for="(skill, skillIndex) in category.skills" :key="skillIndex">{{ skill }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  id: {
    type: String,
    default: 'skills'
  }
});

const skillCategories = [
  {
    title: '前端框架',
    icon: 'fas fa-code',
    skills: [
      '熟悉JavaScript、TypeScript语法',
      '精通Vue 2/3全家桶（Vuex/Pinia, Vue Router, Vite等）',
      '熟悉前沿开发模式（Next.js, Vercel部署）',
      '丰富的微信小程序开发经验',
      '熟悉小程序生态与性能优化'
    ]
  },
  {
    title: 'Web技术',
    icon: 'fas fa-laptop-code',
    skills: [
      '深入掌握JavaScript/TypeScript核心特性',
      '熟练使用ES6+语法',
      '精通现代前端工程化',
      '掌握模块化开发',
      '熟练运用Promise/Async, Axios等异步方案'
    ]
  },
  {
    title: 'UI开发',
    icon: 'fas fa-paint-brush',
    skills: [
      '熟练运用Element UI/Vant等企业级组件库',
      '具备定制化组件开发能力',
      '熟悉Arco Design设计体系',
      '熟悉Shadcn现代UI范式',
      '熟悉Tailwind CSS'
    ]
  },
  {
    title: '后端开发',
    icon: 'fas fa-server',
    skills: [
      '掌握Node.js (Express)开发',
      '掌握Python (Flask)后端开发',
      '可自主实现RESTful API',
      '熟悉JWT鉴权、文件处理',
      '掌握短信验证、桶存储等功能开发'
    ]
  },
  {
    title: '数据层',
    icon: 'fas fa-database',
    skills: [
      '熟练操作MySQL数据库',
      '掌握Sequelize/Prisma等ORM工具',
      '会使用Redis',
      '能优化高频访问场景',
      '掌握异步任务实现'
    ]
  },
  {
    title: '工程化',
    icon: 'fas fa-tools',
    skills: [
      '熟练使用Git进行团队协作开发',
      '掌握Linux基础服务部署（Nginx, PM2, systemctl等）',
      '熟悉Linux基础命令'
    ]
  }
];
</script>

<style scoped>
.skills-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
}

.skill-category {
  background-color: var(--dark);
  border-radius: var(--border-radius);
  padding: 30px;
  box-shadow: var(--box-shadow);
  transition: transform 0.3s ease;
}

.skill-category:hover {
  transform: translateY(-5px);
}

.skill-category h3 {
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: var(--primary);
  position: relative;
  padding-left: 30px;
}

.skill-category h3 i {
  position: absolute;
  left: 0;
  top: 3px;
}

.skills-list {
  list-style: none;
}

.skills-list li {
  margin-bottom: 15px;
  position: relative;
  padding-left: 20px;
}

.skills-list li::before {
  content: '•';
  color: var(--secondary);
  position: absolute;
  left: 0;
  top: 0;
}
</style>
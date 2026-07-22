<template>
  <section class="pane">
    <h2 class="pane-title">专业技能</h2>
    <p class="intro">覆盖前端到后端与工程化。</p>

    <div class="grid">
      <div v-for="(category, index) in skillCategories" :key="category.title" class="cat">
        <h3 class="cat-title">
          <span class="cat-idx">{{ String(index + 1).padStart(2, '0') }}</span>
          {{ category.title }}
        </h3>
        <ul>
          <li v-for="(skill, i) in category.skills" :key="i">{{ skill }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
const skillCategories = [
  {
    title: '前端框架',
    skills: [
      '熟悉 JavaScript、TypeScript 语法',
      '精通 Vue 2/3 全家桶（Vuex/Pinia, Vue Router, Vite 等）',
      '熟悉前沿开发模式（Next.js, Vercel 部署）',
      '丰富的微信小程序开发经验'
    ]
  },
  {
    title: 'Web 技术',
    skills: [
      '深入掌握 JavaScript / TypeScript 核心特性',
      '熟练使用 ES6+ 语法',
      '精通现代前端工程化与模块化开发',
      '熟练运用 Promise / Async、Axios 等异步方案'
    ]
  },
  {
    title: 'UI 开发',
    skills: [
      '熟练运用 Element UI / Vant 等企业级组件库',
      '具备定制化组件开发能力',
      '熟悉 Arco Design、Shadcn、Tailwind CSS'
    ]
  },
  {
    title: '后端开发',
    skills: [
      '掌握 Node.js (Express)、Python (Flask)',
      '可自主实现 RESTful API',
      '熟悉 JWT 鉴权、文件处理、短信验证、对象存储'
    ]
  },
  {
    title: '数据层',
    skills: [
      '熟练操作 MySQL',
      '掌握 Sequelize / Prisma 等 ORM',
      '会使用 Redis，能优化高频访问与异步任务'
    ]
  },
  {
    title: '工程化',
    skills: [
      '熟练使用 Git 进行团队协作',
      '掌握 Linux 基础服务部署（Nginx, PM2, systemctl 等）'
    ]
  }
];
</script>

<style scoped>
.pane {
  max-width: 760px;
}

.pane-title {
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  margin-bottom: 8px;
}

.intro {
  color: var(--muted);
  margin-bottom: 36px;
  font-size: 0.98rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 36px 48px;
}

.cat-title {
  display: flex;
  align-items: baseline;
  gap: 10px;
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  padding-bottom: 12px;
  margin-bottom: 14px;
  border-bottom: 2px solid var(--ink);
}

.cat-idx {
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--accent);
  font-variant-numeric: tabular-nums;
}

ul {
  list-style: none;
}

li {
  position: relative;
  padding-left: 15px;
  margin-bottom: 9px;
  color: #444;
  font-size: 0.95rem;
  line-height: 1.65;
}

li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.7em;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--muted);
}

@media (max-width: 640px) {
  .grid {
    grid-template-columns: 1fr;
    gap: 28px;
  }
}
</style>

import { createRouter, createWebHistory } from 'vue-router';
import About from '../components/About.vue';
import Skills from '../components/Skills.vue';
import Projects from '../components/Projects.vue';
import ProjectDetail from '../components/ProjectDetail.vue';
import Contact from '../components/Contact.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'about', component: About, meta: { title: '关于' } },
    { path: '/skills', name: 'skills', component: Skills, meta: { title: '技能' } },
    { path: '/projects', name: 'projects', component: Projects, meta: { title: '项目' } },
    {
      path: '/projects/:id',
      name: 'project-detail',
      component: ProjectDetail,
      meta: { title: '项目详情' }
    },
    { path: '/contact', name: 'contact', component: Contact, meta: { title: '联系' } },
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ],
  scrollBehavior() {
    return { top: 0 };
  }
});

router.afterEach((to) => {
  const page = to.meta.title ? `${to.meta.title} · ` : '';
  document.title = `${page}梅友飞 - 全栈开发工程师`;
});

export default router;

<template>
  <section class="section" :id="id">
    <div class="container">
      <div class="section-title fade-in">
        <h2>联系方式</h2>
      </div>
      <div class="contact-container">
        <div class="contact-info fade-in">
          <div v-for="(item, index) in contactInfoLeft" :key="index" class="contact-item">
            <i :class="item.icon"></i>
            <div class="contact-item-text">
              <h3>{{ item.title }}</h3>
              <p>{{ item.value }}</p>
            </div>
          </div>
          <!-- 社交链接可在未来添加 -->
          <!-- <div class="social-links">
            <a href="#" class="social-link">
              <i class="fab fa-weixin"></i>
            </a>
            <a href="#" class="social-link">
              <i class="fab fa-github"></i>
            </a>
            <a href="#" class="social-link">
              <i class="fab fa-linkedin"></i>
            </a>
          </div> -->
        </div>
        <div class="contact-info fade-in">
          <div v-for="(item, index) in contactInfoRight" :key="index" class="contact-item">
            <i :class="item.icon"></i>
            <div class="contact-item-text">
              <h3>{{ item.title }}</h3>
              <p>{{ item.value }}</p>
            </div>
          </div>
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
    default: 'contact'
  }
});

const contactInfoLeft = [
  {
    icon: 'fas fa-phone',
    title: '电话/微信',
    value: '187 3758 2236'
  },
  {
    icon: 'fas fa-envelope',
    title: '邮箱',
    value: '18737582236@163.com'
  }
];

const contactInfoRight = [
  {
    icon: 'fas fa-map-marker-alt',
    title: '求职意向',
    value: '前端开发工程师'
  },
  {
    icon: 'fas fa-graduation-cap',
    title: '学历',
    value: '本科，平顶山学院'
  }
];
</script>

<style scoped>
.contact-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.contact-info {
  background-color: var(--dark);
  border-radius: var(--border-radius);
  padding: 40px;
  box-shadow: var(--box-shadow);
}

.contact-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 25px;
}

.contact-item i {
  color: var(--primary);
  font-size: 24px;
  margin-right: 15px;
}

.contact-item-text h3 {
  font-size: 1.1rem;
  margin-bottom: 5px;
}

.contact-item-text p {
  color: var(--gray);
}

.social-links {
  display: flex;
  gap: 15px;
  margin-top: 30px;
}

.social-link {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--darker);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--light);
  transition: all 0.3s ease;
}

.social-link:hover {
  background-color: var(--primary);
  transform: translateY(-3px);
}

@media (max-width: 992px) {
  .contact-container {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .contact-info {
    padding: 30px 20px;
  }
}
</style>
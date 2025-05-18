import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // Vercel 部署需要使用根路径
  base: '/'
  // 如果您需要为不同平台使用不同配置，可以使用环境变量
  // base: process.env.DEPLOY_TARGET === 'github' ? '/mei-portfolio/' : '/'
})
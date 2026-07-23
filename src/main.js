import { createApp } from 'vue'
import 'lxgw-wenkai-webfont/lxgwwenkai-regular.css'
import 'lxgw-wenkai-webfont/lxgwwenkai-bold.css'
import './assets/styles/global.css'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

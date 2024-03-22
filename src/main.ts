import { createApp } from 'vue'
import { createPinia } from 'pinia'

import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

import './style.css'
import App from './App.vue'
import router from './router/index'
const pinia = createPinia()
createApp(App).use(router).use(pinia).use(ElementPlus).mount('#app')

// src/main.ts
import { createApp } from 'vue'
import { createPinia } from 'pinia' // 1. 导入 createPinia
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import AOS from 'aos'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'aos/dist/aos.css'

const app = createApp(App)
const pinia = createPinia() // 2. 创建 Pinia 实例

// 3. 注册插件（顺序很重要）
app.use(pinia)   // 必须在 router 之前，因为某些路由守卫可能会用到 store
app.use(router)
app.use(ElementPlus)

AOS.init({ duration: 1000, once: true })

// 注册所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount('#app')
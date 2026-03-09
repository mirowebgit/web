// src/router/index.ts
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: () => import('../views/home/index.vue') },
  { path: '/services', component: () => import('../views/services/index.vue') },
  { path: '/portfolio', component: () => import('../views/portfolio/index.vue') },
  { path: '/blog', component: () => import('../views/blog/index.vue') },
  { path: '/contact', component: () => import('../views/contact/index.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  // 切换路由后自动滚动到顶部
  scrollBehavior: () => ({ top: 0 })
});

export default router;
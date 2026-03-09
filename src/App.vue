<template>
  <div class="app-wrapper">
    <nav class="navbar">
      <div class="container nav-content">
        <div class="logo" @click="$router.push('/')">
          <span class="logo-icon">DM</span>
          <span class="logo-text">Agency</span>
        </div>

        <div class="menu-desktop">
          <router-link to="/" class="nav-item">首页</router-link>
          <router-link to="/services" class="nav-item">服务</router-link>
          <router-link to="/portfolio" class="nav-item">案例</router-link>
          <router-link to="/blog" class="nav-item">见解</router-link>
          <el-button type="primary" @click="$router.push('/contact')" round>
            联系我们
          </el-button>
        </div>

        <div class="menu-mobile-icon" @click="isDrawerOpen = true">
          <el-icon :size="24"><Menu /></el-icon>
        </div>
      </div>
    </nav>

    <el-drawer v-model="isDrawerOpen" direction="rtl" size="70%" title="菜单">
      <div class="mobile-nav-list">
        <router-link to="/" @click="isDrawerOpen = false">首页</router-link>
        <router-link to="/services" @click="isDrawerOpen = false">服务详情</router-link>
        <router-link to="/portfolio" @click="isDrawerOpen = false">案例展示</router-link>
        <router-link to="/blog" @click="isDrawerOpen = false">博客文章</router-link>
        <router-link to="/contact" @click="isDrawerOpen = false">联系我们</router-link>
      </div>
    </el-drawer>

    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <AppFooter />

    <el-backtop :right="40" :bottom="40" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Menu } from '@element-plus/icons-vue'
import AppFooter from '@/components/AppFooter.vue'

const isDrawerOpen = ref(false)
</script>

<style lang="scss">
/* 全局基础样式 */
html {
  scroll-behavior: smooth; /* 点击导航跳转时平滑滚动 */
}

:root {
  --primary-blue: #2563eb;
  --text-main: #1f2937;
  --bg-white: #ffffff;
}

body {
  margin: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: var(--text-main);
  background-color: var(--bg-white);
  line-height: 1.6;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* 导航栏样式 */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  z-index: 2000;
  border-bottom: 1px solid #f3f4f6;

  .nav-content {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.logo {
  display: flex;
  align-items: center;
  cursor: pointer;
  .logo-icon {
    background: var(--primary-blue);
    color: white;
    padding: 4px 8px;
    border-radius: 6px;
    font-weight: bold;
    margin-right: 8px;
  }
  .logo-text {
    font-size: 20px;
    font-weight: 700;
    color: var(--primary-blue);
  }
}

.menu-desktop {
  display: flex;
  align-items: center;
  gap: 30px;

  .nav-item {
    text-decoration: none;
    color: #4b5563;
    font-weight: 500;
    transition: color 0.3s;
    
    &.router-link-active {
      color: var(--primary-blue);
    }
    &:hover {
      color: var(--primary-blue);
    }
  }
}

.menu-mobile-icon {
  display: none;
  cursor: pointer;
}

/* 主体内容区域偏移量（因为导航栏固定） */
.main-content {
  padding-top: 70px;
  min-height: calc(100vh - 200px);
}

/* 页脚样式 */
.footer {
  background: #111827;
  color: white;
  padding: 60px 0 30px;
  margin-top: 80px;

  .footer-grid {
    text-align: center;
  }
  .footer-copy {
    margin-top: 40px;
    padding-top: 20px;
    border-top: 1px solid #374151;
    font-size: 14px;
    color: #9ca3af;
  }
}

/* 响应式适配 */
@media (max-width: 768px) {
  .menu-desktop {
    display: none;
  }
  .menu-mobile-icon {
    display: block;
  }
  .mobile-nav-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    a {
      text-decoration: none;
      color: #333;
      font-size: 18px;
      padding-bottom: 10px;
      border-bottom: 1px solid #eee;
    }
  }
}

/* 页面切换动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
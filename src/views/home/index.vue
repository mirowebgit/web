<template>
  <div class="home-page">
    <section class="hero-section">
      <div class="container hero-grid">
        <div class="hero-text">
          <el-tag type="primary" effect="plain" class="mb-20">专业数字营销专家</el-tag>
          <h1>助力中小企业<br /><span class="highlight">实现业务指数级增长</span></h1>
          <p>我们结合数据驱动的策略与创意设计，为您提供从流量获取到转化的全链路解决方案。</p>
          <div class="hero-btns">
            <el-button type="primary" size="large" @click="$router.push('/contact')">免费获取增长方案</el-button>
            <el-button size="large" plain @click="$router.push('/portfolio')">查看成功案例</el-button>
          </div>
        </div>
        <div class="hero-image">
          <img src="@/assets/images/home_banner.avif" alt="Digital Marketing" />
        </div>
      </div>
    </section>

    <section class="stats-section">
      <div class="container">
        <el-row :gutter="40">
          <el-col :xs="12" :sm="6" v-for="stat in stats" :key="stat.label">
            <div class="stat-item">
              <div class="stat-value">{{ stat.value }}</div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
          </el-col>
        </el-row>
      </div>
    </section>

    <section class="services-overview">
      <div class="container">
        <div class="section-title">
          <h2>我们的核心服务</h2>
          <p>全方位数字化布局，打破获客瓶颈</p>
        </div>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="8" v-for="service in services" :key="service.title">
            <el-card shadow="hover" class="service-card">
              <el-icon class="service-icon" :color="'#2563EB'"><component :is="service.icon" /></el-icon>
              <h3>{{ service.title }}</h3>
              <p>{{ service.desc }}</p>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { TrendCharts, Share, Monitor } from '@element-plus/icons-vue'

const stats = [
  { value: '500+', label: '服务企业' },
  { value: '150%', label: '平均转化提升' },
  { value: '10+', label: '行业经验' },
  { value: '24/7', label: '技术支持' }
]

const services = [
  { title: 'SEO/SEM 优化', desc: '精准锁定搜索需求，让您的网站始终排在前列。', icon: TrendCharts },
  { title: '社交媒体运营', desc: '打造全网营销矩阵，建立品牌与用户的深度链接。', icon: Share },
  { title: '全链路推广', desc: '从投放策略到数据监控，确保每一分预算都有回报。', icon: Monitor }
]
</script>

<style scoped lang="scss">
.mb-20 { margin-bottom: 20px; }

.hero-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #f0f7ff 0%, #ffffff 100%);
  
  .hero-grid {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 40px;
    align-items: center;
  }

  h1 {
    font-size: 3.5rem;
    line-height: 1.2;
    margin: 20px 0;
    color: #1f2937;
    .highlight { color: #2563eb; }
  }

  p {
    font-size: 1.25rem;
    color: #4b5563;
    margin-bottom: 40px;
  }

  .hero-image img {
    width: 100%;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  }
}

.stats-section {
  padding: 60px 0;
  background: #2563eb;
  color: white;
  text-align: center;
  .stat-value { font-size: 2.5rem; font-weight: bold; }
  .stat-label { font-size: 1rem; opacity: 0.9; }
}

.services-overview {
  padding: 100px 0;
  .section-title {
    text-align: center;
    margin-bottom: 60px;
    h2 { font-size: 2.5rem; }
  }
  .service-card {
    text-align: center;
    padding: 30px;
    height: 100%;
    border: none;
    transition: 0.3s;
    .service-icon { font-size: 40px; margin-bottom: 20px; }
    h3 { margin-bottom: 15px; }
    p { color: #666; line-height: 1.6; }
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 40px 0;
    .hero-grid { grid-template-columns: 1fr; text-align: center; }
    h1 { font-size: 2rem; }
  }
}
</style>
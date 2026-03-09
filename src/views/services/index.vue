<template>
  <div class="services-page container">
    <div class="section-title">
      <h1>全方位数字营销方案</h1>
      <p>量身定制的策略，助力您的品牌脱颖而出</p>
    </div>

    <div v-for="(item, index) in store.services" :key="item.id" 
         :class="['service-detail-block', index % 2 === 0 ? '' : 'reverse']">
      <div class="text-content">
        <el-tag size="small" effect="dark">方案 {{ index + 1 }}</el-tag>
        <h2>{{ item.title }}</h2>
        <p class="description">{{ item.fullDesc }}</p>
        <ul class="feature-list">
          <li v-for="f in item.features" :key="f">
            <el-icon color="#2563EB"><Select /></el-icon> {{ f }}
          </li>
        </ul>
        <el-button type="primary" plain @click="$router.push('/contact')">咨询此方案</el-button>
      </div>
      <div class="visual-content">
        <el-image :src="getImageUrl(index + 1)" class="service-img" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from '@/stores/useData';
import { Select } from '@element-plus/icons-vue';
const store = useDataStore();
const getImageUrl = (name: number | string) => {
  return new URL(`../../assets/images/simg${name}.jpg`, import.meta.url).href
}
</script>

<style scoped lang="scss">
.service-detail-block {
  display: flex;
  align-items: center;
  gap: 60px;
  padding: 80px 0;
  border-bottom: 1px solid #f0f0f0;
  
  &.reverse { flex-direction: row-reverse; }
  
  .text-content {
    flex: 1;
    h2 { font-size: 2rem; margin: 15px 0; }
    .description { color: #666; font-size: 1.1rem; margin-bottom: 20px; }
    .feature-list {
      list-style: none; padding: 0; margin-bottom: 30px;
      li { margin-bottom: 10px; display: flex; align-items: center; gap: 8px; }
    }
  }
  .visual-content { flex: 1; .service-img { border-radius: 12px; shadow: var(--el-box-shadow-light); } }
}

@media (max-width: 768px) {
  .service-detail-block,.reverse { flex-direction: column; padding: 40px 0; }
}
</style>
<template>
  <div class="portfolio-page">
    <section class="portfolio-hero" data-aos="fade-down">
      <div class="container">
        <el-tag type="primary" effect="dark" round class="mb-20">CASES</el-tag>
        <h1>见证数字增长的力量</h1>
        <p>我们已助力 500+ 企业在各自领域实现数字化突破</p>
      </div>
    </section>

    <div class="container sticky-filter">
      <div class="filter-bar" data-aos="fade-up">
        <div class="tabs">
          <button 
            v-for="tab in categories" 
            :key="tab.value"
            :class="['filter-btn', activeCategory === tab.value ? 'active' : '']"
            @click="activeCategory = tab.value"
          >
            {{ tab.label }}
          </button>
        </div>
        <div class="stats-mini">共 {{ filteredPortfolios.length }} 个案例</div>
      </div>
    </div>

    <section class="container portfolio-section">
      <el-row :gutter="30">
        <el-col 
          v-for="(item, index) in filteredPortfolios" 
          :key="item.id" 
          :xs="24" :sm="12" :lg="8"
          data-aos="zoom-in"
          :data-aos-delay="index * 100"
        >
          <div class="portfolio-card" @click="handleOpen(item)">
            <div class="card-image-wrapper">
              <el-image :src="item.cover" fit="cover" lazy />
              <div class="card-overlay">
                <span class="view-btn">查看详情 <el-icon><ArrowRight /></el-icon></span>
              </div>
            </div>
            <div class="card-info">
              <div class="info-top">
                <span class="tag">{{ item.tag }}</span>
                <span class="date">{{ item.date }}</span>
              </div>
              <h3 class="title">{{ item.title }}</h3>
              <p class="desc">{{ item.desc }}</p>
            </div>
          </div>
        </el-col>
      </el-row>
    </section>

    <el-dialog v-model="isDetailOpen" width="850px" destroy-on-close align-center>
      </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useDataStore } from '@/stores/useData';
import { ArrowRight } from '@element-plus/icons-vue';

const store = useDataStore();
const activeCategory = ref('all');
const isDetailOpen = ref(false);
const currentCase = ref<any>(null);

const categories = [
  { label: '全部内容', value: 'all' },
  { label: '品牌全案', value: 'brand' },
  { label: '技术推广', value: 'tech' },
  { label: '社交运营', value: 'social' }
];

const filteredPortfolios = computed(() => {
  if (activeCategory.value === 'all') return store.portfolios;
  return store.portfolios.filter(p => p.category === activeCategory.value);
});

const handleOpen = (item: any) => {
  currentCase.value = item;
  isDetailOpen.value = true;
};
</script>

<style scoped lang="scss">
.portfolio-hero {
  background: #111827;
  color: white;
  padding: 100px 0 160px;
  text-align: center;
  margin-bottom: -60px;
  h1 { font-size: 3.5rem; margin-bottom: 20px; }
  p { font-size: 1.2rem; color: #9ca3af; }
}

.sticky-filter {
  position: sticky;
  top: 80px;
  z-index: 100;
}

.filter-bar {
  background: white;
  padding: 20px 40px;
  border-radius: 50px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  .filter-btn {
    border: none; background: transparent; padding: 10px 20px;
    font-size: 15px; color: #6b7280; cursor: pointer; border-radius: 20px;
    transition: 0.3s;
    &.active { background: #2563eb; color: white; font-weight: bold; }
    &:hover:not(.active) { color: #2563eb; }
  }
}

.portfolio-section { padding: 80px 0; }

.portfolio-card {
  background: white; border-radius: 16px; overflow: hidden;
  margin-bottom: 30px; cursor: pointer;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
  transition: transform 0.4s ease;

  &:hover {
    transform: translateY(-12px);
    .card-image-wrapper img { transform: scale(1.1); }
    .card-overlay { opacity: 1; }
  }

  .card-image-wrapper {
    position: relative; height: 260px; overflow: hidden;
    .card-overlay {
      position: absolute; inset: 0; background: rgba(37, 99, 235, 0.8);
      display: flex; justify-content: center; align-items: center;
      opacity: 0; transition: 0.3s;
      .view-btn { color: white; border: 1px solid white; padding: 8px 20px; border-radius: 30px; }
    }
  }

  .card-info {
    padding: 25px;
    .info-top {
      display: flex; justify-content: space-between; margin-bottom: 15px;
      .tag { color: #2563eb; font-weight: bold; font-size: 12px; }
      .date { color: #9ca3af; font-size: 12px; }
    }
    .title { font-size: 1.3rem; color: #1f2937; margin-bottom: 12px; }
    .desc { color: #6b7280; font-size: 0.95rem; line-height: 1.6; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
  }
}

@media (max-width: 768px) {
  .portfolio-hero h1 { font-size: 2.2rem; }
  .filter-bar { padding: 10px 20px; flex-direction: column; border-radius: 15px; }
}
</style>
<template>
  <div class="blog-page container">
    <header class="blog-header" data-aos="fade-down">
      <div class="header-content">
        <h1>行业见解与趋势</h1>
        <p>分享数字营销领域的前沿实战经验与深度观察</p>
      </div>
      
      <div class="filter-wrapper">
        <el-radio-group v-model="activeTag" size="large" class="custom-tabs">
          <el-radio-button label="全部" />
          <el-radio-button v-for="tag in tags" :key="tag" :label="tag" />
        </el-radio-group>
        <el-input
          v-model="searchQuery"
          placeholder="搜索文章..."
          class="search-input"
          :prefix-icon="Search"
        />
      </div>
    </header>

    <el-row :gutter="30" class="blog-grid">
      <el-col 
        v-for="(post, index) in filteredPosts" 
        :key="post.id" 
        :xs="24" :sm="12" :md="8"
        data-aos="fade-up"
        :data-aos-delay="index * 100"
      >
        <article class="blog-card">
          <div class="card-image">
            <el-image :src="post.cover" fit="cover" lazy />
            <span class="category-tag">{{ post.tag }}</span>
          </div>
          
          <div class="card-body">
            <div class="post-meta">
              <span class="date"><el-icon><Calendar /></el-icon> {{ post.date }}</span>
              <span class="read-time"><el-icon><Clock /></el-icon> {{ post.readTime }} min</span>
            </div>
            <h3 class="post-title">{{ post.title }}</h3>
            <p class="post-excerpt">{{ post.summary }}</p>
            <div class="card-footer">
              <el-button link type="primary" class="read-more">
                阅读全文 <el-icon class="icon-right"><ArrowRight /></el-icon>
              </el-button>
            </div>
          </div>
        </article>
      </el-col>
    </el-row>

    <div class="pagination-container">
      <el-pagination background layout="prev, pager, next" :total="50" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { Search, Calendar, Clock, ArrowRight } from '@element-plus/icons-vue';

const activeTag = ref('全部');
const searchQuery = ref('');
const tags = ['行业趋势', '营销技巧', '案例分析', '技术工具'];

const posts = ref([
  { 
    id: 1, 
    title: '2026 数字营销趋势白皮书：AI 驱动的个性化革命', 
    tag: '行业趋势', 
    date: '2026-01-05', 
    readTime: 8,
    cover: 'https://picsum.photos/800/500?sig=11',
    summary: '随着生成式 AI 的普及，营销人员如何利用数据资产构建品牌护城河？本文深度解析未来三年的核心策略...' 
  },
  { 
    id: 2, 
    title: '如何利用短视频引流？3个高转化的实战模型', 
    tag: '营销技巧', 
    date: '2026-01-03', 
    readTime: 5,
    cover: 'https://picsum.photos/800/500?sig=12',
    summary: '针对中小企业获客难的问题，我们拆解了 100+ 爆款视频，总结出一套可复用的脚本结构...' 
  },
  { 
    id: 3, 
    title: '私域流量运营：从获客到高复购的增长路径', 
    tag: '案例分析', 
    date: '2025-12-28', 
    readTime: 12,
    cover: 'https://picsum.photos/800/500?sig=13',
    summary: '流量越来越贵，如何将公域用户沉淀至私域并实现长效运营？看这家零售巨头是如何做的。' 
  }
]);

const filteredPosts = computed(() => {
  return posts.value.filter(post => {
    const matchesTag = activeTag.value === '全部' || post.tag === activeTag.value;
    const matchesSearch = post.title.includes(searchQuery.value) || post.summary.includes(searchQuery.value);
    return matchesTag && matchesSearch;
  });
});
</script>

<style scoped lang="scss">
.blog-page {
  padding-top: 60px;
  padding-bottom: 100px;
}

.blog-header {
  text-align: center;
  margin-bottom: 60px;
  
  h1 { font-size: 3rem; color: #111827; margin-bottom: 15px; font-weight: 800; }
  p { font-size: 1.2rem; color: #6b7280; max-width: 600px; margin: 0 auto; }
}

.filter-wrapper {
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  
  .search-input { width: 300px; }
}

.blog-grid { margin-top: 20px; }

.blog-card {
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  margin-bottom: 30px;
  height: 100%;
  border: 1px solid #f3f4f6;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 25px 50px -12px rgba(37, 99, 235, 0.15);
    .read-more .icon-right { transform: translateX(5px); }
  }

  .card-image {
    position: relative;
    height: 220px;
    overflow: hidden;
    .el-image { width: 100%; height: 100%; transition: transform 0.5s; }
    &:hover .el-image { transform: scale(1.1); }
    
    .category-tag {
      position: absolute; top: 15px; left: 15px;
      background: rgba(37, 99, 235, 0.9);
      color: #fff; padding: 4px 12px; border-radius: 20px;
      font-size: 12px; font-weight: 600;
    }
  }

  .card-body {
    padding: 24px;
    .post-meta {
      display: flex; gap: 15px; color: #9ca3af; font-size: 13px; margin-bottom: 12px;
      align-items: center;
      .el-icon { vertical-align: middle; margin-right: 4px; }
    }
    .post-title {
      font-size: 1.25rem; color: #1f2937; margin-bottom: 12px;
      line-height: 1.4; font-weight: 700;
      display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
    }
    .post-excerpt {
      color: #6b7280; font-size: 0.95rem; line-height: 1.6;
      margin-bottom: 20px;
      display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;
    }
    .read-more {
      padding: 0; font-weight: 600;
      .icon-right { transition: transform 0.3s; }
    }
  }
}

.pagination-container {
  margin-top: 60px;
  display: flex;
  justify-content: center;
}

@media (max-width: 768px) {
  .blog-header h1 { font-size: 2rem; }
  .filter-wrapper { flex-direction: column; align-items: stretch; .search-input { width: 100%; } }
}
</style>
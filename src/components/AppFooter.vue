<template>
  <footer class="app-footer">
    <div class="container footer-content">
      <el-row :gutter="40">
        <el-col :xs="24" :sm="12" :md="8" class="footer-section">
          <div class="footer-logo">
            <span class="logo-icon">DM</span>
            <span class="logo-text">Agency</span>
          </div>
          <p class="company-desc">
            我们是领先的数字营销专家，专注于通过数据驱动的策略和卓越的创意设计，助力中小企业在数字时代实现跨越式增长。
          </p>
          <div class="social-links">
            <el-link :underline="false" class="social-icon"><el-icon><Share /></el-icon></el-link>
            <el-link :underline="false" class="social-icon"><el-icon><Promotion /></el-icon></el-link>
            <el-link :underline="false" class="social-icon"><el-icon><ChatDotRound /></el-icon></el-link>
          </div>
        </el-col>

        <el-col :xs="12" :sm="6" :md="4" class="footer-section">
          <h4 class="section-title">快速链接</h4>
          <ul class="link-list">
            <li><router-link to="/">首页</router-link></li>
            <li><router-link to="/services">服务详情</router-link></li>
            <li><router-link to="/portfolio">案例展示</router-link></li>
            <li><router-link to="/blog">行业见解</router-link></li>
          </ul>
        </el-col>

        <el-col :xs="12" :sm="6" :md="4" class="footer-section">
          <h4 class="section-title">核心服务</h4>
          <ul class="link-list">
            <li><a href="#">SEO 优化</a></li>
            <li><a href="#">社交媒体营销</a></li>
            <li><a href="#">品牌全案策划</a></li>
            <li><a href="#">数据分析报告</a></li>
          </ul>
        </el-col>

        <el-col :xs="24" :sm="12" :md="8" class="footer-section">
          <h4 class="section-title">联系我们</h4>
          <ul class="contact-list">
            <li>
              <el-icon><Location /></el-icon>
              <span>上海市黄浦区南京东路 888 号某某大厦 18 楼</span>
            </li>
            <li>
              <el-icon><Phone /></el-icon>
              <span>400-888-9999 (周一至周五 9:00-18:00)</span>
            </li>
            <li>
              <el-icon><Message /></el-icon>
              <span>contact@dmagency.com</span>
            </li>
          </ul>
        </el-col>
      </el-row>

      <div class="footer-bottom">
        <p>© 2026 Digital Marketing Agency. 保留所有权利。</p>
        <div class="bottom-links">
          <el-link :underline="false">隐私政策</el-link>
          <el-divider direction="vertical" />
          <el-link :underline="false">服务协议</el-link>
          <el-divider direction="vertical" />
          <el-link :underline="false">沪ICP备12345678号</el-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { 
  Share, Promotion, ChatDotRound, 
  Location, Phone, Message 
} from '@element-plus/icons-vue'
</script>

<style scoped lang="scss">
.app-footer {
  background-color: #111827; // 深色背景
  color: #d1d5db;
  padding: 80px 0 40px;
  margin-top: 60px;

  .footer-section {
    margin-bottom: 40px;
  }

  .footer-logo {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    .logo-icon {
      background: #2563eb;
      color: white;
      padding: 4px 8px;
      border-radius: 6px;
      font-weight: bold;
      margin-right: 8px;
    }
    .logo-text {
      font-size: 24px;
      font-weight: 700;
      color: white;
    }
  }

  .company-desc {
    font-size: 14px;
    line-height: 1.8;
    margin-bottom: 25px;
  }

  .social-links {
    display: flex;
    gap: 15px;
    .social-icon {
      font-size: 20px;
      color: #9ca3af;
      transition: color 0.3s;
      &:hover { color: #2563eb; }
    }
  }

  .section-title {
    color: white;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 25px;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -8px;
      width: 30px;
      height: 2px;
      background: #2563eb;
    }
  }

  .link-list, .contact-list {
    list-style: none;
    padding: 0;
    li {
      margin-bottom: 12px;
      font-size: 14px;
      display: flex;
      align-items: flex-start;
      gap: 10px;
      
      a {
        color: #d1d5db;
        text-decoration: none;
        transition: color 0.3s;
        &:hover { color: white; }
      }
      
      .el-icon {
        font-size: 18px;
        color: #2563eb;
        margin-top: 2px;
      }
    }
  }

  .footer-bottom {
    margin-top: 40px;
    padding-top: 30px;
    border-top: 1px solid #1f2937;
    text-align: center;
    font-size: 13px;
    
    p { margin-bottom: 15px; }
    
    .bottom-links {
      display: flex;
      justify-content: center;
      align-items: center;
      .el-link { color: #9ca3af; font-size: 13px; }
    }
  }
}

@media (max-width: 768px) {
  .app-footer {
    padding: 60px 0 30px;
    text-align: center;
    .section-title::after { left: 50%; transform: translateX(-50%); }
    .contact-list li { justify-content: center; }
    .footer-bottom .bottom-links { flex-wrap: wrap; gap: 10px; }
  }
}
</style>
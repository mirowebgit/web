<template>
  <div class="contact-page container">
    <el-row :gutter="60">
      <el-col :md="10" :xs="24">
        <div class="contact-info">
          <h1>让我们聊聊您的项目</h1>
          <p>无论您是处于初创阶段，还是寻求业务突破，我们的专家团队都随时为您提供支持。</p>
          
          <div class="info-card">
            <div class="info-item">
              <el-icon><Location /></el-icon>
              <div><strong>公司地址</strong><p>上海市黄浦区某某大厦 88 层</p></div>
            </div>
            <div class="info-item">
              <el-icon><Phone /></el-icon>
              <div><strong>咨询热线</strong><p>400-123-4567</p></div>
            </div>
          </div>
        </div>
      </el-col>

      <el-col :md="14" :xs="24">
        <el-card class="contact-form-card" shadow="never">
          <ContactForm /> </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss">
.contact-page { padding: 80px 20px; }
.contact-info {
  h1 { font-size: 2.5rem; color: #1f2937; margin-bottom: 20px; }
  .info-card {
    margin-top: 40px;
    .info-item {
      display: flex; gap: 15px; margin-bottom: 25px;
      .el-icon { font-size: 24px; color: #2563eb; margin-top: 4px; }
      strong { display: block; font-size: 1.1rem; }
      p { color: #666; margin: 5px 0 0; }
    }
  }
}
.contact-form-card { border-radius: 16px; padding: 20px; background: #f9fafb; border: none; }
</style>
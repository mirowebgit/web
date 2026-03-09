
import { defineStore } from 'pinia';

export const useDataStore = defineStore('data', {
  state: () => ({
    services: [
      {
        id: 'seo',
        title: 'SEO/SEM 优化',
        icon: 'TrendCharts',
        fullDesc: '我们通过深度的关键词研究、技术审计和高质量内容创作，提升您的搜索排名。',
        features: ['关键词排名监测', '竞争对手分析', '落地页转化优化', '竞价排名托管']
      },
      {
        id: 'social',
        title: '社交媒体运营',
        icon: 'Share',
        fullDesc: '在抖音、小红书、微信等平台建立品牌阵地，通过创意内容驱动自然增长。',
        features: ['内容IP打造', '短视频脚本策划', '粉丝社群运营', 'KOL资源对接']
      }
    ],
    portfolios: [
      { 
        id: 1, 
        category: 'brand',
        title: '某母婴品牌全案数字化转型', 
        tag: '品牌全案', 
        cover: 'https://picsum.photos/800/600?sig=21',
        desc: '通过打通线上商城与线下门店数据，构建完整的私域流量池。',
        result: '全渠道销售额提升 150%，会员复购率翻倍',
        client: '某知名母婴连锁',
        date: '2025-10'
      },
      { 
        id: 2, 
        category: 'tech',
        title: 'B2B 工业设备海外获客引擎', 
        tag: '精准获客', 
        cover: 'https://picsum.photos/800/600?sig=22',
        desc: '利用 Google Ads 与 LinkedIn 定向投送，精准锁定海外采购决策人。',
        result: '询盘成本降低 40%，月均高质量线索增加 300+',
        client: '某重工制造集团',
        date: '2025-12'
      },
      { 
        id: 3, 
        category: 'social',
        title: '新锐美妆抖音阵地经营', 
        tag: '社媒运营', 
        cover: 'https://picsum.photos/800/600?sig=23',
        desc: '通过短视频内容矩阵配合达人直播，快速打响品牌知名度。',
        result: '品牌声量提升 500%，核心单品月销破万',
        client: '某新锐国货美妆',
        date: '2026-01'
      },
      { 
        id: 4, 
        category: 'brand',
        title: '餐饮连锁品牌视觉与营销升级', 
        tag: '品牌视觉', 
        cover: 'https://picsum.photos/800/600?sig=24',
        desc: '重新定义品牌视觉语言，并配合线上营销活动吸引年轻人打卡。',
        result: '单店客流量提升 35%，品牌搜索热度增长 200%',
        client: '某茶饮品牌',
        date: '2025-11'
      }
    ]
  })
});
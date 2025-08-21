import { defineConfig } from 'vitepress'
import { defineTeekConfig } from "vitepress-theme-teek/config";


// Teek 主题配置
const teekConfig = defineTeekConfig({
   siteAnalytics: [
    {
      provider: "baidu",
      options: {
        id: "d2e3149c5929b00665e8ea5652f16366",
      },
    },
  ],
    vitePlugins: {
    sidebar: true,
    sidebarOption: {
      titleFormMd:true,//使用md文件一级标题名作为sidebar的text
      restart:true,//每次增加删除重启sidebar
      
    },
  },
  footerInfo: {
    // 页脚信息，支持 HTML 格式（位于主题版权上方）
    topMessage: [""],
    // 页脚信息，支持 HTML 格式（位于主题版权下方）
    bottomMessage: [""],
    // 主题版权配置
    theme: {
      show: false, // 是否显示主题版权，建议显示
      name: "", // 自定义名称
      link: "", // 自定义链接
    },
    // 博客版权配置
    copyright: {
      show: true, // 是否显示博客版权
      createYear: 2025, // 创建年份
      suffix: "Leslie Blog", // 后缀
    },
  },
});

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 添加base选项
  base: '/LeslieBlog/',  // 如果部署到GitHub Pages的username.github.io/repo/
  // 或者
  // base: '/blog/',  // 如果部署到子路径/blog/
  
  head: [["link", { rel: "icon", href: "/bianmu.svg" }]],

  // Teek主题配置
  extends: teekConfig,
  title: "Leslie Blog On Vite Press",
  description: "a blog mainly focus on my road",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About me', link: '/AboutMe' },
      { text: '一些影评', link: '/movies' },
      { text: 'blog', link: '/blog' },
      { text: 'NAS', link: '/NAS' }
    ],

    search: {
      provider: 'local'
    },

    sidebar: {
      // 默认侧边栏配置
      '/': [
        {
          text: 'Examples',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        }
      ],
      // 可以为不同路径配置不同的侧边栏
    },
    footer:{
      copyright:"",
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Leslie-Chan23' }
    ]


  }
})

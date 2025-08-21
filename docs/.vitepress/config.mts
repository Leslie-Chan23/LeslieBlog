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
      { text: '一些影评', link: '/movies' }
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
      // '/movies/': [
      //   { text: '电影列表', link: '/movies/' }
      // ]
    },
    footer:{
      copyright:"copyright@ 2025 Leslie Chan",
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Leslie-Chan23' }
    ]


  }
})

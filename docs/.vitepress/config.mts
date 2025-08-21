import { defineConfig } from 'vitepress'
import { defineTeekConfig } from "vitepress-theme-teek/config";


// Teek 主题配置
const teekConfig = defineTeekConfig({
   siteAnalytics: [
    {
      provider: "baidu",
      options: {
        id: "******",
      },
    },
  ],
});

// https://vitepress.dev/reference/site-config
export default defineConfig({
// Teek主题配置
  extends: teekConfig,
  title: "Leslie Blog On Vite Press",
  description: "a blog mainly focus on my road",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About me', link: '/AboutMe' }
    ],

    search: {
      provider: 'local'
    },

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Leslie-Chan23/ImtBlog' }
    ]
  }
})

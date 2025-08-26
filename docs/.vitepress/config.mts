import { defineConfig } from 'vitepress'
import { defineTeekConfig } from "vitepress-theme-teek/config";


// Teek 主题配置
const teekConfig = defineTeekConfig({
  teekTheme: true,
  siteAnalytics: [
    {
      provider: "baidu",
      options: {
        id: "d2e3149c5929b00665e8ea5652f16366",
      },
    },
  ],
   comment: {
    provider: "giscus", // 评论区提供者
    // 评论区配置项，根据 provider 不同而不同，具体看对应官网的使用介绍
    options: {
      // twikoo 配置，官网：https://twikoo.js.org/
      // envId: "your envId",

      // waline 配置，官网：https://waline.js.org/
      // serverURL: "your serverURL",
      // jsLink: "https://unpkg.com/@waline/client@v3/dist/waline.js",
      // cssLink: "https://unpkg.com/@waline/client@v3/dist/waline.css",

      // giscus 配置，官网：https://giscus.app/zh-CN
      repo: "Leslie-Chan23/LeslieBlog",
      repoId: "R_kgDOPhgehA",
      category: "General",
      categoryId: "DIC_kwDOPhgehM4CudR7",

      // artalk 配置，官网：https://artalk.js.org/
      // server: "your server",
      // site: "site",
    },
  },
  breadcrumb: {
    enabled: true, // 是否启用面包屑
    showCurrentName: false, // 面包屑最后一列是否显示当前文章的文件名
    separator: "/", // 面包屑分隔符
  },  
  banner: {
    enabled: true,
    name: "Leslie", // Banner 标题，默认读取 vitepress 的 title 属性
    bgStyle: "fullImg", // Banner 背景风格：pure 为纯色背景，partImg 为局部图片背景，fullImg 为全屏图片背景
    pureBgColor: "#28282d", // Banner 背景色，bgStyle 为 pure 时生效
    imgSrc: ["/边牧.svg","/金毛.svg","/柯基.svg","/藏獒.svg","/哈士奇.svg","/法斗.svg","/田园犬.svg",], // Banner 图片链接。bgStyle 为 partImg 或 fullImg 时生效
    imgInterval: 15000, // 当多张图片时（imgSrc 为数组），设置切换时间，单位：毫秒
    imgShuffle: false, // 图片是否随机切换，为 false 时按顺序切换，bgStyle 为 partImg 或 fullImg 时生效
    imgWaves: true, // 是否开启 Banner 图片波浪纹，bgStyle 为 fullImg 时生效
    mask: true, // Banner 图片遮罩，bgStyle 为 partImg 或 fullImg 时生效
    maskBg: "rgba(0, 0, 0, 0.4)", // Banner 遮罩颜色，如果为数字，则是 rgba(0, 0, 0, ${maskBg})，如果为字符串，则作为背景色。bgStyle 为 partImg 或 fullImg 且 mask 为 true 时生效
    textColor: "#ffffff", // Banner 字体颜色，bgStyle 为 pure 时为 '#000000'，其他为 '#ffffff'
    titleFontSize: "3.2rem", // 标题字体大小
    descFontSize: "1.4rem", // 描述字体大小
    descStyle: "types", // 描述信息风格：default 为纯文字渲染风格（如果 description 为数组，则取第一个），types 为文字打印风格，switch 为文字切换风格
    description: ["\\O/\\O/\\O/\\O/\\O/\\O/\\O/\\O/\\O/\\O/\\O/", "Ciallo～(∠・ω< )⌒☆","Caolima～(∠・ω< )⌒★"], // 描述信息
    switchTime: 4000, // 描述信息切换间隔时间，单位：毫秒。descStyle 为 switch 时生效
    switchShuffle: false, // 描述信息是否随机切换，为 false 时按顺序切换。descStyle 为 switch 时生效
    typesInTime: 200, // 输出一个文字的时间，单位：毫秒。descStyle 为 types 时生效
    typesOutTime: 100, // 删除一个文字的时间，单位：毫秒。descStyle 为 types 时生效
    typesNextTime: 800, // 打字与删字的间隔时间，单位：毫秒。descStyle 为 types 时生效
    typesShuffle: false, // 描述信息是否随机打字，为 false 时按顺序打字，descStyle 为 types 时生效
  },

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
  base: '/LeslieBlog/',
  extends: teekConfig,
  title: "Leslie Blog On Vite Press",
  description: "a blog mainly focus on my road",
  
  // 将head配置放在这里，与themeConfig同级
  head: [
    ["link", { rel: "icon", href: "/LeslieBlog/favicon.ico", type: "image/x-icon" }],
    ["link", { rel: "shortcut icon", href: "/LeslieBlog/favicon.ico", type: "image/x-icon" }],
    ["link", { rel: "bookmark", href: "/LeslieBlog/favicon.ico" }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About me', link: '/AboutMe' },
      { text: '一些影评', link: '/movies' },
      { text: 'blog', link: '/blog' },
      { text: 'NAS', link: '/NAS' },
      { text: '往事', link: '/往事' }
    ],

    search: {
      provider: 'local'
    },

    sidebar: {
      '/': [
        {
          text: 'Examples',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        }
      ],
    },
    footer:{
      copyright:"",
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Leslie-Chan23' }
    ],

    // 从这里删除head配置
  }
})

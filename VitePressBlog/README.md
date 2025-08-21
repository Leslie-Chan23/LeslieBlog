# Leslie Blog

这是一个使用VitePress构建的个人博客网站。

## 仓库地址

GitHub仓库: https://github.com/Leslie-Chan23/LeslieBlog

博客地址: https://leslie-chan23.github.io/LeslieBlog/

## 技术栈

- [VitePress](https://vitepress.dev/) - 基于Vite的静态站点生成器
- [Vue.js](https://vuejs.org/) - 渐进式JavaScript框架
- [pnpm](https://pnpm.io/) - 快速、节省磁盘空间的包管理器

## 本地开发

### 环境要求

- Node.js >= 18
- pnpm >= 8

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm docs:dev
```

访问 http://localhost:5173 查看本地开发版本。

### 构建静态文件

```bash
pnpm docs:build
```

构建后的文件位于 `docs/.vitepress/dist` 目录。

### 部署

#### 自动部署

推送到 `main` 分支会自动触发GitHub Actions部署流程。

#### 手动部署

```bash
pnpm docs:deploy
```

## 项目结构
docs/
├── .vitepress/      # VitePress配置
│   ├── config.mts   # 主配置文件
│   └── theme/       # 自定义主题
├── movies/          # 电影评论文章
├── public/          # 静态资源
└── index.md         # 首页

## 添加新文章

1. 在 `docs/` 目录下创建新的Markdown文件
2. 或者在现有分类目录下添加文章（如 `docs/movies/`）
3. 提交更改并推送到GitHub

## 联系方式

如有问题，请联系：[Leslie-Chan23](https://github.com/Leslie-Chan23)
# MaudelClaw 官方网站

科技感十足的 MaudelClaw AI Agent 系统官方网站，支持中英文双语。

## ✨ 特性

- 🎨 **科技感设计** - 赛博朋克风格，霓虹光效，粒子动画
- 🌐 **国际化支持** - 完整的中英文双语支持
- 📱 **响应式布局** - 完美适配桌面端和移动端
- ⚡ **高性能** - 基于 Vite 构建，快速热重载
- 🎭 **丰富动画** - Framer Motion 提供流畅的交互动画
- 🎯 **单页应用** - React SPA，无缝导航体验

## 🛠️ 技术栈

- **框架**: React 18 + TypeScript
- **构建工具**: Vite 5
- **样式**: Tailwind CSS 3.4
- **动画**: Framer Motion 11
- **图标**: Lucide React
- **路由**: React Router DOM 6

## 🚀 快速开始

### 安装依赖

```bash
npm install
# 或使用国内镜像
npm install --registry https://registry.npmmirror.com
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:5173 查看网站

### 构建生产版本

```bash
npm run build
```

构建产物将生成在 `dist` 目录

### 预览生产版本

```bash
npm run preview
```

## 📁 项目结构

```
maudelclaw-website/
├── src/
│   ├── components/        # React 组件
│   │   ├── Navigation.tsx # 导航栏
│   │   ├── Hero.tsx       # 首页英雄区
│   │   ├── Features.tsx   # 功能特性
│   │   ├── Architecture.tsx # 系统架构
│   │   ├── Download.tsx   # 下载区域
│   │   └── Footer.tsx     # 页脚
│   ├── i18n/             # 国际化
│   │   └── translations.ts # 中英文翻译
│   ├── hooks/            # 自定义 Hooks
│   │   └── useLanguage.ts # 语言切换
│   ├── styles/           # 全局样式
│   │   └── globals.css   # 全局 CSS
│   ├── App.tsx           # 主应用组件
│   └── main.tsx          # 入口文件
├── public/               # 静态资源
├── index.html            # HTML 模板
├── package.json          # 项目配置
├── vite.config.ts        # Vite 配置
├── tailwind.config.js    # Tailwind 配置
└── tsconfig.json         # TypeScript 配置
```

## 🎨 设计特点

### 配色方案

- **主色调**: 赛博蓝 (#00f0ff)
- **辅助色**: 赛博紫 (#bf00ff)、赛博粉 (#ff006e)
- **背景色**: 深色背景 (#0a0e27)

### 视觉效果

- ✦ 霓虹发光效果
- ✦ 玻璃态 (Glassmorphism)
- ✦ 渐变文字
- ✦ 粒子动画
- ✦ 扫描线效果
- ✦ 网格背景

### 动画效果

- 平滑滚动导航
- 元素入场动画
- 悬停交互效果
- 加载动画
- 脉冲发光

## 📦 页面模块

### 1. 首页 (Hero)
- 动态背景粒子效果
- 渐变标题动画
- CTA 按钮组
- 数据统计展示

### 2. 功能特性 (Features)
- 8 大核心功能卡片
- 悬停动画效果
- 渐变图标

### 3. 系统架构 (Architecture)
- 三组件架构图
- 技术栈展示
- 工作流程图

### 4. 下载页面 (Download)
- 多平台下载按钮
- 系统要求说明
- 快速开始指南

## 🌍 国际化

支持中英文双语切换，点击导航栏的语言按钮即可切换：
- 🇺🇸 English
- 🇨🇳 中文

语言设置保存在 localStorage，刷新页面后保持不变。

## 🔧 自定义配置

### 修改颜色主题

编辑 `tailwind.config.js` 中的 `cyber` 颜色：

```javascript
cyber: {
  dark: '#0a0e27',
  blue: '#00f0ff',
  purple: '#bf00ff',
  pink: '#ff006e',
  green: '#39ff14',
}
```

### 修改翻译文本

编辑 `src/i18n/translations.ts` 文件中的翻译内容。

## 📄 License

MIT License

## 👥 贡献

欢迎提交 Issue 和 Pull Request！

---

**MaudelClaw** - 开源、隐私优先的跨平台 AI Agent 系统

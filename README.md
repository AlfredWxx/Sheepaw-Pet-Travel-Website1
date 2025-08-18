# 🐾 Sheepaw Pet Travel - 宠物运输网站

一个温馨、专业的宠物运输服务网站，为中加宠物运输提供专业的咨询和服务。

## ✨ 项目特色

- 🎨 **现代温馨设计** - 温暖柔和的视觉风格，体现对宠物的关爱
- 📱 **完全响应式** - 支持所有设备，移动端体验完美
- 🚀 **高性能** - 基于 Next.js 14，快速加载和流畅交互
- 💝 **情感化体验** - 每一个细节都体现对毛孩子的关爱
- 🔒 **安全可靠** - 完善的表单验证和数据处理
- 🌍 **多语言支持** - 支持中文、法语、英语三种语言

## 🛠️ 技术栈

- **前端框架**: Next.js 14 + TypeScript
- **样式系统**: Tailwind CSS
- **动画库**: Framer Motion
- **表单处理**: React Hook Form + Zod
- **邮件服务**: Nodemailer
- **图标库**: Lucide React
- **国际化**: Next.js i18n + 自定义翻译系统

## 🌍 多语言支持

网站支持以下语言：

- 🇨🇳 **中文** - 默认语言
- 🇫🇷 **Français** - 法语
- 🇺🇸 **English** - 英语

### 语言切换功能

- 自动检测用户浏览器语言偏好
- 支持手动语言切换
- 保持用户选择的语言设置
- 所有内容完全本地化

## 🚀 快速开始

### 1. 安装依赖

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

### 2. 环境配置

创建 `.env.local` 文件并配置以下环境变量：

```bash
# 邮件配置
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
COMPANY_EMAIL=company@sheepaw.com

# 其他配置
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 3. 启动开发服务器

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看网站。

## 📁 项目结构

```
sheepaw-pet-travel/
├── app/                    # Next.js 13+ App Router
│   ├── [locale]/          # 国际化路由
│   │   ├── layout.tsx     # 语言特定布局
│   │   └── page.tsx       # 主页面
│   ├── api/               # API 路由
│   │   └── contact/       # 联系表单处理
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   └── page.tsx           # 默认重定向页面
├── components/             # React 组件
│   ├── Navbar.tsx         # 导航栏
│   ├── Hero.tsx           # 英雄区域
│   ├── Services.tsx       # 服务展示
│   ├── ContactForm.tsx    # 联系表单
│   ├── Footer.tsx         # 页脚
│   └── LanguageSwitcher.tsx # 语言切换器
├── lib/                    # 工具库
│   ├── i18n.ts            # 国际化配置
│   ├── translations/      # 翻译文件
│   │   ├── zh.ts          # 中文翻译
│   │   ├── fr.ts          # 法语翻译
│   │   ├── en.ts          # 英语翻译
│   │   └── index.ts       # 翻译索引
│   └── contexts/          # React 上下文
│       └── I18nContext.tsx # 国际化上下文
├── middleware.ts           # 国际化中间件
├── tailwind.config.js      # Tailwind 配置
├── tsconfig.json           # TypeScript 配置
└── package.json            # 项目依赖
```

## 🎨 设计系统

### 色彩方案

- **主色调**: 温暖可靠的蓝色系 (#4F46E5, #8B5CF6)
- **辅助色**: 温暖的橙色系 (#F59E0B, #FED7AA)
- **中性色**: 柔和的灰色系 (#6B7280, #F9FAFB)

### 字体规范

- **主字体**: Inter (Google Fonts)
- **字重**: 300, 400, 500, 600, 700
- **层级**: Hero(3.5rem), H1(2.5rem), H2(2rem), H3(1.5rem)

### 组件风格

- **圆角**: 大量使用圆角设计，体现温馨感
- **阴影**: 柔和的阴影系统，营造层次感
- **动效**: 微妙的悬停和过渡效果

## 📧 邮件功能

网站包含完整的邮件系统：

1. **客户自动回复** - 温馨的感谢邮件
2. **公司通知** - 新咨询的详细通知
3. **HTML 模板** - 美观的邮件内容

### 邮件配置

支持多种邮件服务商：
- Gmail
- Outlook
- 自定义 SMTP 服务器

## 🌐 部署指南

### Vercel 部署（推荐）

1. 将代码推送到 GitHub
2. 在 Vercel 中导入项目
3. 配置环境变量
4. 自动部署完成

### 其他平台

支持部署到任何支持 Node.js 的平台：
- Netlify
- Railway
- DigitalOcean
- AWS

## 📱 响应式设计

- **移动端优先** - 确保手机端完美体验
- **断点设计** - sm(640px), md(768px), lg(1024px), xl(1280px)
- **触摸友好** - 按钮大小适合触摸操作

## 🔧 自定义配置

### 修改颜色主题

在 `tailwind.config.js` 中修改颜色变量：

```javascript
colors: {
  primary: {
    blue: '#your-color',
    light: '#your-color',
  },
  // ... 其他颜色
}
```

### 添加新语言

1. 在 `lib/translations/` 目录下创建新的翻译文件
2. 在 `lib/i18n.ts` 中添加新语言代码
3. 在 `middleware.ts` 中更新语言检测逻辑

### 修改邮件模板

在 `app/api/contact/route.ts` 中自定义邮件内容。

### 添加新页面

在 `app/[locale]/` 目录下创建新的页面文件。

## 📊 性能优化

- **图片优化** - 自动图片优化和格式转换
- **代码分割** - 自动代码分割和懒加载
- **缓存策略** - 静态资源缓存优化
- **SEO 优化** - 完整的元数据配置
- **国际化优化** - 按需加载翻译文件

## 🐛 故障排除

### 常见问题

1. **邮件发送失败**
   - 检查环境变量配置
   - 确认邮件服务商设置
   - 检查网络连接

2. **样式不生效**
   - 确认 Tailwind CSS 已正确安装
   - 检查 `globals.css` 导入
   - 重启开发服务器

3. **构建失败**
   - 检查 TypeScript 类型错误
   - 确认所有依赖已安装
   - 检查 Node.js 版本兼容性

4. **多语言不工作**
   - 检查 `middleware.ts` 配置
   - 确认翻译文件路径正确
   - 检查语言切换器组件

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

1. Fork 项目
2. 创建功能分支
3. 提交更改
4. 推送到分支
5. 创建 Pull Request

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 📞 联系我们

- **网站**: [https://sheepaw.com](https://sheepaw.com)
- **邮箱**: hello@sheepaw.com
- **微信**: sheepaw_pet

---

**用心服务每一只毛孩子** 🐾

Made with ❤️ by Sheepaw Team

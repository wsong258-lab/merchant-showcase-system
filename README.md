# Merchant Showcase System

面向中国大陆本地门店的高级视觉官网 / 预约系统模板。当前第一阶段只包含「高端餐饮门店 demo」，用于客户手机预览和方案展示。

## 本地启动

安装依赖：

```bash
npm install
```

启动开发服务器：

```bash
npm run dev
```

默认访问：

```txt
http://localhost:3000
```

## 访问餐饮 Demo

餐饮 demo 路径：

```txt
/demo/restaurant
```

本地完整地址：

```txt
http://localhost:3000/demo/restaurant
```

## 构建检查

部署前建议先运行：

```bash
npm run build
```

当前项目是标准 Next.js App Router 项目，餐饮 demo 页面会被静态预渲染，适合先部署到 Vercel 给客户做移动端预览。

## 部署到 Vercel

当前阶段推荐使用 Vercel 做 demo 展示，不作为中国大陆正式生产环境。

### 方式一：通过 Vercel 控制台部署

1. 登录 [Vercel](https://vercel.com)。
2. 选择 `Add New...` / `Project`。
3. 导入 GitHub 仓库 `wsong258-lab/merchant-showcase-system`。
4. Framework Preset 选择 `Next.js`，通常无需额外配置。
5. Build Command 使用默认值：

```bash
next build
```

6. Install Command 使用默认值：

```bash
npm install
```

7. 部署完成后访问 Vercel 生成的域名，并打开：

```txt
/demo/restaurant
```

### 方式二：通过 Vercel CLI 部署

安装 Vercel CLI：

```bash
npm i -g vercel
```

在项目根目录运行：

```bash
vercel
```

根据提示关联 Vercel 项目。需要生产部署时可运行：

```bash
vercel --prod
```

## 当前 Vercel 用途

Vercel 当前只用于：

- 给客户手机查看 demo
- 快速验证页面视觉、动效和响应式体验
- 生成可分享的临时展示链接

当前不建议直接把 Vercel 作为中国大陆门店的正式生产部署方案。

## 未来正式服务中国大陆门店时需要考虑

如果未来要正式服务中国大陆本地门店，需要进一步评估：

- 国内服务器或云服务部署方案
- 域名备案
- 国内 CDN
- 图片资源访问速度和稳定性
- 微信生态内访问体验
- 地图、电话、企微或预约系统集成
- 数据合规、隐私政策和表单留资安全

## 后续开发建议

不要直接提交到 `main`。后续开发请从 `main` 新建功能分支，例如：

```bash
git switch main
git pull
git switch -c feat/next-industry-demo
```

完成后通过 Pull Request 合并回 `main`。

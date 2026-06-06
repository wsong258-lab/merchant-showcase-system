# 参考仓库清单（Reference Repos）

本文件整理了 **merchant-showcase-system** 在开发过程中**可以参考的 GitHub 开源仓库**，以及如何在本地安装 / 查看它们。

这些仓库**只用于学习**：页面结构、组件拆分、视觉风格、动效模式、响应式布局、图片排版方式。

> ## ⚠️ 使用红线（先读这一段）
>
> - 这些仓库**只用于学习**，不是本项目的依赖。
> - **不要**把它们安装进当前项目（不要进 `merchant-showcase-system` 目录里 `npm install`）。
> - **不要**把它们的 `node_modules` 或源码复制进 `merchant-showcase-system`。
> - **不要**直接复制它们的代码到本商业项目。
> - **不要** fork 它们作为主项目。
> - 当前主项目仍然是： **https://github.com/wsong258-lab/merchant-showcase-system**
>
> 本项目应**自己实现代码**，只借鉴设计模式，不搬运。

---

## 目录

- [参考仓库清单](#参考仓库清单)
  - [1. 餐饮参考仓库](#1-餐饮参考仓库)
  - [2. 餐饮 landing page 参考仓库](#2-餐饮-landing-page-参考仓库)
  - [3. 高级品牌官网参考仓库](#3-高级品牌官网参考仓库)
  - [4. 高级落地页组件参考仓库](#4-高级落地页组件参考仓库)
  - [5. shadcn / Next.js 项目底座参考仓库](#5-shadcn--nextjs-项目底座参考仓库)
  - [6. React 餐饮模板参考仓库](#6-react-餐饮模板参考仓库)
  - [7. SaaS landing page 参考仓库](#7-saas-landing-page-参考仓库)
  - [8. 作品集动效参考仓库](#8-作品集动效参考仓库)
  - [9. 小商家餐饮模板参考仓库](#9-小商家餐饮模板参考仓库)
- [一、这些仓库怎么使用](#一这些仓库怎么使用)
- [二、推荐本地目录](#二推荐本地目录)
- [三、许可证提醒](#三许可证提醒)
- [四、和本项目的关系](#四和本项目的关系)

---

## 参考仓库清单

> 每个仓库下方给出的安装命令为通用写法（`git`、`npm` 在 Windows PowerShell 与 macOS / Linux 终端都可直接运行）。
> 若想在 Windows 上**一次性克隆全部**，见 [二、推荐本地目录](#二推荐本地目录) 的 PowerShell 批量脚本。
> 具体技术栈版本、包管理器（部分仓库可能用 `pnpm` / `yarn`）和运行前置条件，**以各仓库自身 README 为准**，clone 后先看 README。

### 1. 餐饮参考仓库

- 仓库：https://github.com/ArfinHasib/Restaurant-website-nextjs14-tailwind-framer-motion
- 技术栈：Next.js 14 + Tailwind CSS + Framer Motion
- 用途：学习餐饮门店页面结构、Next.js、Tailwind、Framer Motion 动效、菜品展示、Hero、菜单区块。
- 在本项目里参考什么：高端餐饮品牌页（对应 `/demo/restaurant`）的 Hero、菜单区块、滚动动效节奏。

安装 / 查看方式：

```bash
git clone https://github.com/ArfinHasib/Restaurant-website-nextjs14-tailwind-framer-motion.git
cd Restaurant-website-nextjs14-tailwind-framer-motion
npm install
npm run dev
```

### 2. 餐饮 landing page 参考仓库

- 仓库：https://github.com/arnobt78/Restaurant-Landing-Page-1--NextJS-Frontend
- 技术栈：Next.js + Framer Motion
- 用途：学习新版 Next.js 餐饮落地页结构、响应式布局、餐饮品牌展示、Framer Motion 动效。
- 在本项目里参考什么：餐饮落地页的整体区块编排与响应式断点处理。

安装 / 查看方式：

```bash
git clone https://github.com/arnobt78/Restaurant-Landing-Page-1--NextJS-Frontend.git
cd Restaurant-Landing-Page-1--NextJS-Frontend
npm install
npm run dev
```

### 3. 高级品牌官网参考仓库

- 仓库：https://github.com/chrhi/studio
- 用途：学习高级品牌官网排版、案例展示、作品集结构、动效节奏、视觉高级感。适合参考美业、摄影、民宿、工作室类门店页面。
- 在本项目里参考什么：高端门店品牌页（美业 / 摄影 / 民宿 / 工作室）的留白、排版层级与电影感节奏。

安装 / 查看方式：

```bash
git clone https://github.com/chrhi/studio.git
cd studio
npm install
npm run dev
```

### 4. 高级落地页组件参考仓库

- 仓库：https://github.com/chrhi/faria
- 技术栈：shadcn/ui + Tailwind CSS + Framer Motion
- 用途：学习现代 landing page 视觉、shadcn/ui、Tailwind、Framer Motion、卡片、按钮、CTA、区块排版。
- 在本项目里参考什么：与本项目同源的 shadcn/ui 体系下，卡片 / 按钮 / CTA 的组合方式（本项目已有 `components/ui` 同类原语）。

安装 / 查看方式：

```bash
git clone https://github.com/chrhi/faria.git
cd faria
npm install
npm run dev
```

### 5. shadcn / Next.js 项目底座参考仓库

- 仓库：https://github.com/shadcnblocks/mainline-nextjs-template
- 技术栈：Next.js 15 + Tailwind CSS + shadcn/ui
- 用途：学习 Next.js 15、Tailwind、shadcn/ui 项目结构、组件组织、现代前端项目底座。
- 在本项目里参考什么：目录组织、组件分层与项目底座约定（本项目同为 Next.js App Router + shadcn/ui）。

安装 / 查看方式：

```bash
git clone https://github.com/shadcnblocks/mainline-nextjs-template.git
cd mainline-nextjs-template
npm install
npm run dev
```

### 6. React 餐饮模板参考仓库

- 仓库：https://github.com/themixlyweb/react-restaurant-website-template
- 技术栈：React + Vite + Tailwind CSS（**不是 Next.js**）
- 用途：学习一页式餐饮网站结构、React、Vite、Tailwind、移动端餐饮页面。
- 注意：它不是 Next.js 项目，只参考**结构和视觉**，不直接合并到本项目。
- 在本项目里参考什么：街边小店扫码页（`/demo/local-shop`）的一页式、轻量、移动优先布局。

安装 / 查看方式：

```bash
git clone https://github.com/themixlyweb/react-restaurant-website-template.git
cd react-restaurant-website-template
npm install
npm run dev
```

### 7. SaaS landing page 参考仓库

- 仓库：https://github.com/harshxraj/saas-landing-nextjs
- 用途：学习现代 landing page 首屏、CTA、滚动区块、视觉冲击。
- 注意：它是 **SaaS 方向，不是门店方向**，只参考**视觉和动效**，不要套用它的信息架构到门店页面。
- 在本项目里参考什么：首屏视觉张力、CTA 表现与滚动区块过渡（仅视觉 / 动效层面）。

安装 / 查看方式：

```bash
git clone https://github.com/harshxraj/saas-landing-nextjs.git
cd saas-landing-nextjs
npm install
npm run dev
```

### 8. 作品集动效参考仓库

- 仓库：https://github.com/codebucks27/Next.js-Developer-Portfolio-Starter-Code
- 技术栈：Next.js + Framer Motion
- 用途：学习作品集展示、滚动动画、案例展示、Framer Motion。适合参考美甲作品墙、摄影作品墙、美业案例展示。
- 在本项目里参考什么：高端门店品牌页里的「案例 / 作品墙」滚动展示（如美业、摄影门店）。

安装 / 查看方式：

```bash
git clone https://github.com/codebucks27/Next.js-Developer-Portfolio-Starter-Code.git
cd Next.js-Developer-Portfolio-Starter-Code
npm install
npm run dev
```

### 9. 小商家餐饮模板参考仓库

- 仓库：https://github.com/jonathanrao99/Restaurant-Template
- 用途：学习小商家餐饮网站结构、菜单展示、门店信息、轻量页面。适合参考街边小店扫码菜单页。
- 在本项目里参考什么：街边小店扫码页（`/demo/local-shop`）的菜单展示、门店信息块、轻量加载。

安装 / 查看方式：

```bash
git clone https://github.com/jonathanrao99/Restaurant-Template.git
cd Restaurant-Template
npm install
npm run dev
```

---

## 一、这些仓库怎么使用

**推荐使用方式：**

- 单独 `clone` 到本地的 `reference-repos` 文件夹（与主项目**并列**，不要放进主项目内部）。
- 单独 `npm install`。
- 单独 `npm run dev` 查看效果。
- **不要**把 `node_modules` 或这些仓库的代码复制进 `merchant-showcase-system`。
- **不要**直接复制代码到本商业项目。

**只学习以下内容：**

- 页面结构
- 组件拆分
- 动效模式
- 视觉风格
- 响应式布局
- 图片排版方式

看完即可关闭 / 删除本地副本，本项目里所有实现都应自己重写。

---

## 二、推荐本地目录

建议把参考仓库放在与主项目**同级**的独立目录里，彼此隔离：

```text
C:/Projects/
  merchant-showcase-system/        # 主项目（本仓库，唯一的业务项目）
  reference-repos/                 # 参考资料，仅用于学习，不参与构建
    Restaurant-website-nextjs14-tailwind-framer-motion/
    Restaurant-Landing-Page-1--NextJS-Frontend/
    studio/
    faria/
    mainline-nextjs-template/
    react-restaurant-website-template/
    saas-landing-nextjs/
    Next.js-Developer-Portfolio-Starter-Code/
    Restaurant-Template/
```

这样做的好处：

- 参考代码永远不会被误打包进主项目。
- 主项目的 `git` 历史保持干净，不混入第三方源码。
- 随时可以整体删除 `reference-repos/` 而不影响主项目。

**Windows PowerShell：一次性克隆全部参考仓库**

在本机执行以下脚本，会在 `C:\Projects\reference-repos` 下克隆全部 9 个仓库（与主项目并列，不会进入主项目目录）：

```powershell
# 1) 创建并进入参考目录（与 merchant-showcase-system 并列）
$refRoot = "C:\Projects\reference-repos"
New-Item -ItemType Directory -Force -Path $refRoot | Out-Null
Set-Location $refRoot

# 2) 批量克隆
$repos = @(
  "https://github.com/ArfinHasib/Restaurant-website-nextjs14-tailwind-framer-motion.git",
  "https://github.com/arnobt78/Restaurant-Landing-Page-1--NextJS-Frontend.git",
  "https://github.com/chrhi/studio.git",
  "https://github.com/chrhi/faria.git",
  "https://github.com/shadcnblocks/mainline-nextjs-template.git",
  "https://github.com/themixlyweb/react-restaurant-website-template.git",
  "https://github.com/harshxraj/saas-landing-nextjs.git",
  "https://github.com/codebucks27/Next.js-Developer-Portfolio-Starter-Code.git",
  "https://github.com/jonathanrao99/Restaurant-Template.git"
)
foreach ($r in $repos) { git clone $r }
```

查看其中某一个（以 `faria` 为例）：

```powershell
Set-Location C:\Projects\reference-repos\faria
npm install
npm run dev
```

> 提醒：`reference-repos/` 不要放进 `merchant-showcase-system` 内部，避免被 `git` 跟踪或被构建工具扫描到。

---

## 三、许可证提醒

**使用任何参考仓库前，必须先检查它的 LICENSE：**

- 优先参考带有明确开源许可证（如 **MIT**、**Apache-2.0**）的仓库，这类仓库通常更适合学习与二次开发。
- **没有 LICENSE** 的仓库：默认**不要**复制其代码用于商业项目（无许可证 ≠ 可自由使用，默认保留全部权利）。
- 即使是宽松许可证，也以**学习设计模式**为目的，不整段搬运源码；如确需保留某些第三方代码片段，需遵守其许可证的署名 / 声明要求。

**本项目的底线：**

- 本项目应**自己实现代码**，不直接搬运任何参考仓库的源码。
- 参考仓库提供的是**思路和设计语言**，不是可复制的素材库。

---

## 四、和本项目的关系

- **merchant-showcase-system 是主项目**，是唯一的业务代码仓库。
- 本文列出的仓库都是**参考资料，不是依赖**，不进入 `package.json`，不参与构建与部署。

**未来扩展时如何使用这些参考：**

本项目规划了两条产品线（详见 [`AGENTS.md`](../AGENTS.md) 与 [`docs/product-strategy.md`](./product-strategy.md)）：

1. **高端门店品牌页**（高端餐饮、美业、宠物洗护、健身、摄影、民宿）——现有 demo：`/demo/restaurant`。
2. **街边小店扫码页**（早餐、面馆、快餐、奶茶、水果店等）——新增 demo 路径：`/demo/local-shop`。

以后新增 `beauty-nail`（美业）、`local-shop`（街边小店）、`pet-care`（宠物洗护）等 demo 时，可以参考上述仓库的**设计模式**，但必须**保持本项目自己的工程结构**：

- 自己的**组件体系**：复用 `components/ui`、`components/sections`、`components/motion`，不引入参考仓库的组件实现。
- 自己的**主题体系**：通过 `themes/presets/*` 定义各行业主题，不照搬参考仓库的样式文件。
- 自己的**数据驱动结构**：通过 `data/demo/*` 驱动页面内容，页面与数据分离，新增行业 demo 只新增数据与主题，不重写区块。
- 不影响、不重构、不删除现有 `/demo/restaurant`。

> 一句话总结：**参考它们怎么想，不要复制它们怎么写。** 视觉与动效可以借鉴，工程实现一律走本项目自己的组件 / 主题 / 数据三层体系。

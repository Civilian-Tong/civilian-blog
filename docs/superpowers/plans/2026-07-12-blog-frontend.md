<!--
*[INPUT]：依赖 ../specs/2026-07-12-blog-frontend-design.md 的已确认设计，依赖 Next.js App Router 技术栈
*[OUTPUT]：保留第一版蓝白公开前台的历史任务、测试命令与完成标准，供追溯使用。
*[POS]：docs/superpowers/plans 的已废弃历史计划；当前执行基线为 2026-07-12-civilian-blog-public-frontend-redesign.md。
*[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md
-->

# Blog Frontend Implementation Plan

> 状态：已废弃。当前执行基线请见 [Civilian_blog 公开前台重构计划](./2026-07-12-civilian-blog-public-frontend-redesign.md)。

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 构建一套蓝白渐变、响应式、可真实浏览的个人品牌 Blog 前台，覆盖八类公开页面并以类型化模拟数据驱动。

**Architecture:** 使用 Next.js App Router 组织路由与 SEO，默认采用服务端组件；交互筛选、移动导航和动效使用小型客户端组件。内容模型与展示组件分离，未来接入 FastAPI 或 i18next 时只替换数据与文案提供层。

**Tech Stack:** Next.js、React、TypeScript、Tailwind CSS 4、Motion、Lucide React、Vitest、Testing Library、Playwright。

---

## 文件结构

```text
src/
├── app/                    路由、布局、元数据、404 与页面组合
├── components/layout/      页头、移动导航、页脚
├── components/display/     标题、状态、侧注与空状态展示原语
├── components/ui/          容器与行动原语
├── content/                类型化中文模拟数据
├── features/articles/      文章卡片、正文与目录
├── features/home/          首页分区
├── features/projects/      项目卡片、筛选与详情
├── features/resume/        简历区块
├── features/timeline/      时间线条目
├── lib/                    className、日期和筛选纯函数
├── styles/                 设计令牌与全局样式
└── types/                  Project、Article、Timeline、Profile 类型
```

## Task 1：工程骨架与测试基线

**Files:**
- Create: `package.json`
- Create: `next.config.ts`
- Create: `tsconfig.json`
- Create: `postcss.config.mjs`
- Create: `vitest.config.ts`
- Create: `src/app/layout.tsx`
- Create: `src/app/page.tsx`
- Create: `src/styles/globals.css`
- Create: `src/lib/cn.ts`
- Test: `src/lib/cn.test.ts`

- [ ] **Step 1: 写失败测试**

```ts
import { describe, expect, it } from 'vitest'
import { cn } from './cn'

describe('cn', () => {
  it('合并条件类名并消解 Tailwind 冲突', () => {
    expect(cn('px-2', false && 'hidden', 'px-4')).toBe('px-4')
  })
})
```

- [ ] **Step 2: 安装依赖并验证测试失败**

Run: `npm install && npm test -- --run src/lib/cn.test.ts`
Expected: FAIL，提示 `./cn` 不存在。

- [ ] **Step 3: 实现工程配置与 cn**

```ts
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

全局样式必须定义 `--background`、`--foreground`、`--primary`、`--primary-strong`、`--surface`、`--border` 和对应渐变令牌，页面背景使用白到浅蓝渐变。

- [ ] **Step 4: 验证基线**

Run: `npm test -- --run src/lib/cn.test.ts && npm run typecheck`
Expected: 1 test PASS，TypeScript 无错误。

- [ ] **Step 5: 记录版本状态**

当前目录无 Git 仓库，不执行提交；保留 `package-lock.json` 固定实际安装版本。

## Task 2：内容模型与模拟数据

**Files:**
- Create: `src/types/content.ts`
- Create: `src/content/profile.ts`
- Create: `src/content/projects.ts`
- Create: `src/content/articles.ts`
- Create: `src/content/timeline.ts`
- Create: `src/lib/content.ts`
- Test: `src/lib/content.test.ts`

- [ ] **Step 1: 写失败测试**

```ts
import { describe, expect, it } from 'vitest'
import { filterProjects, getProjectBySlug } from './content'
import { projects } from '@/content/projects'

describe('project content', () => {
  it('按分类筛选并按 slug 查找', () => {
    expect(filterProjects(projects, 'AI').every((item) => item.category === 'AI')).toBe(true)
    expect(getProjectBySlug(projects, projects[0].slug)?.title).toBe(projects[0].title)
  })
})
```

- [ ] **Step 2: 运行并确认失败**

Run: `npm test -- --run src/lib/content.test.ts`
Expected: FAIL，内容模块尚不存在。

- [ ] **Step 3: 建立互不混杂的模型**

`Project` 包含 `slug/title/summary/category/status/stack/featured/cover/highlights/challenge/solution/role/links`；`Article` 包含 `slug/title/excerpt/category/tags/publishedAt/readMinutes/featured/cover/sections`；`TimelineEntry` 包含 `id/type/date/title/content/tags`。模拟数据至少包含 6 个项目、6 篇文章、6 条动态，且包含在线、开发中、维护中、已归档状态。

```ts
export function filterProjects(items: Project[], category: ProjectCategory | '全部') {
  return category === '全部' ? items : items.filter((item) => item.category === category)
}

export function getProjectBySlug(items: Project[], slug: string) {
  return items.find((item) => item.slug === slug)
}
```

- [ ] **Step 4: 验证内容层**

Run: `npm test -- --run src/lib/content.test.ts && npm run typecheck`
Expected: 内容测试通过，类型无错误。

- [ ] **Step 5: 更新 L3/L2 文档**

检查每个业务文件 INPUT/OUTPUT/POS 头部，并在 `src/content/AGENTS.md`、`src/types/AGENTS.md`、`src/lib/AGENTS.md` 登记成员。

## Task 3：全局外壳与导航

**Files:**
- Create: `src/components/layout/site-header.tsx`
- Create: `src/components/layout/mobile-nav.tsx`
- Create: `src/components/layout/site-footer.tsx`
- Create: `src/components/ui/container.tsx`
- Create: `src/components/ui/button-link.tsx`
- Modify: `src/app/layout.tsx`
- Test: `src/components/layout/site-header.test.tsx`

- [ ] **Step 1: 写失败测试**

```tsx
import { render, screen } from '@testing-library/react'
import { SiteHeader } from './site-header'

it('展示核心导航与简历入口', () => {
  render(<SiteHeader />)
  expect(screen.getByRole('link', { name: '作品' })).toHaveAttribute('href', '/projects')
  expect(screen.getByRole('link', { name: '查看简历' })).toHaveAttribute('href', '/resume')
})
```

- [ ] **Step 2: 运行并确认失败**

Run: `npm test -- --run src/components/layout/site-header.test.tsx`
Expected: FAIL，页头组件不存在。

- [ ] **Step 3: 实现可访问导航**

桌面端展示主页、作品、文章、动态、关于和简历；移动端按钮带 `aria-expanded` 与可见焦点，抽屉打开后可关闭。根布局统一挂载页头、主内容和页脚。

- [ ] **Step 4: 验证导航**

Run: `npm test -- --run src/components/layout/site-header.test.tsx`
Expected: 导航链接与移动菜单行为通过。

- [ ] **Step 5: 同步组件地图**

创建 `src/components/AGENTS.md` 与必要子目录地图，登记组件职责和依赖边界。

## Task 4：首页叙事链

**Files:**
- Create: `src/features/home/hero.tsx`
- Create: `src/features/home/skills-strip.tsx`
- Create: `src/features/home/featured-projects.tsx`
- Create: `src/features/home/latest-articles.tsx`
- Create: `src/features/home/recent-timeline.tsx`
- Create: `src/components/display/section-heading.tsx`
- Create: `src/components/display/tech-badge.tsx`
- Modify: `src/app/page.tsx`
- Test: `src/app/page.test.tsx`

- [ ] **Step 1: 写失败测试**

```tsx
import { render, screen } from '@testing-library/react'
import HomePage from './page'

it('首屏说明身份并提供作品与简历行动', () => {
  render(<HomePage />)
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('构建真正可用的 Web 与 AI 产品')
  expect(screen.getByRole('link', { name: '浏览代表作品' })).toHaveAttribute('href', '/projects')
  expect(screen.getByRole('link', { name: '查看在线简历' })).toHaveAttribute('href', '/resume')
})
```

- [ ] **Step 2: 运行并确认失败**

Run: `npm test -- --run src/app/page.test.tsx`
Expected: FAIL，首页内容尚未实现。

- [ ] **Step 3: 实现首页**

按“身份 -> 能力 -> 代表项目 -> 最新文章 -> 近期动态 -> 联系行动”组合分区。首屏使用蓝白光晕、网格背景和克制动效；正文区域保持白色高对比表面。

- [ ] **Step 4: 验证首页**

Run: `npm test -- --run src/app/page.test.tsx && npm run typecheck`
Expected: 首页语义、行动入口和类型检查通过。

- [ ] **Step 5: 检查无障碍动效**

确认所有进入动效在 `prefers-reduced-motion: reduce` 下禁用位移和长过渡。

## Task 5：作品列表与项目详情

**Files:**
- Create: `src/app/projects/page.tsx`
- Create: `src/app/projects/[slug]/page.tsx`
- Create: `src/features/projects/project-card.tsx`
- Create: `src/features/projects/project-filter.tsx`
- Create: `src/features/projects/project-detail.tsx`
- Create: `src/components/display/status-badge.tsx`
- Test: `src/features/projects/project-filter.test.tsx`

- [ ] **Step 1: 写失败测试**

```tsx
import { fireEvent, render, screen } from '@testing-library/react'
import { ProjectFilter } from './project-filter'
import { projects } from '@/content/projects'

it('切换分类后只显示对应项目', () => {
  render(<ProjectFilter projects={projects} />)
  fireEvent.click(screen.getByRole('button', { name: 'AI' }))
  expect(screen.getAllByTestId('project-card').every((card) => card.dataset.category === 'AI')).toBe(true)
})
```

- [ ] **Step 2: 运行并确认失败**

Run: `npm test -- --run src/features/projects/project-filter.test.tsx`
Expected: FAIL，项目筛选组件不存在。

- [ ] **Step 3: 实现项目体验**

列表支持“全部、AI、Web、RAG、智能体”筛选；详情页使用稳定 slug 和 `generateStaticParams`，无效 slug 调用 `notFound()`。状态徽章同时使用文字和图标，不只依赖颜色。

- [ ] **Step 4: 验证作品路径**

Run: `npm test -- --run src/features/projects/project-filter.test.tsx && npm run build`
Expected: 筛选测试通过，所有项目详情静态生成成功。

- [ ] **Step 5: 检查外部链接**

所有新窗口链接包含 `rel="noreferrer"`，不可用链接显示禁用说明而不是空跳转。

## Task 6：文章列表与文章详情

**Files:**
- Create: `src/app/articles/page.tsx`
- Create: `src/app/articles/[slug]/page.tsx`
- Create: `src/features/articles/article-card.tsx`
- Create: `src/features/articles/article-body.tsx`
- Create: `src/features/articles/article-toc.tsx`
- Test: `src/features/articles/article-body.test.tsx`

- [ ] **Step 1: 写失败测试**

```tsx
import { render, screen } from '@testing-library/react'
import { ArticleBody } from './article-body'

it('按语义层级渲染文章章节', () => {
  render(<ArticleBody sections={[{ id: 'design', title: '设计取舍', paragraphs: ['保持数据单向流动。'] }]} />)
  expect(screen.getByRole('heading', { level: 2, name: '设计取舍' })).toBeInTheDocument()
  expect(screen.getByText('保持数据单向流动。')).toBeInTheDocument()
})
```

- [ ] **Step 2: 运行并确认失败**

Run: `npm test -- --run src/features/articles/article-body.test.tsx`
Expected: FAIL，文章正文组件不存在。

- [ ] **Step 3: 实现阅读体验**

文章列表展示摘要、分类、标签、日期和阅读时长；详情页生成目录锚点，正文最大行宽受控，代码块可横向滚动，图片保留替代文本。无效 slug 返回 404。

- [ ] **Step 4: 验证文章路径**

Run: `npm test -- --run src/features/articles/article-body.test.tsx && npm run build`
Expected: 文章语义测试和静态构建通过。

- [ ] **Step 5: 检查排版**

在 375px 与 1440px 视口确认正文无横向溢出，目录在小屏隐藏或折叠。

## Task 7：动态、关于与在线简历

**Files:**
- Create: `src/app/timeline/page.tsx`
- Create: `src/app/about/page.tsx`
- Create: `src/app/resume/page.tsx`
- Create: `src/features/timeline/timeline-item.tsx`
- Create: `src/features/resume/resume-section.tsx`
- Create: `src/features/resume/resume-actions.tsx`
- Test: `src/app/resume/page.test.tsx`

- [ ] **Step 1: 写失败测试**

```tsx
import { render, screen } from '@testing-library/react'
import ResumePage from './page'

it('展示简历核心章节和下载入口', () => {
  render(<ResumePage />)
  expect(screen.getByRole('heading', { name: '项目经历' })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: '下载 PDF 简历' })).toBeInTheDocument()
})
```

- [ ] **Step 2: 运行并确认失败**

Run: `npm test -- --run src/app/resume/page.test.tsx`
Expected: FAIL，简历页面不存在。

- [ ] **Step 3: 实现三个页面**

动态页按时间倒序展示；关于页表达能力结构与成长路径；简历页采用高密度单列/双列自适应布局并提供打印样式。下载链接在没有真实 PDF 时明确标记“示例入口”，不伪造文件。

- [ ] **Step 4: 验证页面**

Run: `npm test -- --run src/app/resume/page.test.tsx && npm run typecheck`
Expected: 简历核心信息和类型检查通过。

- [ ] **Step 5: 验证打印布局**

使用浏览器打印预览确认导航、页脚和装饰背景在 print media 下隐藏，正文保持黑白可读。

## Task 8：错误状态、SEO、端到端与视觉验收

**Files:**
- Create: `src/app/not-found.tsx`
- Create: `src/components/display/empty-state.tsx`
- Create: `playwright.config.ts`
- Create: `e2e/public-pages.spec.ts`
- Modify: `src/app/layout.tsx`
- Modify: `package.json`

- [ ] **Step 1: 写失败的端到端测试**

```ts
import { expect, test } from '@playwright/test'

test('访客可从首页进入作品与简历', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('link', { name: '浏览代表作品' }).click()
  await expect(page).toHaveURL(/\/projects$/)
  await page.getByRole('link', { name: '查看简历' }).first().click()
  await expect(page).toHaveURL(/\/resume$/)
})
```

- [ ] **Step 2: 运行并确认失败**

Run: `npm run test:e2e`
Expected: 首次在页面或 Playwright 浏览器未就绪处失败；安装 Chromium 后再次运行以确认真实页面失败点。

- [ ] **Step 3: 补齐质量边界**

根布局设置中文 `lang`、站点标题模板、描述和 Open Graph 基线；404 提供返回首页、作品、文章入口；空状态组件提供标题、说明和可选行动。

- [ ] **Step 4: 执行完整验证**

Run: `npm test -- --run && npm run lint && npm run typecheck && npm run build && npm run test:e2e`
Expected: 单元测试、Lint、类型检查、生产构建和端到端测试全部通过。

- [ ] **Step 5: 浏览器视觉验收**

在 375×812、768×1024、1440×1000 三种视口逐页检查：首页、作品、项目详情、文章、文章详情、动态、关于、简历和 404。验收无横向滚动、文字截断、菜单遮挡、低对比文本、失效链接和装饰过载。

- [ ] **Step 6: GEB 回环检查**

逐层核对业务文件 L3、模块 AGENTS.md 和根 AGENTS.md；确保目录树、成员清单、依赖与导出和代码现实一致。

## 计划自检结论

- 规格覆盖：八类公开页面、蓝白渐变、模拟数据、响应式、错误状态、SEO、测试和 i18n 边界均有对应任务。
- 范围控制：登录、后台、数据库、真实搜索、互动、统计、AI 与 i18n 运行时均未混入第一版。
- 类型一致性：项目、文章、动态保持独立模型；页面统一使用 slug；筛选只接受项目分类或“全部”。
- 占位符检查：计划不存在 TBD、TODO 或未定义的“后续补充”步骤。

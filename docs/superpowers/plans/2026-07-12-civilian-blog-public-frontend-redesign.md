# Civilian_blog Public Frontend Redesign Implementation Plan

<!--
*[INPUT]：依赖 ../specs/2026-07-12-civilian-blog-immersive-design.md 与当前 Next.js 公开前台代码。
*[OUTPUT]：对外提供沉浸式公开前台重构的逐任务顺序、精确文件清单、测试命令与验收边界。
*[POS]：docs/superpowers/plans 的当前前端实施基线；只覆盖模拟数据驱动的公开界面，不实现数据库和真实后台服务。
*[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md
-->

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将蓝白工作台式前台重构为 Civilian_blog 的沉浸式人物主图博客，覆盖动态、作品、文章、留言板、关于我、搜索与后台登录入口。

**Architecture:** 保持 Next.js App Router 和 `content -> feature -> page` 单向数据流；新增 `moments` 领域替代 `timeline`，以 `site.ts` 集中配置品牌与 Hero。真实登录、上传、持久化搜索、点赞、评论、留言和审核留给后续 API 阶段，前台不得伪造写入成功。

**Tech Stack:** Next.js 16、React 19、TypeScript、Tailwind CSS 4、Motion、Lucide React、Vitest、Testing Library、Playwright。

---

## 前置条件与边界

- 站长提供拥有使用权的人物主图，保存为 `public/images/hero/civilian-hero.jpg`；未收到原图前不得使用参考截图、动漫图或网络图代替。
- 本计划只交付静态/模拟数据驱动的公开前台。互动按钮只呈现数据与可访问状态，写入接口以后端接入为准。
- 删除旧 `/timeline`、`/resume` 路由及同名 feature/content，不保留兼容重定向；新路由使用 `/moments` 与 `/about`。

## 目标文件结构

```text
public/images/hero/civilian-hero.jpg      # 站长提供的主图
src/content/site.ts                       # 品牌、Hero 与站点配置
src/content/moments.ts                    # 朋友圈式动态
src/content/guestbook.ts                  # 留言板模拟数据
src/features/moments/                     # 动态卡片、媒体宫格与详情
src/components/interaction/               # 只读点赞、评论与留言展示
src/app/moments/                          # 动态列表与详情路由
src/app/guestbook/page.tsx                # 留言板路由
src/app/admin/login/page.tsx              # 管理后台登录壳
```

### Task 1: 迁移内容契约与站点配置

**Files:**
- Create: `src/content/site.ts`, `src/content/moments.ts`, `src/content/guestbook.ts`
- Modify: `src/types/content.ts`, `src/content/profile.ts`, `src/content/projects.ts`, `src/content/articles.ts`, `src/lib/content.ts`, `src/lib/content.test.ts`
- Modify: `src/content/AGENTS.md`, `src/types/AGENTS.md`, `src/lib/AGENTS.md`

- [ ] **Step 1: 写失败测试。**

```ts
it('按 slug 查找动态并跨内容搜索', () => {
  expect(getMomentBySlug(moments, moments[0].slug)).toEqual(moments[0])
  expect(getSearchResults('AI', { projects, articles, moments }).length).toBeGreaterThan(0)
})
```

- [ ] **Step 2: 运行失败测试。**

Run: `pnpm test -- --run src/lib/content.test.ts`  
Expected: FAIL，缺少 `moments` 与查询函数。

- [ ] **Step 3: 写最小模型和配置。**

```ts
export interface HeroConfig {
  imageSrc: string; imageAlt: string; focalPoint: string; motion: 'drift' | 'zoom'
}
export interface GuestbookEntry { id: string; author: string; body: string; createdAt: string }
export interface Moment {
  slug: string; publishedAt: string; content: string
  media: { src: string; alt: string; kind: 'image' | 'video' }[]
  tags: string[]; likes: number
  comments: { id: string; author: string; body: string; createdAt: string }[]
  related?: { kind: 'article' | 'project'; slug: string; label: string }
}
export const site = {
  name: 'Civilian_blog', email: '3519501337@qq.com',
  welcome: '欢迎，来到我的世界。', motto: '归心自渡，自有荣光之处……',
  hero: { imageSrc: '/images/hero/civilian-hero.jpg', imageAlt: 'Civilian_blog 站长的人物主图', focalPoint: '50% 50%', motion: 'drift' },
} as const
```

项目模型新增 `cover`、可选 `images`、可选 `links.demo` 与 `links.source`；删除求职 availability 文案和 `TimelineEntry`。

- [ ] **Step 4: 写纯查询函数。**

```ts
export const getMomentBySlug = (items: Moment[], slug: string) => items.find((item) => item.slug === slug)
export function getSearchResults(query: string, source: SearchSource) {
  const value = query.trim().toLocaleLowerCase()
  return value ? toSearchItems(source).filter((item) => `${item.title} ${item.text}`.toLocaleLowerCase().includes(value)) : []
}
```

- [ ] **Step 5: 验证并更新 L2/L3 文档。**

Run: `pnpm test -- --run src/lib/content.test.ts && pnpm typecheck`  
Expected: PASS。

### Task 2: 建立照片衍生的全局视觉基线

**Files:**
- Modify: `src/styles/globals.css`, `src/app/layout.tsx`, `src/app/page.test.tsx`
- Modify: `src/styles/AGENTS.md`, `src/app/AGENTS.md`

- [ ] **Step 1: 将首页测试改为已确认文案。**

```tsx
expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('欢迎，来到我的世界。')
expect(screen.getByText('归心自渡，自有荣光之处……')).toBeInTheDocument()
expect(screen.getByText('3519501337@qq.com')).toBeInTheDocument()
```

- [ ] **Step 2: 运行失败测试。**

Run: `pnpm test -- --run src/app/page.test.tsx`  
Expected: FAIL，旧 Hero 仍显示“Web 与 AI 产品”。

- [ ] **Step 3: 删除蓝图和蓝白令牌，改为低饱和暗色令牌。**

```css
:root { --page:#101316; --page-raised:#151a1d; --ink:#f1f0eb; --muted:#a6aca9; --line:rgb(232 239 237 / 13%); --accent:#9ac8d0; }
body { background: var(--page); color: var(--ink); }
.content-atmosphere { background: radial-gradient(circle at 20% 0%,rgb(73 111 111 / 28%),transparent 38rem),var(--page); }
```

仅为 `.hero-motion` 增加 30–45 秒缓慢平移动画；保留并验证 `prefers-reduced-motion` 降级。根 metadata 改为 `Civilian_blog`。

- [ ] **Step 4: 验证基础。**

Run: `pnpm test -- --run src/app/page.test.tsx && pnpm lint && pnpm typecheck`  
Expected: PASS，无 `blueprint-grid`、`FENG.LAB` 与旧蓝白色值残留。

### Task 3: 重做悬浮导航、搜索、移动菜单和页脚

**Files:**
- Create: `src/components/layout/search-dialog.tsx`
- Modify: `src/components/layout/site-header.tsx`, `src/components/layout/mobile-nav.tsx`, `src/components/layout/site-footer.tsx`, `src/components/layout/site-header.test.tsx`, `src/components/layout/AGENTS.md`

- [ ] **Step 1: 写失败测试。**

```tsx
expect(screen.getByRole('link', { name: '个人动态' })).toHaveAttribute('href', '/moments')
expect(screen.getByRole('link', { name: '留言板' })).toHaveAttribute('href', '/guestbook')
fireEvent.click(screen.getByRole('button', { name: '搜索' }))
expect(screen.getByRole('dialog', { name: '全站搜索' })).toBeVisible()
```

- [ ] **Step 2: 运行失败测试。**

Run: `pnpm test -- --run src/components/layout/site-header.test.tsx`  
Expected: FAIL，旧导航没有所需链接或搜索按钮。

- [ ] **Step 3: 实现共享导航与搜索层。**

导航固定为：作品集 `/projects`、个人动态 `/moments`、技术文章 `/articles`、留言板 `/guestbook`、关于我 `/about`；站点名回 `/`，登录去 `/admin/login`。搜索层使用 `role="dialog"`、输入框、Esc 和关闭按钮，消费 Task 1 搜索函数。初始导航悬浮于 Hero，上滚/非首页变为半透明暗色窄栏。移动菜单复用同一组链接。

- [ ] **Step 4: 用站点名和邮箱重写页脚。**

只渲染 `site.name`、`site.email` 与公开栏目，缺失的 GitHub 配置不渲染链接。

- [ ] **Step 5: 验证。**

Run: `pnpm test -- --run src/components/layout/site-header.test.tsx && pnpm typecheck`  
Expected: PASS。

### Task 4: 实现全屏人物 Hero 和首页叙事

**Files:**
- Modify: `src/features/home/hero.tsx`, `src/features/home/featured-projects.tsx`, `src/features/home/latest-articles.tsx`, `src/app/page.tsx`, `src/features/home/AGENTS.md`
- Create: `src/features/home/recent-moments.tsx`, `src/features/home/guestbook-invite.tsx`

- [ ] **Step 1: 写首页模块顺序失败测试。**

```tsx
expect(screen.getAllByRole('region').map((node) => node.getAttribute('aria-label')))
  .toEqual(['个人动态', '精选作品', '技术文章', '留言板'])
```

- [ ] **Step 2: 运行失败测试。**

Run: `pnpm test -- --run src/app/page.test.tsx`  
Expected: FAIL，旧首页首先展示作品。

- [ ] **Step 3: 实现 Hero。**

```tsx
<section className="hero-motion relative min-h-svh bg-cover" style={{ backgroundImage: `url(${site.hero.imageSrc})`, backgroundPosition: site.hero.focalPoint }}>
  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(0_0_0/.18),rgb(0_0_0/.38)_58%,var(--page))]" />
  <div className="relative grid min-h-svh place-items-center px-6 text-center">...</div>
</section>
```

中心按站点名、欢迎语、短语、邮箱、向下探索排列；删除技能卡片、求职标签和行动按钮。首页顺序固定为 Hero、3 条动态、2 个作品、文章、留言板入口。

- [ ] **Step 4: 验证。**

Run: `pnpm test -- --run src/app/page.test.tsx && pnpm build`  
Expected: PASS。

### Task 5: 用朋友圈式动态和留言板取代时间线

**Files:**
- Create: `src/app/moments/page.tsx`, `src/app/moments/[slug]/page.tsx`, `src/app/guestbook/page.tsx`
- Create: `src/features/moments/moment-card.tsx`, `src/features/moments/moment-media-grid.tsx`, `src/features/moments/moment-detail.tsx`, `src/features/moments/moment-card.test.tsx`, `src/features/moments/AGENTS.md`
- Create: `src/components/interaction/engagement-summary.tsx`, `src/components/interaction/comment-list.tsx`, `src/components/interaction/guestbook-entry.tsx`, `src/components/interaction/AGENTS.md`
- Delete: `src/app/timeline/page.tsx`, `src/features/timeline/timeline-item.tsx`, `src/content/timeline.ts`
- Modify: `src/app/public-pages.test.tsx`, `src/app/AGENTS.md`, `src/features/AGENTS.md`

- [ ] **Step 1: 写动态失败测试。**

```tsx
render(<MomentCard moment={moments[0]} />)
expect(screen.getByRole('article')).toHaveTextContent(moments[0].content)
expect(screen.getByRole('link', { name: '查看动态详情' })).toHaveAttribute('href', `/moments/${moments[0].slug}`)
expect(screen.getByText(`${moments[0].likes} 人赞过`)).toBeInTheDocument()
```

- [ ] **Step 2: 运行失败测试。**

Run: `pnpm test -- --run src/features/moments/moment-card.test.tsx`  
Expected: FAIL，无法解析 `MomentCard`。

- [ ] **Step 3: 实现动态与互动只读状态。**

卡片按头像/日期/正文/媒体/关联内容/互动排列。媒体 1 张全宽、2–4 张双列、5–9 张三列；视频使用原生控件但不自动播放。点赞、评论按钮显示已有数据并具备 `aria-disabled="true"` 与“互动服务即将开放”说明，不写入本地或假成功。`/moments/[slug]` 用 `generateStaticParams` 和 `notFound()`。

- [ ] **Step 4: 实现留言板视觉状态。**

展示模拟留言和昵称、可选头像 URL、正文表单。没有 API 时提交按钮禁用并明确写“公开留言功能将在后台接入后开放”。

- [ ] **Step 5: 验证替换。**

Run: `pnpm test -- --run src/features/moments/moment-card.test.tsx src/app/public-pages.test.tsx && pnpm build`  
Expected: PASS，`timeline` 文件和路由引用消失。

### Task 6: 重做作品与文章的档案/阅读体验

**Files:**
- Modify: `src/features/projects/project-card.tsx`, `src/features/projects/project-detail.tsx`, `src/features/projects/project-filter.tsx`, `src/app/projects/page.tsx`, `src/app/projects/[slug]/page.tsx`, `src/features/projects/project-filter.test.tsx`, `src/features/projects/AGENTS.md`
- Modify: `src/features/articles/article-card.tsx`, `src/features/articles/article-body.tsx`, `src/features/articles/article-toc.tsx`, `src/app/articles/page.tsx`, `src/app/articles/[slug]/page.tsx`, `src/features/articles/article-body.test.tsx`, `src/features/articles/AGENTS.md`

- [ ] **Step 1: 写失败测试。**

```tsx
expect(screen.getByRole('link', { name: '查看在线作品' })).toHaveAttribute('href', project.links.demo)
expect(screen.getByRole('article')).toHaveTextContent('问题不是从代码开始')
```

- [ ] **Step 2: 运行失败测试。**

Run: `pnpm test -- --run src/features/projects/project-filter.test.tsx src/features/articles/article-body.test.tsx`  
Expected: FAIL，旧链接名称与正文语义不匹配。

- [ ] **Step 3: 实现视觉。**

项目列表用纵向大封面流，详情按主视觉、站长描述、过程图、技术栈、在线作品和 GitHub 展开；可选链接缺失时自然不渲染。文章采用低饱和深色长文区、约 720px 正文、桌面目录、移动端折叠目录、可横滚代码块和文末只读互动摘要。

- [ ] **Step 4: 验证。**

Run: `pnpm test -- --run src/features/projects/project-filter.test.tsx src/features/articles/article-body.test.tsx && pnpm build`  
Expected: PASS，全部 slug 页面完成静态生成。

### Task 7: 合并关于我/简历并新增后台登录壳

**Files:**
- Modify: `src/app/about/page.tsx`, `src/app/public-pages.test.tsx`, `src/app/about/AGENTS.md`
- Create: `src/app/admin/login/page.tsx`, `src/app/admin/login/page.test.tsx`, `src/app/admin/AGENTS.md`
- Delete: `src/app/resume/page.tsx`, `src/app/resume/page.test.tsx`, `src/features/resume/resume-actions.tsx`, `src/features/resume/resume-section.tsx`

- [ ] **Step 1: 写失败测试。**

```tsx
render(<AboutPage />)
expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('关于我')
expect(screen.getByRole('heading', { name: '教育与经历' })).toBeInTheDocument()
render(<AdminLoginPage />)
expect(screen.getByRole('heading', { name: '管理后台' })).toBeInTheDocument()
expect(screen.getByLabelText('邮箱')).toBeInTheDocument()
```

- [ ] **Step 2: 运行失败测试。**

Run: `pnpm test -- --run src/app/public-pages.test.tsx src/app/admin/login/page.test.tsx`  
Expected: FAIL，缺少登录页且关于页未承担简历。

- [ ] **Step 3: 实现页面。**

`/about` 合并照片、自述、技能、教育与经历、代表项目、GitHub、联系方式，删除全部求职导向文案。`/admin/login` 只展示邮箱、密码与“仅站长可用”，提交时阻止默认行为并说明认证服务尚未接入，不保存密码。

- [ ] **Step 4: 验证。**

Run: `pnpm test -- --run src/app/public-pages.test.tsx src/app/admin/login/page.test.tsx && pnpm typecheck`  
Expected: PASS，导航无 `/resume`。

### Task 8: 端到端验收、资源检查和文档回环

**Files:**
- Modify: `e2e/public-pages.spec.ts`, `src/app/not-found.tsx`, `.gitignore`, `task_plan.md`, `findings.md`, `progress.md`, `AGENTS.md`, `e2e/AGENTS.md`

- [ ] **Step 1: 写主路径端到端用例。**

```ts
await page.goto('/')
await expect(page.getByRole('heading', { level: 1 })).toContainText('欢迎，来到我的世界。')
await page.getByRole('link', { name: '个人动态' }).click()
await expect(page).toHaveURL(/\/moments$/)
await page.getByRole('link', { name: '留言板' }).click()
await expect(page).toHaveURL(/\/guestbook$/)
```

- [ ] **Step 2: 运行失败测试。**

Run: `pnpm test:e2e`  
Expected: FAIL，旧用例仍查找旧标题和 `/resume`。

- [ ] **Step 3: 完成资源与无障碍检查。**

Hero 缺图时显示暗色渐变和“主图待配置”可见提示；检查 `alt`、图标按钮标签、搜索关闭路径、外链 `rel` 和 404。将 `.superpowers/` 写入 `.gitignore`。

- [ ] **Step 4: 运行全部质量门。**

Run: `pnpm test -- --run && pnpm lint && pnpm typecheck && pnpm build && pnpm test:e2e`  
Expected: 全部 PASS。

- [ ] **Step 5: 人工视觉验收并更新文档。**

在 375×812、768×1024、1440×1000 检查首页、动态、作品详情、文章详情、留言板、关于我与登录入口；确认无横向滚动、文字不可读、导航遮挡、纯黑背景、强动效或蓝白工作台残留。同步 L3、各目录 `AGENTS.md`、根 `AGENTS.md`、`task_plan.md`、`findings.md`、`progress.md`。

## 计划自检

- Hero、照片色彩、微动态、导航、搜索、动态、项目、文章、留言板、关于我、登录入口、响应式和减少动态均有任务覆盖。
- 认证、上传、持久化互动、真实搜索和审核明确排除，且前台不伪造成功结果。
- `Moment`、`HeroConfig`、`GuestbookEntry` 仅在 Task 1 定义，后续任务只消费同名契约。

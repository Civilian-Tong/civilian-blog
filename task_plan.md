# Task Plan: 个人 Blog 第一版前端

## Goal

交付一套基于 Next.js 的蓝白渐变个人品牌前台，覆盖首页、作品、项目详情、文章、文章详情、动态、关于、简历和错误页面，并通过自动化与浏览器验收。

## Current Phase

Complete

## Phases

### Phase 1: 需求与设计

- [x] 阅读完整产品计划
- [x] 确认技术栈与第一版范围
- [x] 写入设计规格与实施计划
- **Status:** complete

### Phase 2: 工程基线与内容层

- [x] 建立 Next.js、Tailwind 与测试配置
- [x] 使用 TDD 建立工具函数、内容模型与模拟数据
- [x] 同步 src 模块的 L2/L3 文档
- **Status:** complete

### Phase 3: 全局外壳与首页

- [x] 实现导航、移动菜单和页脚
- [x] 实现首页六段叙事链
- [x] 运行组件测试与类型检查
- **Status:** complete

### Phase 4: 内容页面

- [x] 实现作品、项目详情、文章与文章详情
- [x] 实现动态、关于与在线简历
- [x] 实现 404、空状态与 SEO 元数据
- **Status:** complete

### Phase 5: 验证与视觉迭代

- [x] 运行单元测试、Lint、类型检查和生产构建
- [x] 在桌面与移动视口逐页检查
- [x] 修复发现的功能与视觉问题
- **Status:** complete

### Phase 6: 文档回环与交付

- [x] 核对 L1/L2/L3 与代码现实一致
- [x] 更新进度与测试证据
- [x] 向用户提供运行方式和结果
- **Status:** complete

## Key Questions

1. 如何让蓝白渐变有辨识度但不牺牲文章与简历阅读？使用“蓝图工作台”视觉：细网格、坐标刻度、冷蓝光斑与高对比白色内容表面。
2. 如何避免当前不接 i18next 造成未来重写？内容集中在类型化数据文件，通用组件不以中文文本驱动程序逻辑。

## Decisions Made

| Decision | Rationale |
|----------|-----------|
| 当前工作区直接实施 | 目录不是 Git 仓库，无法建立 worktree；用户明确要求在当前项目制作前端 |
| Next.js App Router | 公开内容需要 SEO、静态生成和未来语言路由 |
| 模块化内容模型 | 项目、文章、动态职责不同，拒绝万能内容类型 |
| 当前不安装 i18next | 用户明确第一版不需要多语言运行时 |
| 蓝图工作台视觉 | 蓝白主题具备项目/工程语义，避免通用渐变模板感 |

## Errors Encountered

| Error | Attempt | Resolution |
|-------|---------|------------|
| DOCX 渲染器找不到 LibreOffice | 1 | 本任务只需读取产品内容，改用 python-docx 完整提取正文；未声称完成版式 QA |
| 工作区不是 Git 仓库 | 1 | 不初始化 Git，不创建 worktree，在用户指定工作区内实施并记录限制 |
| Bundled Node 目录没有 npm.cmd | 1 | 改用依赖加载器提供的 pnpm.cmd，并先确认可执行路径 |
| pnpm install 在 120 秒内未结束且无输出 | 1 | 检查锁文件与 node_modules 后，改用 append-only reporter 和更长超时获取可诊断进度 |
| pnpm 拒绝未显式批准的依赖构建脚本 | 1 | 在 package.json 仅允许 sharp 与 unrs-resolver，拒绝全局放开脚本权限 |
| pnpm 11 不再读取 package.json 的 pnpm.onlyBuiltDependencies | 2 | 将白名单迁移到 pnpm-workspace.yaml，这是 pnpm 11 实际读取的配置位置 |
| pnpm 11 已移除 onlyBuiltDependencies 语法 | 3 | 查阅官方 11.x 设置后改用 allowBuilds 映射，仅授权 sharp 与 unrs-resolver |
| pnpm 自动写入的 allowBuilds 占位映射与人工配置重复 | 1 | 读取实际 YAML 后删除占位映射，只保留已审阅的布尔白名单 |
| apply_patch 在连续 Update/Add hunk 间缺少边界 | 1 | 拆分为完整 Update File 与 Add File 区块，避免复用无效补丁 |
| 首页大补丁再次缺少 Update/Add 文件边界 | 2 | 所有 Update File 先完整结束，再开始 Add File；不再混用 hunk 尾标记 |
| 组件测试之间未自动清理 DOM | 1 | 在 Vitest setup 中显式 afterEach(cleanup)，恢复测试隔离 |
| 文章路由在同步 find 回调内使用 await | 1 | 先在 async 路由函数顶层解析 params，再以普通 slug 执行查找 |
| Vitest 默认收集 Playwright e2e 规格 | 1 | 在 Vitest 配置显式排除 e2e、node_modules 与 .next，保持测试运行器边界 |
| next/font/google 在生产构建期无法连接 fonts.googleapis.com | 1 | 根因是构建依赖外部网络；改用本地字体栈，使构建结果与网络状态解耦 |
| mobile-chromium 项目实际继承 iPhone 13 的 WebKit | 1 | 在设备参数展开后显式覆盖 browserName: chromium，与已安装浏览器一致 |
| Next dev 拒绝 127.0.0.1 HMR 导致移动菜单未 hydration | 1 | 将测试服务来源加入 allowedDevOrigins，保持客户端交互在真实浏览器可用 |
| 目录规模诊断误扫 node_modules 与 .next 并超时 | 1 | 后续规模检查只遍历 src、docs、e2e 等自有源码目录 |
| 停止开发服务器后日志句柄短暂未释放 | 1 | 检查 3200 端口相关子进程状态，确认退出后再清理日志，不重复强删 |
| 最终进度补丁引用了已移动的表格行上下文 | 1 | 读取实际文件尾部后拆分补丁，按稳定段落分别更新 |

## Notes

- 详细工程任务见 `docs/superpowers/plans/2026-07-12-blog-frontend.md`。
- 每完成一个 Phase 更新状态、错误与测试证据。

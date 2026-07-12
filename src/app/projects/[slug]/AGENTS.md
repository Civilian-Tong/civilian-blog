# src/app/projects/[slug]/
> L2 | 父级：../AGENTS.md

## 成员清单

page.tsx：静态生成项目 slug，提供详情元数据并将无效 slug 交给 404。

## 职责边界

动态路由只解析 slug 与生成元数据，具体详情结构由 ProjectDetail 持有。

[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md

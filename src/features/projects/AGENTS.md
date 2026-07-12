# src/features/projects/
> L2 | 父级：../AGENTS.md

## 成员清单

project-card.tsx：展示项目编号、状态、摘要、技术栈与详情入口。
project-filter.test.tsx：约束分类切换后只展示对应项目。
project-filter.tsx：管理作品分类选择并渲染收敛后的项目网格。
project-detail.tsx：展示单个项目的问题、方案、职责、指标与链接。

## 职责边界

projects 只表达 Project 领域；分类状态和详情路由不泄漏到通用 UI。

[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md

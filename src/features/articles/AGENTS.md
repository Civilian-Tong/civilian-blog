# src/features/articles/
> L2 | 父级：../AGENTS.md

## 成员清单

article-card.tsx：展示文章编号、分类、标题、摘要、日期与阅读时长。
article-body.test.tsx：约束结构化章节、段落与代码块的语义渲染。
article-body.tsx：渲染结构化章节、段落与横向安全的代码块。
article-toc.tsx：根据章节 ID 生成桌面端目录导航。

## 职责边界

articles 只表达 Article 领域；正文结构和列表摘要保持同一类型契约。

[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md

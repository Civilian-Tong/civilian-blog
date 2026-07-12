# src/app/articles/[slug]/
> L2 | 父级：../AGENTS.md

## 成员清单

page.tsx：静态生成文章 slug、动态元数据、正文与目录，统一无效 slug 的 404 行为。

## 职责边界

动态路由只解析文章身份与组合阅读视图，正文语义由 ArticleBody 保持。

[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md

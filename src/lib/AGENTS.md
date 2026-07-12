# src/lib/
> L2 | 父级：../AGENTS.md

## 成员清单

cn.ts：合并条件 className，并消解 Tailwind 工具类冲突。
cn.test.ts：约束 className 合并与 Tailwind 冲突消解行为。
content.test.ts：约束项目分类筛选、slug 查找与未知输入行为。
content.ts：提供项目筛选与 slug 查询纯函数。

## 职责边界

只保存无页面状态的纯函数；任何工具必须能独立测试，不得反向依赖 features 或 app。

[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md

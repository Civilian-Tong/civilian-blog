# src/features/resume/
> L2 | 父级：../AGENTS.md

## 成员清单

resume-section.tsx：统一简历章节编号、标题与内容布局。
resume-actions.tsx：提供打印动作与禁用的 PDF 示例入口。

## 职责边界

resume 只组织履历表达，不拥有 profile 或 projects 数据，不伪造不存在的文件。

[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md

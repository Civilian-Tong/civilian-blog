# src/components/display/
> L2 | 父级：../AGENTS.md

## 成员清单

section-heading.tsx：统一分区编号、标题、说明与跳转入口。
tech-badge.tsx：统一技术栈标签的视觉与语义。
status-badge.tsx：统一项目在线、开发、维护与归档状态。
page-intro.tsx：统一列表与内容页的编号、标题和导语首屏。
page-intro.test.tsx：约束页面侧注以独立文本行渲染，不暴露转义字符。
empty-state.tsx：统一空内容与错误状态的解释、编号和恢复行动。

## 职责边界

display 只负责跨领域内容呈现，不持有交互状态；基础间距与行动仍属于 ui。

[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md

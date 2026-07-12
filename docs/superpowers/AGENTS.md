# docs/superpowers/
> L2 | 父级：../AGENTS.md

## 成员清单

specs/：保存已确认的设计规格，作为实施计划的唯一上游输入。
plans/：保存可逐项执行的实施计划，把设计规格拆成测试驱动的工程任务。

## 职责边界

本目录负责沉淀设计决策；规格先于计划，计划先于代码，禁止实现与规格各自演化。

## 目录树

```text
superpowers/
├── AGENTS.md
├── plans/
│   ├── AGENTS.md
│   ├── 2026-07-12-civilian-blog-public-frontend-redesign.md
│   └── 2026-07-12-blog-frontend.md
└── specs/
    ├── AGENTS.md
    ├── 2026-07-12-civilian-blog-immersive-design.md
    └── 2026-07-12-blog-frontend-design.md
```

## 变更日志

- 2026-07-12：建立设计规格层。
- 2026-07-12：增加第一版前端实施计划。
- 2026-07-12：确认 Civilian_blog 沉浸式个人世界设计规约，后续计划以其为上游输入。
- 2026-07-12：新增 Civilian_blog 公开前台重构计划，旧蓝白计划降为历史记录。

[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md

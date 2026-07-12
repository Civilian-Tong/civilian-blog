# src/
> L2 | 父级：../AGENTS.md

## 成员清单

app/：Next.js 路由、元数据与页面组合。
content/：第一版中文模拟内容，是公开页面的单一内容源。
features/：按 projects、articles、timeline、resume、home 划分的领域展示单元。
lib/：无 UI 依赖的纯函数与内容查询。
styles/：全局设计令牌、基础排版与响应式规则。
test/：Vitest 与 Testing Library 的公共测试初始化。
types/：跨内容与组件共享的稳定 TypeScript 契约。

## 职责边界

源码按业务职责分域；服务端组件优先，客户端边界只包围真实交互，内容与视图不得纠缠。

[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md

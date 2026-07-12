# src/app/
> L2 | 父级：../AGENTS.md

## 成员清单

layout.tsx：定义字体、SEO 基线与全局页头页脚。
page.test.tsx：约束首页身份标题与两条核心行动路径。
page.tsx：组合首页首屏与后续内容叙事分区。
projects/：作品列表与基于 slug 的项目详情路由。
articles/：文章索引与基于 slug 的长文详情路由。
resume/：在线简历页面与打印布局。
public-pages.test.tsx：约束关于页能力叙事与动态页时间线内容。
about/：个人方法、能力结构与成长路径。
timeline/：公开构建日志与成长轨迹。
not-found.test.tsx：约束 404 的解释与恢复入口。
not-found.tsx：为无效路由和 slug 提供蓝图式错误说明与恢复入口。

## 职责边界

app 只负责路由、元数据与页面组合；领域视图进入 features，内容进入 content。

[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md

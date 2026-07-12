# src/components/
> L2 | 父级：../AGENTS.md

## 成员清单

layout/：跨页面站点外壳与导航。
display/：跨领域的标题、状态、侧注与空状态展示原语。
ui/：无业务状态的容器、按钮与基础视觉原语。

## 职责边界

components 只保存跨领域复用的界面单元；领域内容展示应进入 features，禁止万能组件吞并业务语义。

[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md

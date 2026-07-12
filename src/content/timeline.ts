/**
 *[INPUT]：依赖 types/content 的 TimelineEntry 契约
 *[OUTPUT]：对外提供按时间倒序排列的成长动态
 *[POS]：content 模块的动态单一真相源，被首页与时间线页面消费
 *[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md
 */
import type { TimelineEntry } from '@/types/content'

export const timeline: TimelineEntry[] = [
  { id: 'T-061', type: '开发', date: '2026-07-08', title: '重写知识库的引用链路', content: '把答案、片段和原文位置连成单一证据链，删除了前端三处特殊判断。', tags: ['RAG', 'Refactor'] },
  { id: 'T-060', type: '思考', date: '2026-07-02', title: '首页不是功能目录', content: '首页的任务是建立判断顺序：我是谁、做过什么、证据在哪里。', tags: ['Product', 'Portfolio'] },
  { id: 'T-059', type: '比赛', date: '2026-06-24', title: '完成省赛答辩', content: '把十分钟演示压成问题、方案、证据、结果四段，产品价值终于比技术名词更清楚。', tags: ['Competition', 'Demo'] },
  { id: 'T-058', type: '学习', date: '2026-06-15', title: '补齐 PostgreSQL 查询计划', content: '用真实慢查询理解索引选择，不再把“加索引”当作万能答案。', tags: ['PostgreSQL', 'Performance'] },
  { id: 'T-057', type: '开发', date: '2026-06-03', title: '智能体事件流跑通', content: '工具调用、结果与异常第一次在同一条时间线上可见。', tags: ['Agent', 'WebSocket'] },
  { id: 'T-056', type: '学习', date: '2026-05-22', title: '完成一次无停机部署演练', content: '验证健康检查、流量切换和回滚脚本，而不是只确认容器启动。', tags: ['Docker', 'Delivery'] },
]

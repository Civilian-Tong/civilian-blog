/**
 *[INPUT]：依赖 types/content 的 Article 契约
 *[OUTPUT]：对外提供六篇文章摘要与结构化正文
 *[POS]：content 模块的文章单一真相源，被首页与文章路由消费
 *[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md
 */
import type { Article } from '@/types/content'

const sharedSections = [
  { id: 'context', title: '问题不是从代码开始', paragraphs: ['真正昂贵的返工通常发生在第一行代码之前：目标没有收敛，边界没有被说清，团队却已经开始实现。'] },
  { id: 'decision', title: '让约束替你做决定', paragraphs: ['好的架构不是拥有最多选项，而是让错误选项难以进入系统。把状态、接口和失败路径写成可验证契约，复杂度才会下降。'] },
  { id: 'practice', title: '落到可以执行的动作', paragraphs: ['先建立最短闭环，再用真实反馈决定下一层能力。功能清单描述欲望，交付顺序才体现判断。'], code: 'type Decision = {\n  constraint: string\n  evidence: string\n  next: string\n}' },
]

export const articles: Article[] = [
  { slug: 'rag-system-from-demo-to-product', title: 'RAG 从演示到产品：真正困难的是哪一层', excerpt: '检索、引用、评估与反馈闭环，决定了一个 RAG 系统能否离开 Demo。', category: 'AI Engineering', tags: ['RAG', '架构', '评估'], publishedAt: '2026-06-28', readMinutes: 12, featured: true, serial: 'A—01', sections: sharedSections },
  { slug: 'design-events-for-agents', title: '为智能体设计事件，而不是堆更多日志', excerpt: '把执行过程建模为事件流，调试、重放和观察才有共同语言。', category: 'Agent', tags: ['Agent', 'Event', 'MCP'], publishedAt: '2026-06-16', readMinutes: 9, featured: true, serial: 'A—02', sections: sharedSections },
  { slug: 'portfolio-information-architecture', title: '作品集的信息架构：让能力证据自己说话', excerpt: 'HR 需要快速判断，工程师需要深度证据，页面应该同时服务两种阅读速度。', category: 'Product', tags: ['作品集', 'UX', '求职'], publishedAt: '2026-05-30', readMinutes: 8, featured: true, serial: 'A—03', sections: sharedSections },
  { slug: 'fastapi-boundaries', title: 'FastAPI 项目如何长大而不变成泥团', excerpt: '路由、用例、领域和基础设施的边界，比目录名称本身更重要。', category: 'Backend', tags: ['FastAPI', 'Python', 'DDD'], publishedAt: '2026-05-12', readMinutes: 11, featured: false, serial: 'A—04', sections: sharedSections },
  { slug: 'deployment-checklist', title: '一次可靠部署需要哪些可见证据', excerpt: '从健康检查、日志、回滚到备份，把“应该没问题”变成可验证状态。', category: 'Delivery', tags: ['Docker', 'CI/CD', '运维'], publishedAt: '2026-04-21', readMinutes: 7, featured: false, serial: 'A—05', sections: sharedSections },
  { slug: 'weekly-review-as-system', title: '把周总结设计成一个反馈系统', excerpt: '记录不是目的，能改变下一周行动的反馈才有价值。', category: 'Growth', tags: ['复盘', '系统思维'], publishedAt: '2026-04-02', readMinutes: 6, featured: false, serial: 'A—06', sections: sharedSections },
]

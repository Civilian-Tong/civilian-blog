/**
 *[INPUT]：依赖 types/content 的 Profile 契约
 *[OUTPUT]：对外提供首页、关于页与简历页共享的 profile 数据
 *[POS]：content 模块的个人信息单一真相源，避免跨页面重复维护
 *[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md
 */
import type { Profile } from '@/types/content'

export const profile: Profile = {
  name: '林峰',
  handle: 'FENG / 01',
  role: '全栈开发者 · AI 应用构建者',
  school: '某某大学',
  major: '计算机科学与技术',
  intro: '把复杂问题拆成清晰系统，持续构建真正有人使用的 Web 与 AI 产品。',
  location: '中国 · 可远程',
  email: 'hello@feng.dev',
  availability: '寻找 2026 软件开发 / AI 应用实习机会',
  skills: [
    { group: 'Frontend', items: ['Next.js', 'React', 'TypeScript', 'Vue'] },
    { group: 'Backend', items: ['FastAPI', 'Spring Boot', 'PostgreSQL', 'Redis'] },
    { group: 'AI', items: ['RAG', 'LangChain', 'Agent', 'MCP'] },
    { group: 'Delivery', items: ['Docker', 'Linux', 'CI/CD', 'Nginx'] },
  ],
  experiences: [
    { period: '2025 — NOW', title: '独立产品开发', organization: 'Personal Lab', summary: '从需求、设计到部署，持续交付 AI 与 Web 项目。' },
    { period: '2024 — 2025', title: '核心开发成员', organization: '校级创新实验室', summary: '负责前后端架构、服务部署与项目演示。' },
    { period: '2023 — NOW', title: '计算机科学与技术', organization: '某某大学', summary: '主修数据结构、操作系统、数据库与软件工程。' },
  ],
  awards: [
    { period: '2025', title: '省级一等奖', organization: '大学生软件创新赛', summary: '负责产品架构与 AI 能力落地。' },
    { period: '2024', title: '校级创新项目', organization: '大学生创新创业计划', summary: '完成从原型到公开部署的闭环。' },
  ],
}

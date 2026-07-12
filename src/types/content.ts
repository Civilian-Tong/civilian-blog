/**
 *[INPUT]：依赖个人 Blog 规格中的作品、文章、动态与简历字段
 *[OUTPUT]：对外提供 Project、Article、TimelineEntry、Profile 等稳定类型
 *[POS]：types 模块的领域契约中心，被 content、features 与 app 共同消费
 *[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md
 */
export type ProjectCategory = 'AI' | 'Web' | 'RAG' | '智能体'
export type ProjectStatus = '在线' | '开发中' | '维护中' | '已归档'

export interface ProjectLink {
  label: string
  href: string
  kind: 'demo' | 'source' | 'docs'
}

export interface Project {
  slug: string
  title: string
  eyebrow: string
  summary: string
  category: ProjectCategory
  status: ProjectStatus
  stack: string[]
  featured: boolean
  index: string
  gradient: string
  metrics: { label: string; value: string }[]
  highlights: string[]
  challenge: string
  solution: string
  role: string
  links: ProjectLink[]
}

export interface ArticleSection {
  id: string
  title: string
  paragraphs: string[]
  code?: string
}

export interface Article {
  slug: string
  title: string
  excerpt: string
  category: string
  tags: string[]
  publishedAt: string
  readMinutes: number
  featured: boolean
  serial: string
  sections: ArticleSection[]
}

export interface TimelineEntry {
  id: string
  type: '开发' | '学习' | '比赛' | '思考'
  date: string
  title: string
  content: string
  tags: string[]
}

export interface Experience {
  period: string
  title: string
  organization: string
  summary: string
}

export interface Profile {
  name: string
  handle: string
  role: string
  school: string
  major: string
  intro: string
  location: string
  email: string
  availability: string
  skills: { group: string; items: string[] }[]
  experiences: Experience[]
  awards: Experience[]
}

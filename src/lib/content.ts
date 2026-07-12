/**
 *[INPUT]：依赖 types/content 的 Project 与 ProjectCategory 契约
 *[OUTPUT]：对外提供项目分类筛选与 slug 查询纯函数
 *[POS]：lib 模块的内容查询层，隔离页面与具体数据存储方式
 *[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md
 */
import type { Project, ProjectCategory } from '@/types/content'

export function filterProjects(items: Project[], category: ProjectCategory | '全部') {
  return category === '全部' ? items : items.filter((item) => item.category === category)
}

export function getProjectBySlug(items: Project[], slug: string) {
  return items.find((item) => item.slug === slug)
}

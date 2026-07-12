/**
 *[INPUT]：依赖待实现的项目内容数据与 content 查询函数
 *[OUTPUT]：验证分类筛选、slug 查找和无匹配输入的稳定契约
 *[POS]：lib 模块的内容查询回归测试，保护列表与详情页数据流
 *[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md
 */
import { describe, expect, it } from 'vitest'

import { projects } from '@/content/projects'

import { filterProjects, getProjectBySlug } from './content'

describe('project content', () => {
  it('按分类筛选项目', () => {
    const result = filterProjects(projects, 'AI')

    expect(result.length).toBeGreaterThan(0)
    expect(result.every((item) => item.category === 'AI')).toBe(true)
  })

  it('按 slug 查找项目', () => {
    expect(getProjectBySlug(projects, projects[0].slug)?.title).toBe(projects[0].title)
    expect(getProjectBySlug(projects, 'missing-project')).toBeUndefined()
  })
})

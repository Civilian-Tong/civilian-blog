/**
 *[INPUT]：依赖 Testing Library、projects 数据与待实现的 ProjectFilter
 *[OUTPUT]：验证用户切换分类后项目集合即时收敛
 *[POS]：projects 模块的筛选回归测试，保护作品索引核心交互
 *[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md
 */
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { projects } from '@/content/projects'

import { ProjectFilter } from './project-filter'

describe('ProjectFilter', () => {
  it('切换分类后只显示对应项目', () => {
    render(<ProjectFilter projects={projects} />)

    fireEvent.click(screen.getByRole('button', { name: 'AI' }))

    const cards = screen.getAllByTestId('project-card')
    expect(cards.length).toBeGreaterThan(0)
    expect(cards.every((card) => card.dataset.category === 'AI')).toBe(true)
  })
})

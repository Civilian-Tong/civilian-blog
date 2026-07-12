/**
 *[INPUT]：依赖 Testing Library 与待实现的 SiteHeader 组件
 *[OUTPUT]：验证核心导航、简历行动和移动菜单展开契约
 *[POS]：layout 模块的交互回归测试，保护全站唯一导航入口
 *[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md
 */
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { SiteHeader } from './site-header'

describe('SiteHeader', () => {
  it('展示公开栏目与管理入口', () => {
    render(<SiteHeader />)

    expect(screen.getAllByRole('link', { name: '作品集' })[0]).toHaveAttribute('href', '/projects')
    expect(screen.getAllByRole('link', { name: '个人动态' })[0]).toHaveAttribute('href', '/moments')
    expect(screen.getByRole('link', { name: '登录' })).toHaveAttribute('href', '/admin/login')
  })

  it('通过按钮展开移动导航', () => {
    render(<SiteHeader />)
    const toggle = screen.getByRole('button', { name: '打开导航' })

    fireEvent.click(toggle)

    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('navigation', { name: '移动导航' })).toBeInTheDocument()
  })
})

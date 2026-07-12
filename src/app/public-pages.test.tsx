/**
 *[INPUT]：依赖 Testing Library 与待实现的 AboutPage、TimelinePage
 *[OUTPUT]：验证关于页核心定位与动态页时间线内容
 *[POS]：app 模块的公开辅助页面回归测试，保护导航完整性
 *[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md
 */
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import AboutPage from './about/page'
import TimelinePage from './timeline/page'

describe('public pages', () => {
  it('关于页说明能力与成长路径', () => {
    render(<AboutPage />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('关于我')
    expect(screen.getByText('JOURNEY')).toBeInTheDocument()
  })

  it('动态页展示公开构建轨迹', () => {
    render(<TimelinePage />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('持续构建')
    expect(screen.getAllByRole('article').length).toBeGreaterThanOrEqual(6)
  })
})

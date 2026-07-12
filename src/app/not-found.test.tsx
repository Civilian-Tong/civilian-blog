/**
 *[INPUT]：依赖 Testing Library 与待实现的 NotFound 页面
 *[OUTPUT]：验证 404 说明、首页与作品恢复入口
 *[POS]：app 模块的错误边界回归测试，保护无效 slug 的退出路径
 *[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md
 */
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import NotFound from './not-found'

describe('NotFound', () => {
  it('解释错误并提供恢复入口', () => {
    render(<NotFound />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('坐标不存在')
    expect(screen.getByRole('link', { name: '返回首页' })).toHaveAttribute('href', '/')
    expect(screen.getByRole('link', { name: '浏览作品' })).toHaveAttribute('href', '/projects')
  })
})

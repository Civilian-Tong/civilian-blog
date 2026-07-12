/**
 *[INPUT]：依赖 Testing Library 与待实现的首页服务器组件
 *[OUTPUT]：验证首屏身份表达、作品入口与简历入口
 *[POS]：app 模块的首页回归测试，保护三十秒认知目标
 *[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md
 */
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import HomePage from './page'

describe('HomePage', () => {
  it('首屏展示个人世界文案与邮箱', () => {
    render(<HomePage />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('欢迎，来到我的世界。')
    expect(screen.getByText('归心自渡，自有荣光之处……')).toBeInTheDocument()
    expect(screen.getByText('3519501337@qq.com')).toBeInTheDocument()
  })

  it('串联代表项目、文章与近期动态', () => {
    render(<HomePage />)

    expect(screen.getByRole('heading', { name: '个人动态' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '精选作品' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '技术文章' })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /查看项目/ }).length).toBeGreaterThanOrEqual(3)
  })
})

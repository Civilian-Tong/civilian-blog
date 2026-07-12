/**
 *[INPUT]：依赖 Testing Library 与待实现的简历页面
 *[OUTPUT]：验证项目经历章节与 PDF 下载入口
 *[POS]：app/resume 的页面回归测试，保护求职场景核心信息
 *[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md
 */
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import ResumePage from './page'

describe('ResumePage', () => {
  it('展示项目经历和下载入口', () => {
    render(<ResumePage />)

    expect(screen.getByRole('heading', { name: '项目经历' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '下载 PDF 简历' })).toHaveAttribute('aria-disabled', 'true')
  })
})

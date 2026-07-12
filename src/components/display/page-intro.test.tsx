/**
 *[INPUT]：依赖 Testing Library 与 PageIntro
 *[OUTPUT]：验证侧注数组被渲染为独立文本行
 *[POS]：display 模块的页面首屏回归测试，防止布局转义字符泄漏给用户
 *[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md
 */
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { PageIntro } from './page-intro'

describe('PageIntro', () => {
  it('将侧注渲染成独立行', () => {
    render(<PageIntro index="01" eyebrow="TEST" title="标题" description="说明" note={['FILTER BY DOMAIN', 'STATUS WITH TEXT', 'STABLE ROUTING']} />)

    expect(screen.getAllByTestId('page-intro-note-line')).toHaveLength(3)
    expect(screen.queryByText(/\\A/)).not.toBeInTheDocument()
  })
})

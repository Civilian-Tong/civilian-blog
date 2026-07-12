/**
 *[INPUT]：依赖 Testing Library 与待实现的 ArticleBody
 *[OUTPUT]：验证文章章节、正文和代码块按语义结构渲染
 *[POS]：articles 模块的正文回归测试，保护长期阅读体验
 *[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md
 */
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { ArticleBody } from './article-body'

describe('ArticleBody', () => {
  it('按语义层级渲染文章章节', () => {
    render(<ArticleBody sections={[{ id: 'design', title: '设计取舍', paragraphs: ['保持数据单向流动。'], code: 'const direction = "forward"' }]} />)

    expect(screen.getByRole('heading', { level: 2, name: '设计取舍' })).toBeInTheDocument()
    expect(screen.getByText('保持数据单向流动。')).toBeInTheDocument()
    expect(screen.getByText('const direction = "forward"')).toBeInTheDocument()
  })
})

/**
 *[INPUT]：依赖 Vitest 与待实现的 cn 工具函数
 *[OUTPUT]：验证条件类名过滤和 Tailwind 冲突消解契约
 *[POS]：lib 模块的基础回归测试，保护所有组件的样式组合
 *[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md
 */
import { describe, expect, it } from 'vitest'

import { cn } from './cn'

describe('cn', () => {
  it('合并条件类名并消解 Tailwind 冲突', () => {
    expect(cn('px-2', false && 'hidden', 'px-4')).toBe('px-4')
  })
})

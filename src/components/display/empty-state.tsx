/**
 *[INPUT]：依赖 ReactNode、Container 与状态编号、标题、说明
 *[OUTPUT]：对外提供可复用 EmptyState 结构
 *[POS]：display 模块的异常与空内容原语，避免页面留下不可理解空白
 *[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md
 */
import type { ReactNode } from 'react'

import { Container } from '@/components/ui/container'

export function EmptyState({ code, title, description, actions }: { code: string; title: string; description: string; actions?: ReactNode }) {
  return (
    <section className="blueprint-grid grid min-h-[70vh] place-items-center py-20">
      <Container className="text-center"><p className="font-mono text-xs tracking-[.22em] text-[#075ee8]">ERROR / {code}</p><h1 className="font-display mt-5 text-5xl font-extrabold tracking-[-.065em] text-[#061f40] sm:text-7xl">{title}</h1><p className="mx-auto mt-6 max-w-xl text-base leading-8 text-[#5c7c9c]">{description}</p>{actions ? <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">{actions}</div> : null}</Container>
    </section>
  )
}

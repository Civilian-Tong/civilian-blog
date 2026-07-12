/**
 *[INPUT]：依赖 ReactNode 与简历章节编号、标题
 *[OUTPUT]：对外提供统一 ResumeSection 结构
 *[POS]：resume 模块的章节原语，保持履历阅读节奏一致
 *[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md
 */
import type { ReactNode } from 'react'

export function ResumeSection({ index, title, children }: { index: string; title: string; children: ReactNode }) {
  return (
    <section className="grid gap-5 border-t border-[#bcd0e5] py-8 md:grid-cols-[120px_1fr]">
      <p className="font-mono text-[9px] tracking-[.16em] text-[#718ba5]">{index}</p>
      <div><h2 className="font-display text-2xl font-extrabold tracking-[-.04em] text-[#092b51]">{title}</h2><div className="mt-6">{children}</div></div>
    </section>
  )
}

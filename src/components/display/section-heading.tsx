/**
 *[INPUT]：依赖 next/link、lucide-react 与可选分区文案
 *[OUTPUT]：对外提供带编号、说明和跳转入口的 SectionHeading
 *[POS]：display 模块的内容分区原语，统一首页与列表页层级
 *[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md
 */
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

interface SectionHeadingProps {
  index: string
  title: string
  description: string
  href?: string
  linkLabel?: string
}

export function SectionHeading({ index, title, description, href, linkLabel }: SectionHeadingProps) {
  return (
    <div className="grid gap-5 border-t border-white/12 pt-5 md:grid-cols-[140px_1fr_auto] md:items-end">
      <p className="font-mono text-[10px] tracking-[.18em] text-white/45">SECTION / {index}</p>
      <div>
        <h2 className="font-display text-3xl font-medium tracking-[-.055em] text-white sm:text-5xl">{title}</h2>
        <p className="mt-3 max-w-xl text-sm leading-7 text-white/60">{description}</p>
      </div>
      {href && linkLabel ? <Link href={href} className="group inline-flex items-center gap-2 text-sm text-[#cfe6e3]">{linkLabel}<ArrowUpRight className="size-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link> : null}
    </div>
  )
}

/**
 *[INPUT]：依赖 Container 与页面编号、标题、导语、可选侧注
 *[OUTPUT]：对外提供列表页和内容页统一的 PageIntro
 *[POS]：display 模块的页面首屏原语，建立蓝图工作台信息层级
 *[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md
 */
import { Container } from '@/components/ui/container'

interface PageIntroProps {
  index: string
  eyebrow: string
  title: string
  description: string
  note?: string[]
}

export function PageIntro({ index, eyebrow, title, description, note }: PageIntroProps) {
  return (
    <section className="blueprint-grid relative overflow-hidden border-b border-[#c5d9ef] py-16 sm:py-24">
      <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-[#cfe7ff]/50 to-transparent" />
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[140px_1fr_260px] lg:items-end">
          <p className="font-mono text-[10px] tracking-[.2em] text-[#6587aa]">INDEX / {index}</p>
          <div><p className="font-mono text-[10px] tracking-[.16em] text-[#075ee8]">{eyebrow}</p><h1 className="font-display mt-4 max-w-4xl text-balance text-5xl font-extrabold leading-[.98] tracking-[-.065em] text-[#061f40] sm:text-7xl">{title}</h1><p className="mt-6 max-w-2xl text-base leading-8 text-[#577797]">{description}</p></div>
          {note ? <p className="border-l border-[#91b7e3] pl-5 font-mono text-[10px] leading-6 tracking-[.08em] text-[#6888a8]">{note.map((line) => <span key={line} data-testid="page-intro-note-line" className="block">{line}</span>)}</p> : null}
        </div>
      </Container>
    </section>
  )
}

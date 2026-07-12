/**
 *[INPUT]：依赖 TimelineEntry 契约
 *[OUTPUT]：对外提供具有时间轴语义的 TimelineItem
 *[POS]：timeline 模块的列表核心视图，被首页与动态页消费
 *[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md
 */
import type { TimelineEntry } from '@/types/content'

export function TimelineItem({ entry }: { entry: TimelineEntry }) {
  return (
    <article className="grid gap-4 border-t border-white/10 py-7 md:grid-cols-[140px_110px_1fr] md:gap-6">
      <time className="font-mono text-[10px] tracking-[.12em] text-white/45">{entry.date.replaceAll('-', ' / ')}</time>
      <div><span className="border border-white/15 px-2.5 py-1 font-mono text-[9px] text-[#b7ddd8]">{entry.type}</span></div>
      <div>
        <h3 className="font-display text-xl font-medium tracking-[-.035em] text-white">{entry.title}</h3>
        <p className="mt-3 text-sm leading-7 text-white/65">{entry.content}</p>
        <div className="mt-3 flex gap-3 font-mono text-[9px] text-white/40">{entry.tags.map((tag) => <span key={tag}>#{tag}</span>)}</div>
      </div>
    </article>
  )
}

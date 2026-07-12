/**
 *[INPUT]：依赖 ArticleSection 契约
 *[OUTPUT]：对外提供章节标题、段落和代码块的 ArticleBody
 *[POS]：articles 模块的正文核心，保持内容结构与视觉排版分离
 *[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md
 */
import type { ArticleSection } from '@/types/content'

export function ArticleBody({ sections }: { sections: ArticleSection[] }) {
  return (
    <div className="min-w-0">
      {sections.map((section, index) => (
        <section key={section.id} id={section.id} className="scroll-mt-28 border-t border-[#c5d7ea] py-10 first:border-t-0 first:pt-0">
          <p className="font-mono text-[10px] tracking-[.16em] text-[#7592af]">{String(index + 1).padStart(2, '0')} / NOTE</p>
          <h2 className="font-display mt-4 text-3xl font-extrabold tracking-[-.05em] text-[#092d58]">{section.title}</h2>
          <div className="mt-6 space-y-5">{section.paragraphs.map((paragraph) => <p key={paragraph} className="text-base leading-9 text-[#496b8d]">{paragraph}</p>)}</div>
          {section.code ? <pre className="mt-7 overflow-x-auto rounded-[22px] border border-[#16395f] bg-[#061b36] p-5 text-sm leading-7 text-[#b9d9ff]"><code>{section.code}</code></pre> : null}
        </section>
      ))}
    </div>
  )
}

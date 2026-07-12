/**
 *[INPUT]：依赖 ArticleSection 契约
 *[OUTPUT]：对外提供锚点目录 ArticleToc
 *[POS]：articles 模块的桌面阅读导航，与 ArticleBody 共享章节 ID
 *[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md
 */
import type { ArticleSection } from '@/types/content'

export function ArticleToc({ sections }: { sections: ArticleSection[] }) {
  return (
    <nav aria-label="文章目录" className="sticky top-28 hidden self-start lg:block">
      <p className="font-mono text-[10px] tracking-[.16em] text-[#7793af]">ON THIS PAGE</p>
      <ol className="mt-5 space-y-3">{sections.map((section, index) => <li key={section.id}><a href={`#${section.id}`} className="group flex gap-3 text-sm leading-6 text-[#6c87a1] hover:text-[#075ee8]"><span className="font-mono text-[9px] text-[#9bb0c5]">0{index + 1}</span><span>{section.title}</span></a></li>)}</ol>
    </nav>
  )
}

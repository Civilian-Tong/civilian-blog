/**
 *[INPUT]：依赖 Article 契约、next/link 与 lucide-react
 *[OUTPUT]：对外提供可复用 ArticleCard，连接文章详情路由
 *[POS]：articles 模块的列表核心视图，被首页与文章页消费
 *[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md
 */
import { ArrowUpRight, Clock3 } from 'lucide-react'
import Link from 'next/link'

import type { Article } from '@/types/content'

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="group flex h-full flex-col border-t border-white/12 py-6 transition hover:border-[#b8d9d4]/55">
      <div className="flex items-center justify-between font-mono text-[10px] tracking-[.12em] text-white/45"><span>{article.serial} / {article.category}</span><span className="flex items-center gap-1"><Clock3 className="size-3" />{article.readMinutes} MIN</span></div>
      <h3 className="font-display mt-6 text-2xl font-medium leading-tight tracking-[-.045em] text-white transition group-hover:text-[#cfe6e3]">{article.title}</h3>
      <p className="mt-4 text-sm leading-7 text-white/60">{article.excerpt}</p>
      <div className="mt-5 flex flex-wrap gap-2">{article.tags.map((tag) => <span key={tag} className="font-mono text-[10px] text-white/40">#{tag}</span>)}</div>
      <Link href={`/articles/${article.slug}`} className="mt-auto flex items-center justify-between pt-8 text-sm text-[#cfe6e3]">阅读文章 <ArrowUpRight className="size-4 transition group-hover:-translate-y-1 group-hover:translate-x-1" /></Link>
    </article>
  )
}

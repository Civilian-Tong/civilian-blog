/**
 *[INPUT]：依赖 Next.js Metadata/notFound、articles 数据、ArticleBody 与 ArticleToc
 *[OUTPUT]：对外提供按 slug 静态生成的文章详情和动态 SEO
 *[POS]：app/articles 的动态叶子路由，承载长文阅读入口
 *[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md
 */
import { ArrowLeft, Clock3 } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { Container } from '@/components/ui/container'
import { articles } from '@/content/articles'
import { ArticleBody } from '@/features/articles/article-body'
import { ArticleToc } from '@/features/articles/article-toc'

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const article = articles.find((item) => item.slug === slug)
  return article ? { title: article.title, description: article.excerpt } : { title: '文章不存在' }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = articles.find((item) => item.slug === slug)
  if (!article) notFound()

  return (
    <article>
      <header className="content-atmosphere border-b border-white/10 py-28 sm:py-36">
        <Container>
          <Link href="/articles" className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[.12em] text-white/50 hover:text-[#cfe6e3]"><ArrowLeft className="size-3.5" />返回文章索引</Link>
          <div className="mt-12 max-w-4xl"><p className="font-mono text-[10px] tracking-[.16em] text-[#a8ccc7]">{article.serial} / {article.category}</p><h1 className="font-display mt-5 text-balance text-4xl font-medium leading-[1.06] tracking-[-.06em] text-white sm:text-6xl">{article.title}</h1><p className="mt-6 max-w-2xl text-base leading-8 text-white/65">{article.excerpt}</p><div className="mt-7 flex flex-wrap items-center gap-4 font-mono text-[10px] tracking-[.08em] text-white/45"><time>{article.publishedAt}</time><span className="flex items-center gap-1"><Clock3 className="size-3" />{article.readMinutes} MIN READ</span>{article.tags.map((tag) => <span key={tag}>#{tag}</span>)}</div></div>
        </Container>
      </header>
      <Container className="content-atmosphere grid gap-14 py-14 lg:grid-cols-[180px_minmax(0,720px)] lg:justify-center lg:py-20"><ArticleToc sections={article.sections} /><ArticleBody sections={article.sections} /></Container>
    </article>
  )
}

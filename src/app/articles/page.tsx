/**
 *[INPUT]：依赖 articles 内容、PageIntro、Container 与 ArticleCard
 *[OUTPUT]：对外提供文章索引页与 SEO 元数据
 *[POS]：app/articles 的列表路由，连接全局导航与长文阅读
 *[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md
 */
import type { Metadata } from 'next'

import { Container } from '@/components/ui/container'
import { PageIntro } from '@/components/display/page-intro'
import { articles } from '@/content/articles'
import { ArticleCard } from '@/features/articles/article-card'

export const metadata: Metadata = { title: '文章', description: '关于 AI 应用、Web 工程、产品设计与交付的实践文章。' }

export default function ArticlesPage() {
  return (
    <>
      <PageIntro index="03" eyebrow="FIELD NOTES / ENGINEERING" title="写下判断，而不只是答案。" description="这里记录架构取舍、失败路径和从真实项目里提炼出的工程方法。" note={['LONG-FORM NOTES', 'STRUCTURED CONTENT', 'EVIDENCE OVER OPINION']} />
      <Container className="py-14 sm:py-20"><div className="grid gap-x-9 md:grid-cols-2 lg:grid-cols-3">{articles.map((article) => <ArticleCard key={article.slug} article={article} />)}</div></Container>
    </>
  )
}

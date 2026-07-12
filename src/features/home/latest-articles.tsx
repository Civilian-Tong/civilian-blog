/**
 *[INPUT]：依赖 articles 数据、ArticleCard、SectionHeading 与 Container
 *[OUTPUT]：对外提供首页近期文章分区
 *[POS]：home 模块的思考证据层，连接项目实践与技术表达
 *[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md
 */
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/display/section-heading'
import { articles } from '@/content/articles'
import { ArticleCard } from '@/features/articles/article-card'

export function LatestArticles() {
  return (
    <section aria-label="技术文章" className="theme-writing py-20 sm:py-28">
      <Container>
        <SectionHeading index="03" title="技术文章" description="记录设计取舍、失败路径和能复用的工程方法。" href="/articles" linkLabel="进入文章索引" />
        <div className="mt-10 grid gap-x-8 md:grid-cols-3">{articles.slice(0, 3).map((article) => <ArticleCard key={article.slug} article={article} />)}</div>
      </Container>
    </section>
  )
}

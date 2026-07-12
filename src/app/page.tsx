/**
 *[INPUT]：依赖 home/Hero 的身份与行动首屏
 *[OUTPUT]：对外提供根路由首页服务器组件
 *[POS]：app 模块的首页组合入口，后续串联作品、文章与动态分区
 *[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md
 */
import { Hero } from '@/features/home/hero'
import { FeaturedProjects } from '@/features/home/featured-projects'
import { LatestArticles } from '@/features/home/latest-articles'
import { RecentTimeline } from '@/features/home/recent-timeline'

export default function HomePage() {
  return (
    <div id="content">
      <Hero />
      <RecentTimeline />
      <FeaturedProjects />
      <LatestArticles />
    </div>
  )
}

/**
 *[INPUT]：依赖 timeline 数据、TimelineItem、SectionHeading 与 Container
 *[OUTPUT]：对外提供首页近期构建日志分区
 *[POS]：home 模块的持续成长层，证明长期学习与交付节奏
 *[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md
 */
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/display/section-heading'
import { timeline } from '@/content/timeline'
import { TimelineItem } from '@/features/timeline/timeline-item'

export function RecentTimeline() {
  return (
    <section aria-label="个人动态" className="theme-moments py-20 sm:py-28">
      <Container>
        <SectionHeading index="01" title="个人动态" description="生活、创造与偶然留下的片段。" href="/moments" linkLabel="查看全部动态" />
        <div className="mt-10 border-y border-white/10 px-1 sm:px-5">{timeline.slice(0, 3).map((entry) => <TimelineItem key={entry.id} entry={entry} />)}</div>
      </Container>
    </section>
  )
}

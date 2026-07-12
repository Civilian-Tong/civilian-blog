/**
 *[INPUT]：依赖 timeline 内容、PageIntro、Container 与 TimelineItem
 *[OUTPUT]：对外提供完整构建日志页面与 SEO 元数据
 *[POS]：app/timeline 的页面入口，公开持续学习与交付轨迹
 *[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md
 */
import type { Metadata } from 'next'

import { Container } from '@/components/ui/container'
import { PageIntro } from '@/components/display/page-intro'
import { timeline } from '@/content/timeline'
import { TimelineItem } from '@/features/timeline/timeline-item'

export const metadata: Metadata = { title: '构建日志', description: '开发、学习、比赛与思考的公开时间线。' }

export default function TimelinePage() {
  return (
    <>
      <PageIntro index="04" eyebrow="BUILD LOG / CONTINUOUS" title="持续构建，也持续校准方向。" description="这是项目进展、学习记录、比赛复盘和阶段判断的公开时间线。短，但保持真实。" note={['LATEST FIRST', 'NO SOCIAL METRICS', 'PROGRESS OVER PERFORMANCE']} />
      <Container className="py-14 sm:py-20"><div className="rounded-[30px] border border-[#bdd4eb] bg-white px-5 shadow-[0_20px_60px_rgba(25,79,141,.08)] sm:px-9">{timeline.map((entry) => <TimelineItem key={entry.id} entry={entry} />)}</div></Container>
    </>
  )
}

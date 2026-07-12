/**
 *[INPUT]：依赖 projects 内容、PageIntro、Container 与 ProjectFilter
 *[OUTPUT]：对外提供可分类浏览的作品索引页与 SEO 元数据
 *[POS]：app/projects 的列表路由，连接全局导航和项目详情
 *[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md
 */
import type { Metadata } from 'next'

import { Container } from '@/components/ui/container'
import { PageIntro } from '@/components/display/page-intro'
import { projects } from '@/content/projects'
import { ProjectFilter } from '@/features/projects/project-filter'

export const metadata: Metadata = { title: '作品集', description: 'Web、AI、RAG 与智能体项目的完整作品索引。' }

export default function ProjectsPage() {
  return (
    <>
      <PageIntro index="02" eyebrow="SELECTED WORK / 2023—2026" title="作品不是截图，是真实问题的解法。" description="每个项目都记录问题、判断、我的职责与可验证结果。选择一个方向，查看完整证据。" note={['FILTER BY DOMAIN', 'STATUS IS SHOWN WITH TEXT', 'STABLE SLUG ROUTING']} />
      <Container className="py-14 sm:py-20"><ProjectFilter projects={projects} /></Container>
    </>
  )
}

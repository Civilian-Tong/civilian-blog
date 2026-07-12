/**
 *[INPUT]：依赖 Next.js notFound/Metadata、projects 数据与 ProjectDetail
 *[OUTPUT]：对外提供按 slug 静态生成的项目详情与动态 SEO
 *[POS]：app/projects 的动态叶子路由，无效输入统一进入全局 404
 *[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md
 */
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { projects } from '@/content/projects'
import { ProjectDetail } from '@/features/projects/project-detail'
import { getProjectBySlug } from '@/lib/content'

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const project = getProjectBySlug(projects, (await params).slug)
  return project ? { title: project.title, description: project.summary } : { title: '项目不存在' }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProjectBySlug(projects, (await params).slug)
  if (!project) notFound()
  return <ProjectDetail project={project} />
}

/**
 *[INPUT]：依赖 Project 契约、StatusBadge、TechBadge 与 next/link
 *[OUTPUT]：对外提供可复用 ProjectCard，连接项目详情路由
 *[POS]：projects 模块的列表核心视图，被首页和作品页消费
 *[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md
 */
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

import { StatusBadge } from '@/components/display/status-badge'
import { TechBadge } from '@/components/display/tech-badge'
import type { Project } from '@/types/content'

export function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  return (
    <article data-testid="project-card" data-category={project.category} className={`group relative overflow-hidden border border-white/12 bg-white/[.035] transition duration-500 hover:-translate-y-1 hover:border-[#b8d9d4]/45 ${priority ? 'md:col-span-2 lg:grid lg:grid-cols-[.88fr_1.12fr]' : ''}`}>
      <div className={`relative min-h-52 overflow-hidden bg-gradient-to-br ${project.gradient} p-6 text-white ${priority ? 'lg:min-h-[360px]' : ''}`}>
        <div className="absolute -bottom-16 -right-12 size-56 rounded-full border border-white/25" />
        <div className="absolute -bottom-6 -right-4 size-32 rounded-full border border-white/30" />
        <div className="relative flex items-start justify-between"><span className="font-mono text-xs tracking-[.16em] text-white/80">{project.index}</span><span className="font-mono text-[9px] tracking-[.14em] text-white/75">{project.eyebrow}</span></div>
        <p className="font-display absolute bottom-6 left-6 max-w-[80%] text-3xl font-extrabold tracking-[-.06em] sm:text-4xl">{project.title}</p>
      </div>
      <div className="flex min-h-64 flex-col p-6 sm:p-7">
        <div className="flex items-center justify-between gap-3"><StatusBadge status={project.status} /><span className="font-mono text-[10px] text-white/45">{project.category}</span></div>
        <p className="mt-5 text-sm leading-7 text-white/65">{project.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">{project.stack.slice(0, 4).map((item) => <TechBadge key={item}>{item}</TechBadge>)}</div>
        <Link href={`/projects/${project.slug}`} aria-label={`查看项目：${project.title}`} className="mt-auto flex items-center justify-between border-t border-white/10 pt-5 text-sm text-[#cfe6e3]">
          查看项目 <ArrowUpRight className="size-4 transition group-hover:-translate-y-1 group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  )
}

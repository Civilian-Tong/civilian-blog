/**
 *[INPUT]：依赖 React 状态、Project 数据、filterProjects 纯函数与 ProjectCard
 *[OUTPUT]：对外提供可键盘操作的项目分类筛选和结果网格
 *[POS]：projects 模块的列表交互中心，只持有当前分类这一项局部状态
 *[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md
 */
'use client'

import { useState } from 'react'

import { filterProjects } from '@/lib/content'
import type { Project, ProjectCategory } from '@/types/content'

import { ProjectCard } from './project-card'

const categories: (ProjectCategory | '全部')[] = ['全部', 'AI', 'Web', 'RAG', '智能体']

export function ProjectFilter({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<ProjectCategory | '全部'>('全部')
  const visible = filterProjects(projects, active)

  return (
    <div>
      <div className="flex flex-wrap gap-2" aria-label="项目分类">
        {categories.map((category) => (
          <button key={category} type="button" aria-pressed={active === category} onClick={() => setActive(category)} className={`min-h-10 rounded-full border px-4 font-mono text-[10px] font-semibold tracking-[.08em] transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#075ee8] ${active === category ? 'border-[#075ee8] bg-[#075ee8] text-white' : 'border-[#bfd4ec] bg-white text-[#52779d] hover:border-[#6ea5e7]'}`}>{category}</button>
        ))}
      </div>
      <p aria-live="polite" className="mt-6 font-mono text-[10px] tracking-[.12em] text-[#7794b2]">SHOWING {String(visible.length).padStart(2, '0')} / {String(projects.length).padStart(2, '0')} PROJECTS</p>
      <div className="mt-8 grid gap-5 md:grid-cols-2">{visible.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
    </div>
  )
}

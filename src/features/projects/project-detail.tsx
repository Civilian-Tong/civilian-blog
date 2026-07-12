/**
 *[INPUT]：依赖 Project 契约、Container、StatusBadge、TechBadge 与图标
 *[OUTPUT]：对外提供项目详情的证据首屏、指标、问题、方案与职责视图
 *[POS]：projects 模块的详情核心，被项目 slug 路由消费
 *[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md
 */
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

import { Container } from '@/components/ui/container'
import { StatusBadge } from '@/components/display/status-badge'
import type { Project } from '@/types/content'

export function ProjectDetail({ project }: { project: Project }) {
  return (
    <>
      <section className={`relative overflow-hidden bg-gradient-to-br ${project.gradient} py-16 text-white sm:py-24`}>
        <div className="blueprint-grid absolute inset-0 opacity-30" />
        <Container className="relative">
          <Link href="/projects" className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[.12em] text-white/75 hover:text-white"><ArrowLeft className="size-3.5" />返回作品集</Link>
          <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_340px] lg:items-end">
            <div><p className="font-mono text-xs tracking-[.18em] text-white/75">{project.index} / {project.eyebrow}</p><h1 className="font-display mt-5 text-balance text-5xl font-extrabold leading-[.95] tracking-[-.07em] sm:text-7xl">{project.title}</h1><p className="mt-7 max-w-3xl text-base leading-8 text-white/82 sm:text-lg">{project.summary}</p></div>
            <div className="rounded-[28px] border border-white/25 bg-white/12 p-5 backdrop-blur-md"><div className="flex items-center justify-between"><StatusBadge status={project.status} /><span className="font-mono text-[10px] text-white/70">{project.category}</span></div><div className="mt-5 flex flex-wrap gap-2">{project.stack.map((item) => <span key={item} className="rounded-full border border-white/25 px-2.5 py-1 font-mono text-[9px] text-white/90">{item}</span>)}</div></div>
          </div>
        </Container>
      </section>

      <Container className="py-16 sm:py-24">
        <div className="grid gap-4 sm:grid-cols-3">{project.metrics.map((metric) => <div key={metric.label} className="rounded-[24px] border border-[#c5d9ef] bg-white p-6"><p className="font-mono text-[9px] tracking-[.14em] text-[#7894b2]">{metric.label}</p><p className="font-display mt-3 text-3xl font-extrabold tracking-[-.05em] text-[#075ee8]">{metric.value}</p></div>)}</div>
        <div className="mt-16 grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <aside><p className="font-mono text-[10px] tracking-[.18em] text-[#7592b0]">PROJECT EVIDENCE</p><h2 className="font-display mt-4 text-3xl font-extrabold tracking-[-.05em] text-[#082a55]">不是功能堆叠，<br />而是问题闭环。</h2><div className="mt-8 space-y-3">{project.highlights.map((item) => <p key={item} className="flex items-center gap-3 text-sm font-semibold text-[#41688f]"><CheckCircle2 className="size-4 text-[#075ee8]" />{item}</p>)}</div></aside>
          <div className="space-y-10">
            {[['01 / CHALLENGE', '问题', project.challenge], ['02 / SOLUTION', '方案', project.solution], ['03 / ROLE', '我的职责', project.role]].map(([label, title, text]) => <section key={label} className="border-t border-[#bcd3eb] pt-5"><p className="font-mono text-[9px] tracking-[.14em] text-[#7290ad]">{label}</p><h2 className="font-display mt-4 text-2xl font-bold tracking-[-.04em] text-[#0b315e]">{title}</h2><p className="mt-4 text-base leading-8 text-[#5d7c9a]">{text}</p></section>)}
            <div className="flex flex-wrap gap-3">{project.links.map((link) => link.href === '#' ? <span key={link.label} className="inline-flex items-center gap-2 rounded-full border border-[#c5d7e9] bg-[#f2f6fa] px-5 py-3 text-sm font-semibold text-[#7a8d9f]" title="示例内容暂未提供真实链接">{link.label} · 即将开放</span> : <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#075ee8] px-5 py-3 text-sm font-semibold text-white">{link.label}<ArrowUpRight className="size-4" /></a>)}</div>
          </div>
        </div>
      </Container>
    </>
  )
}

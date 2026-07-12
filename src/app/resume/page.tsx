/**
 *[INPUT]：依赖 profile、projects、Container、ResumeSection 与 ResumeActions
 *[OUTPUT]：对外提供响应式、可打印的在线简历与 SEO 元数据
 *[POS]：app/resume 的页面入口，为求职访客提供高密度能力证据
 *[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md
 */
import { Mail, MapPin } from 'lucide-react'
import type { Metadata } from 'next'

import { Container } from '@/components/ui/container'
import { profile } from '@/content/profile'
import { projects } from '@/content/projects'
import { ResumeActions } from '@/features/resume/resume-actions'
import { ResumeSection } from '@/features/resume/resume-section'

export const metadata: Metadata = { title: '在线简历', description: '林峰的技术能力、项目经历、教育经历与获奖信息。' }

export default function ResumePage() {
  return (
    <div className="bg-[#eef6ff] py-10 sm:py-16 print:bg-white print:py-0">
      <Container className="max-w-[980px]">
        <div className="overflow-hidden rounded-[32px] border border-[#b9d1e9] bg-white shadow-[0_30px_90px_rgba(25,77,138,.13)] print:rounded-none print:border-0 print:shadow-none">
          <header className="blueprint-grid border-b border-[#bed3e8] p-7 sm:p-10">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="font-mono text-[10px] tracking-[.18em] text-[#075ee8]">RESUME / 2026</p><h1 className="font-display mt-4 text-5xl font-extrabold tracking-[-.065em] text-[#061f40]">{profile.name}</h1><p className="mt-3 text-lg font-semibold text-[#37628d]">{profile.role}</p></div><ResumeActions /></div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs text-[#66819c]"><span className="flex items-center gap-1.5"><MapPin className="size-3.5" />{profile.location}</span><a href={`mailto:${profile.email}`} className="flex items-center gap-1.5"><Mail className="size-3.5" />{profile.email}</a><span>{profile.school} · {profile.major}</span></div>
          </header>

          <div className="p-7 sm:p-10">
            <ResumeSection index="01 / PROFILE" title="个人简介"><p className="max-w-3xl text-sm leading-8 text-[#567490]">{profile.intro} {profile.availability}。</p></ResumeSection>
            <ResumeSection index="02 / SKILLS" title="技术能力"><div className="grid gap-5 sm:grid-cols-2">{profile.skills.map((skill) => <div key={skill.group}><p className="font-mono text-[10px] font-semibold text-[#075ee8]">{skill.group}</p><p className="mt-2 text-sm leading-7 text-[#5d7894]">{skill.items.join(' · ')}</p></div>)}</div></ResumeSection>
            <ResumeSection index="03 / WORK" title="项目经历"><div className="space-y-8">{projects.slice(0, 3).map((project) => <article key={project.slug}><div className="flex flex-wrap items-baseline justify-between gap-2"><h3 className="font-display text-lg font-bold text-[#0b315c]">{project.title}</h3><span className="font-mono text-[9px] text-[#7991a8]">{project.category} / {project.status}</span></div><p className="mt-2 text-sm leading-7 text-[#607b96]">{project.summary}</p><p className="mt-2 text-xs font-semibold text-[#3e648a]">{project.role}</p></article>)}</div></ResumeSection>
            <ResumeSection index="04 / JOURNEY" title="教育与经历"><div className="space-y-7">{profile.experiences.map((item) => <article key={item.title} className="grid gap-2 sm:grid-cols-[120px_1fr]"><time className="font-mono text-[9px] text-[#7891aa]">{item.period}</time><div><h3 className="font-bold text-[#173d66]">{item.title} · {item.organization}</h3><p className="mt-1 text-sm leading-7 text-[#607c98]">{item.summary}</p></div></article>)}</div></ResumeSection>
            <ResumeSection index="05 / AWARDS" title="比赛与荣誉"><div className="space-y-6">{profile.awards.map((item) => <article key={item.title} className="grid gap-2 sm:grid-cols-[120px_1fr]"><time className="font-mono text-[9px] text-[#7891aa]">{item.period}</time><div><h3 className="font-bold text-[#173d66]">{item.title} · {item.organization}</h3><p className="mt-1 text-sm leading-7 text-[#607c98]">{item.summary}</p></div></article>)}</div></ResumeSection>
          </div>
        </div>
      </Container>
    </div>
  )
}

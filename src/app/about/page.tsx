/**
 *[INPUT]：依赖 profile、projects、Container 与站点暗色视觉令牌
 *[OUTPUT]：提供兼具个人介绍与在线简历职责的关于我页面
 *[POS]：app/about 的公开个人档案入口，取代旧求职导向页面
 *[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md
 */
import { Github, Mail } from 'lucide-react'

import { Container } from '@/components/ui/container'
import { profile } from '@/content/profile'
import { projects } from '@/content/projects'

export default function AboutPage() {
  return (
    <main className="theme-about min-h-screen pt-32">
      <Container className="max-w-5xl pb-24">
        <p className="font-mono text-xs tracking-[.2em] text-[#a8ccc7]">ABOUT / CIVILIAN_BLOG</p>
        <h1 className="mt-5 text-5xl font-medium tracking-[-.07em] sm:text-7xl">关于我</h1>
        <p className="mt-7 max-w-2xl text-lg leading-9 text-white/65">{profile.intro}</p>

        <section className="mt-20 grid gap-10 border-t border-white/12 pt-8 md:grid-cols-[180px_1fr]">
          <p className="font-mono text-xs tracking-[.16em] text-white/45">SKILLS</p>
          <div className="grid gap-6 sm:grid-cols-2">{profile.skills.map((skill) => <div key={skill.group}><h2 className="text-lg text-white">{skill.group}</h2><p className="mt-2 text-sm leading-7 text-white/55">{skill.items.join(' · ')}</p></div>)}</div>
        </section>

        <section className="mt-16 grid gap-10 border-t border-white/12 pt-8 md:grid-cols-[180px_1fr]">
          <p className="font-mono text-xs tracking-[.16em] text-white/45">JOURNEY</p>
          <div className="space-y-8">{profile.experiences.map((item) => <article key={item.title}><time className="font-mono text-xs text-[#a8ccc7]">{item.period}</time><h2 className="mt-2 text-xl text-white">{item.title} · {item.organization}</h2><p className="mt-2 leading-7 text-white/60">{item.summary}</p></article>)}</div>
        </section>

        <section className="mt-16 grid gap-10 border-t border-white/12 pt-8 md:grid-cols-[180px_1fr]">
          <p className="font-mono text-xs tracking-[.16em] text-white/45">SELECTED WORK</p>
          <div className="space-y-5">{projects.filter((project) => project.featured).slice(0, 3).map((project) => <article key={project.slug}><h2 className="text-xl text-white">{project.title}</h2><p className="mt-2 leading-7 text-white/60">{project.summary}</p></article>)}</div>
        </section>

        <div className="mt-16 flex flex-wrap gap-5 border-t border-white/12 pt-8 text-sm text-white/70"><a className="flex items-center gap-2 hover:text-[#cfe6e3]" href={`mailto:${profile.email}`}><Mail className="size-4" />{profile.email}</a><a className="flex items-center gap-2 hover:text-[#cfe6e3]" href="https://github.com" target="_blank" rel="noreferrer"><Github className="size-4" />GitHub</a></div>
      </Container>
    </main>
  )
}

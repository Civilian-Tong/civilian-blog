/**
 *[INPUT]：依赖 next/link、lucide-react 与 Container
 *[OUTPUT]：对外提供联系行动、路由索引与版权信息 SiteFooter
 *[POS]：layout 模块的底部外壳，被根布局挂载并收束页面叙事
 *[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md
 */
import { ArrowUpRight, Mail } from 'lucide-react'
import Link from 'next/link'

import { Container } from '@/components/ui/container'
import { site } from '@/content/site'

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#0c1011] text-white print:hidden">
      <Container className="py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-end">
          <div>
            <p className="font-mono text-[11px] tracking-[.22em] text-[#a8ccc7]">CIVILIAN_BLOG / END OF PAGE</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-medium tracking-[-.05em] sm:text-5xl">故事还在继续，<br />感谢你来到这里。</h2>
          </div>
          <div className="flex flex-col gap-3 lg:items-end">
            <a href={`mailto:${site.email}`} className="group flex items-center gap-2 text-lg text-[#dfecea] hover:text-white"><Mail className="size-4" /> {site.email} <ArrowUpRight className="size-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {site.name}</p>
          <div className="flex gap-5"><Link href="/projects">作品集</Link><Link href="/moments">个人动态</Link><Link href="/about">关于我</Link></div>
        </div>
      </Container>
    </footer>
  )
}

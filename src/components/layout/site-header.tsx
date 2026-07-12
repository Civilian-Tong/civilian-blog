/**
 *[INPUT]：依赖 React 状态、next/link、lucide-react、Container 与 MobileNav
 *[OUTPUT]：对外提供全站唯一 SiteHeader 与响应式导航交互
 *[POS]：layout 模块的顶部外壳，被根布局挂载并服务所有公开页面
 *[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md
 */
'use client'

import { Menu, Search, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

import { Container } from '@/components/ui/container'

import { MobileNav, type NavItem } from './mobile-nav'

const navItems: NavItem[] = [
  { label: '作品集', href: '/projects' },
  { label: '个人动态', href: '/moments' },
  { label: '技术文章', href: '/articles' },
  { label: '留言板', href: '/guestbook' },
  { label: '关于我', href: '/about' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#111617]/35 text-white backdrop-blur-md print:hidden">
      <Container className="relative flex h-[68px] items-center justify-between">
        <Link href="/" className="group flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
          <span className="size-2 rounded-full bg-[#cfe6e3] shadow-[0_0_14px_#cfe6e3]" />
          <span className="text-[15px] font-semibold tracking-[-.03em]">Civilian_blog</span>
        </Link>

        <nav aria-label="主导航" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="px-3 py-2 text-sm text-white/75 transition hover:text-white focus-visible:outline-2 focus-visible:outline-white">{item.label}</Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button aria-label="搜索" type="button" className="grid size-9 place-items-center rounded-full text-white/80 hover:bg-white/10 hover:text-white"><Search className="size-4" /></button>
          <Link href="/admin/login" className="border border-white/25 px-3 py-1.5 text-xs text-white/90 transition hover:bg-white hover:text-[#111617]">登录</Link>
        </div>

        <button
          type="button"
          aria-label={open ? '关闭导航' : '打开导航'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="grid size-11 place-items-center rounded-full border border-white/20 bg-black/15 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
        {open ? <MobileNav items={navItems} onClose={() => setOpen(false)} /> : null}
      </Container>
    </header>
  )
}

/**
 *[INPUT]：依赖 next/link、lucide-react 图标与由 SiteHeader 管理的关闭回调
 *[OUTPUT]：对外提供移动端导航面板 MobileNav
 *[POS]：layout 模块的窄屏导航视图，与桌面导航共享链接数据
 *[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md
 */
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

export interface NavItem {
  label: string
  href: string
}

interface MobileNavProps {
  items: NavItem[]
  onClose: () => void
}

export function MobileNav({ items, onClose }: MobileNavProps) {
  return (
    <nav aria-label="移动导航" className="absolute left-4 right-4 top-[72px] overflow-hidden border border-white/15 bg-[#151b1c]/95 p-3 shadow-[0_24px_80px_rgba(0,0,0,.35)] backdrop-blur-xl md:hidden">
      <div className="grid">
        {items.map((item, index) => (
          <Link key={item.href} href={item.href} onClick={onClose} className="group flex items-center justify-between px-4 py-3.5 text-base text-white/85 hover:bg-white/10">
            <span><span className="mr-3 font-mono text-xs text-white/40">0{index + 1}</span>{item.label}</span>
            <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        ))}
      </div>
      <Link href="/admin/login" onClick={onClose} className="mt-2 flex items-center justify-center border border-white/20 px-4 py-3.5 text-sm text-white">登录管理后台</Link>
    </nav>
  )
}

/**
 *[INPUT]：依赖 next/link、ReactNode 与 lib/cn
 *[OUTPUT]：对外提供 primary、secondary、ghost 三种链接按钮
 *[POS]：ui 模块的行动原语，统一全站可见焦点和交互反馈
 *[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md
 */
import Link from 'next/link'
import type { ReactNode } from 'react'

import { cn } from '@/lib/cn'

const variants = {
  primary: 'bg-[#075ee8] text-white shadow-[0_12px_32px_rgba(7,94,232,.26)] hover:-translate-y-0.5 hover:bg-[#064fc5]',
  secondary: 'border border-[#aac9f7] bg-white/80 text-[#073271] hover:-translate-y-0.5 hover:border-[#5c9dff] hover:bg-white',
  ghost: 'text-[#174477] hover:bg-[#eaf3ff]',
}

interface ButtonLinkProps {
  href: string
  children: ReactNode
  variant?: keyof typeof variants
  className?: string
  external?: boolean
}

export function ButtonLink({ href, children, variant = 'primary', className, external = false }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn('inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#075ee8]', variants[variant], className)}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      {children}
    </Link>
  )
}

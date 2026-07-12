/**
 *[INPUT]：依赖 Next.js Metadata、全局样式、SiteHeader 与 SiteFooter
 *[OUTPUT]：对外提供中文根文档、SEO 基线与全站外壳
 *[POS]：app 模块的根布局，包裹所有公开路由
 *[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md
 */
import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import { SiteFooter } from '@/components/layout/site-footer'
import { SiteHeader } from '@/components/layout/site-header'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: { default: 'Civilian_blog', template: '%s · Civilian_blog' },
  description: 'Civilian_blog 的个人动态、作品、技术文章与在线简历。',
  openGraph: { title: 'Civilian_blog', description: '欢迎，来到我的世界。', type: 'website', locale: 'zh_CN' },
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="zh-CN" data-scroll-behavior="smooth">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}

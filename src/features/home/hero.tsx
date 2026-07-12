/**
 *[INPUT]：依赖 profile 数据、ButtonLink、Container 与 lucide-react 图标
 *[OUTPUT]：对外提供首页 Hero 身份陈述、核心行动与能力坐标
 *[POS]：home 模块的首屏入口，承担三十秒认知目标的第一层
 *[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md
 */
import { ArrowDown } from 'lucide-react'

import { site } from '@/content/site'

export function Hero() {
  return (
    <section aria-label="欢迎" className="hero-motion relative isolate grid min-h-svh place-items-center overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${site.hero.imageSrc})`, backgroundPosition: site.hero.focalPoint }}>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,8,.16),rgba(5,8,8,.42)_58%,#111617)]" />
      <div className="relative mx-auto max-w-4xl px-6 pt-24 text-center text-white">
        <p className="reveal-up font-mono text-[11px] tracking-[.22em] text-white/75">{site.name.toUpperCase()}</p>
        <h1 className="reveal-up delay-1 mt-6 text-balance text-5xl font-medium tracking-[-.07em] drop-shadow-[0_4px_20px_rgba(0,0,0,.55)] sm:text-7xl lg:text-8xl">{site.welcome}</h1>
        <p className="reveal-up delay-2 mt-7 text-base tracking-[.08em] text-white/85 sm:text-lg">{site.motto}</p>
        <a className="reveal-up delay-3 mt-10 inline-block font-mono text-xs tracking-[.12em] text-white/80 transition hover:text-white" href={`mailto:${site.email}`}>{site.email}</a>
      </div>
      <a href="#content" aria-label="向下探索" className="absolute bottom-7 text-white/80"><ArrowDown className="size-5 animate-bounce" /></a>
    </section>
  )
}

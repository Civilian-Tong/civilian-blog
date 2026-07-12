/**
 *[INPUT]：依赖现有动态内容与 Container
 *[OUTPUT]：提供个人动态公开入口
 *[POS]：app/moments 的列表页，后续替换旧 timeline 路由
 *[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md
 */
import { Container } from '@/components/ui/container'
import { timeline } from '@/content/timeline'

export default function MomentsPage() {
  return <section className="theme-moments min-h-screen pt-32"><Container className="max-w-3xl pb-24"><p className="font-mono text-xs tracking-[.2em] text-[#e6aaa9]">PERSONAL MOMENTS</p><h1 className="mt-5 text-5xl tracking-[-.06em]">个人动态</h1><p className="mt-5 text-white/65">记录生活、创造与偶然留下的片段。</p><div className="mt-14 space-y-10">{timeline.map((entry) => <article key={entry.id} className="border-b border-white/10 pb-9"><time className="font-mono text-xs text-white/45">{entry.date}</time><h2 className="mt-3 text-2xl">{entry.title}</h2><p className="mt-3 leading-8 text-white/65">{entry.content}</p></article>)}</div></Container></section>
}

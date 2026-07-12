/**
 *[INPUT]：依赖 Container
 *[OUTPUT]：提供公开留言板入口
 *[POS]：app/guestbook 的互动页面壳，等待后台接入持久化
 *[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md
 */
import { Container } from '@/components/ui/container'

export default function GuestbookPage() {
  return <section className="content-atmosphere min-h-screen pt-32"><Container className="max-w-3xl pb-24"><p className="font-mono text-xs tracking-[.2em] text-[#a8ccc7]">GUESTBOOK</p><h1 className="mt-5 text-5xl tracking-[-.06em]">留言板</h1><p className="mt-5 text-white/65">这个世界，也留一个位置给你。</p><div className="mt-14 border border-white/15 bg-white/5 p-6 text-sm leading-7 text-white/60">公开留言、隐藏与删除功能将在管理后台接入后开放。</div></Container></section>
}

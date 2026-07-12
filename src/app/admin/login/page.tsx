/**
 *[INPUT]：依赖公开前台全局视觉
 *[OUTPUT]：提供管理后台登录入口壳
 *[POS]：app/admin/login 的私有入口，等待认证服务接入
 *[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md
 */
export default function AdminLoginPage() {
  return <main className="content-atmosphere grid min-h-screen place-items-center px-6"><form className="w-full max-w-sm border border-white/15 bg-black/15 p-8"><p className="font-mono text-xs tracking-[.2em] text-[#a8ccc7]">CIVILIAN_BLOG / ADMIN</p><h1 className="mt-5 text-3xl">管理后台</h1><p className="mt-3 text-sm text-white/60">仅站长可用。认证服务正在接入。</p><label className="mt-8 block text-sm">邮箱<input aria-label="邮箱" className="mt-2 w-full border border-white/15 bg-white/5 p-3 text-white" type="email" /></label><label className="mt-4 block text-sm">密码<input aria-label="密码" className="mt-2 w-full border border-white/15 bg-white/5 p-3 text-white" type="password" /></label><button className="mt-6 w-full bg-[#cfe6e3] p-3 text-sm text-[#102020]" type="button">登录</button></form></main>
}

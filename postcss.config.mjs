/**
 *[INPUT]：依赖 @tailwindcss/postcss 的 CSS 编译能力
 *[OUTPUT]：对外提供 Next.js PostCSS 插件配置
 *[POS]：样式构建链入口，将 Tailwind CSS 4 接入 Next.js
 *[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md
 */
const postcssConfig = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}

export default postcssConfig

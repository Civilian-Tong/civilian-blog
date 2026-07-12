/**
 *[INPUT]：依赖 Next.js 的配置类型
 *[OUTPUT]：对外提供生产构建、图片格式与严格模式配置
 *[POS]：项目根部的 Next.js 构建入口，约束所有公开页面
 *[PROTOCOL]：变更时更新此头部，然后检查 AGENTS.md
 */
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ['127.0.0.1'],
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig

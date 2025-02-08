/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // Remove the invalid options
    // parallelServerBuildTraces: true,
    // parallelServerCompiles: true,
  },
}

export default nextConfig
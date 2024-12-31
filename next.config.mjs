import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flagcdn.com', // Corrected hostname
        port: '',
        pathname: '/**',
        search: '',
      }, 
    ],
  },
  images: {
    domains: ['right-click-next-iota.vercel.app'], // أضف اسم النطاق الخاص بك هنا
    deviceSizes: [640, 768, 1024, 1280, 1600],
    imageSizes: [16, 32, 48, 64, 96],
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: '@svgr/webpack', options: { icon: true } }],
    })
    return config
  },
};

export default withNextIntl(nextConfig);

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
        port: '',
        pathname: '/**',
      },
    ],
    domains: ['right-click-next-iota.vercel.app'],
    deviceSizes: [640, 768, 1024, 1280, 1600],
    imageSizes: [16, 32, 48, 64, 96],
    formats: ['image/webp'], // تحسين التحميل
    minimumCacheTTL: 60, // الكاش
  },
  
  reactStrictMode: true,
  webpack(config, { isServer }) {
    if (!isServer) {
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        images: {
          test: /\.(png|jpe?g|webp|gif|svg)$/i,
          chunks: 'all',
          enforce: true,
          reuseExistingChunk: true,
        },
      };
    }

    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: '@svgr/webpack', options: { icon: true } }],
    });
    
    return config;
  },
};

export default withNextIntl(nextConfig);

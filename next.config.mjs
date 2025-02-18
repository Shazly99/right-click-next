import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.rightclicksa.com',
        port: '',
        pathname: '/**',
      },
    ],
    domains: ["flagcdn.com", "api.rightclicksa.com"],
    formats: ['image/webp'],
    deviceSizes: [640, 768, 1024, 1280, 1600],
    imageSizes: [16, 32, 48, 64, 96],
    minimumCacheTTL: 3600,
  },
};

export default withNextIntl(nextConfig);  // تأكد من تمرير nextConfig هنا

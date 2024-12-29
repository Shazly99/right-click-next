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
    reactStrictMode: true,
};

export default withNextIntl(nextConfig);

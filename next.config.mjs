/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.clerk.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'raidenbot.xyz',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
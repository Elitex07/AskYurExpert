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
            {
                protocol: 'https',
                hostname: 'personalfinancelab.com',
                pathname: '/**',
            },
            // https://www.assetplus.in
            {
                protocol: 'https',
                hostname: 'www.assetplus.in',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
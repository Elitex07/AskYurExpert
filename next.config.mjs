/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [new URL("https://img.clerk.com/**"), new URL("https://raidenbot.xyz/**")],
    }
};

export default nextConfig;
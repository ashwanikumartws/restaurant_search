/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    REACT_APP_URL: process.env.REACT_APP_URL,
    REACT_ADMIN_URL: process.env.REACT_ADMIN_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "example-stage-images.s3.amazonaws.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "example.com",
        port: "3000",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;

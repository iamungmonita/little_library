/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    API_URL: 'http://0.0.0.0:3001/api',
    API_URL1: 'http://0.0.0.0:3001/api',
  },
  serverRuntimeConfig: {
    API_URL1: 'http://0.0.0.0:3001/api',
  },
};
module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
      CONTACT_ENDPOINT: process.env.NEXT_PUBLIC_API_URL
    },
  }
  
  module.exports = nextConfig
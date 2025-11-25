/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "wayforwarddevbucket.s3.us-west-1.amazonaws.com",
      "i.ytimg.com",
      "kdijhjnkxkrfjlyavcoe.supabase.co",
      "drive.google.com",
  "gatewaydevbucket.s3.us-west-1.amazonaws.com",
  "i.swncdn.com",
    ],
  },
};

module.exports = nextConfig;

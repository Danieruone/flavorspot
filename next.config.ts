/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["ui-avatars.com", "www.foodiesfeed.com"],
    dangerouslyAllowSVG: true,
  },
};

module.exports = nextConfig;

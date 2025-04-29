/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.imgflip.com"],
  },
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 5,
  },
  // webpack: (config, { dev, isServer }) => {
  //   if (dev && !isServer) {
  //     console.log("🔁 Webpack is rebuilding...");
  //     config.cache = {
  //       type: "filesystem",
  //     };
  //   }
  //   return config;
  // },
};

module.exports = nextConfig;

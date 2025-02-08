

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  env: {
    SANITY_SERVER_TOKEN: process.env.SANITY_SERVER_TOKEN,
    SANITY_BROWSER_TOKEN: process.env.SANITY_BROWSER_TOKEN,
  },
  output: "standalone", // Recommended for Vercel deployments
};

export default nextConfig;

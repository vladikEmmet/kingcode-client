/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  experimental: {
    appDir: true,
  },
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ["http://localhost:3000"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**",
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "globals")],
  },
  env: {
    API_URL: process.env.API_URL || "http://localhost:3000/api/",
    SHEETS_URL:
      process.env.SHEETS_URL ||
      "https://script.google.com/macros/s/AKfycbwDZkIUucPVG8mhWsGeZ9SJDAOxOu-6rBuE96B-UpeJXzO4r4oW8v51grBOjzyGhkEibA/exec",
  },
};

module.exports = nextConfig;

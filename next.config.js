/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["http://localhost:4200"],
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
    includePaths: [path.join(__dirname, "styles")],
  },
  env: {
    API_URL: process.env.API_URL || "http://localhost:4200/api/",
    SHEETS_URL:
      process.env.SHEETS_URL ||
      "https://script.google.com/macros/s/AKfycbwDZkIUucPVG8mhWsGeZ9SJDAOxOu-6rBuE96B-UpeJXzO4r4oW8v51grBOjzyGhkEibA/exec",
  },
};

module.exports = nextConfig;

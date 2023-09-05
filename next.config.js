// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig


const path = require('path');

module.exports = {
  // Other Next.js configurations
  // ...

  // Specify the location of the public folder
  webpack(config) {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
};

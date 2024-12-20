/** @type {import('next').NextConfig} */

// const API_URL = 'http://localhost/reedboss-server/api'
// const API_URL = 'http://localhost/reedboss-server/api'
// const API_URL = 'https://api.myreedboss.com/api'
const API_URL = process.env.API_URL;
const nextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "reedboss.s3.us-east-2.amazonaws.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/api/auth/:slug*",
        destination: "/authentication/:slug*",
        permanent: true,
      },
      {
        source: '/api/:slug*',
        destination: `${API_URL}/:slug*`,
        permanent: true,
      },
    ];
  },
  // cssLoaderOptions: {
  //   modules: true,
  //   localIdentName: "[local]__[hash:base64:5]",
  // },
};

module.exports = nextConfig;

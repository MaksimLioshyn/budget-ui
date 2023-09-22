/** @type {import('next').NextConfig} */

// To solve CORS error problem, replace path to the API
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination:
          'https://budgetapi20230709233759.azurewebsites.net/api/:path*',
      },
    ];
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ];
  },
  // sassOptions: {
  //   includePaths: [path.join(__dirname, 'styles')],
  // },
}

module.exports = nextConfig

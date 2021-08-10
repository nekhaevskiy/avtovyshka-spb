module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/avtopark',
        destination: '/#vehicle-section',
        permanent: true,
      },
    ];
  },
};

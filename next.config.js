module.exports = {
  images: {
    loader: 'cloudinary',
    path: 'https://res.cloudinary.com/djblscylv/image/upload/',
  },
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

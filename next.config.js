module.exports = {
  images: {
    loader: 'cloudinary',
    path: process.env.NEXT_PUBLIC_CLOUDINARY_URL,
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

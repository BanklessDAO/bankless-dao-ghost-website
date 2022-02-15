module.exports = {
  reactStrictMode: true,
  target: "serverless",
  // https://github.com/vercel/next.js/issues/21079
  // Remove this workaround whenever the issue is fixed
  images: {
    loader: 'imgix',
    path: '/',
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
  async redirects() {
    return [
      {
        source: '/join',
        destination: 'https://join.bankless.community',
        permanent: true,
      },
    ]
  },
};

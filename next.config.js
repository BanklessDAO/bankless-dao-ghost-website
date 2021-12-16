module.exports = {
  reactStrictMode: true,
  target: "serverless",
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

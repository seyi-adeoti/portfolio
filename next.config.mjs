const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [],
  },
  turbopack: {},
  webpack(config, { isServer }) {
    if (isServer) {
      config.output.chunkFilename = '[name].js';
    }
    return config;
  },
};

export default nextConfig;

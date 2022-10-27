const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const { withSentryConfig } = require('@sentry/nextjs');

const moduleExports = withBundleAnalyzer({
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
});

const SentryWebpackPluginOptions = {
  silent: true,
  hideSourceMaps: true,
};

module.exports = withSentryConfig(moduleExports, SentryWebpackPluginOptions);

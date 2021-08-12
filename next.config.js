const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const { withSentryConfig } = require('@sentry/nextjs');

const moduleExports = withBundleAnalyzer({
  reactStrictMode: true,
});

const SentryWebpackPluginOptions = {
  silent: true,
};

module.exports = withSentryConfig(moduleExports, SentryWebpackPluginOptions);

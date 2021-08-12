const withMDX = require('@next/mdx')({
  extensions: ['.mdx'],
});
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const { withSentryConfig } = require('@sentry/nextjs');

const moduleExports = withBundleAnalyzer(
  withMDX({
    reactStrictMode: true,
    pageExtensions: ['js', 'mdx'],
  })
);

const SentryWebpackPluginOptions = {
  silent: true,
};

module.exports = withSentryConfig(moduleExports, SentryWebpackPluginOptions);

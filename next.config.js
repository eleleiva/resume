const { withSentryConfig } = require('@sentry/nextjs');

const moduleExports = {};

const SentryWebpackPluginOptions = {
  silent: true,
};

module.exports = withSentryConfig(moduleExports, SentryWebpackPluginOptions);

module.exports = {
    /**
     * Disable eslint and typescript during build
     * as these are already covered elsewhere in our CI
     */
    eslint: {
      ignoreDuringBuilds: process.env.DISABLE_ESLINT_TSC_CI === 'true',
    },
    typescript: {
      ignoreBuildErrors: process.env.DISABLE_ESLINT_TSC_CI === 'true',
    }
  };
  
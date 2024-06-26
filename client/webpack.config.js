import { resolve } from 'node:path';

/**
 * @returns {import('webpack').Configuration}
 */
export default (_env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: resolve('src', 'main.ts'),
    mode: isProduction ? 'production' : 'development',
    output: {
      path: resolve('dist'),
      publicPath: '/assets',
      filename: isProduction ? '[name].[contenthash].js' : '[name].bundle.js',
    },
    devtool: isProduction ? false : 'eval-source-map',
    experiments: {
      outputModule: true,
    },
    module: {
      rules: [
        {
          test: /\.[jt]sx$/,
          loader: 'swc-loader'
        }
      ]
    }
  };
}

import { resolve } from 'node:path';

import HtmlWebpackPlugin from 'html-webpack-plugin';

/**
 * @returns {import('webpack-dev-server').WebpackConfiguration}
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
    devServer: isProduction ? undefined : {
      static: './dist',
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
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Simple Chat'
      }),
    ]
  };
}

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
      publicPath: '/',
      filename: isProduction ? 'assets/[name].[contenthash].js' : 'assets/[name].bundle.js',
    },
    devServer: isProduction ? undefined : {
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
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Simple Chat',
        scriptLoading: 'module',
      }),
    ],
  };
}

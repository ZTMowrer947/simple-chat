import { resolve } from 'node:path';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { VueLoaderPlugin } from 'vue-loader';
import webpack from 'webpack';

/**
 * @returns {import('webpack-dev-server').WebpackConfiguration}
 */
export default (_env, argv) => {
  const isProduction = argv?.mode === 'production';

  return {
    entry: resolve('src', 'main.ts'),
    mode: isProduction ? 'production' : 'development',
    output: {
      path: resolve('dist'),
      publicPath: '/',
      filename: isProduction
        ? 'assets/[name].[contenthash].js'
        : 'assets/[name].bundle.js',
    },
    devServer: isProduction
      ? undefined
      : {
          hot: true,
        },
    devtool: isProduction ? false : 'eval-source-map',
    experiments: {
      outputModule: true,
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
        },
        {
          test: /\.[jt]sx?$/,
          loader: 'swc-loader',
        },
        {
          test: /\.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'vue-style-loader',
            'css-loader',
            'postcss-loader',
          ],
        },
      ],
    },
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
      },
    },
    plugins: [
      new webpack.DefinePlugin({
        __VUE_OPTIONS_API__: 'true',
        __VUE_PROD_DEVTOOLS__: 'false',
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
      }),
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
        title: 'Simple Chat',
        scriptLoading: 'module',
        template: resolve('src', 'template.html'),
      }),
      ...(isProduction
        ? [
            new MiniCssExtractPlugin({
              filename: 'assets/[name].[contenthash].css',
            }),
          ]
        : []),
    ],
  };
};

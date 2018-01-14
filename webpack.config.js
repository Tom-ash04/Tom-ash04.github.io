const { resolve } = require('path');
const webpack = require('webpack');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (env) {
  const prod = env !== undefined && env.production === true;
  const dev = env !== undefined && env.development === true;

  return {

    entry: {
      app: './src/index.js',
      vendors: ['react', 'react-dom'],
    },

    output: {
      publicPath: dev ? '/dist/' : '',
      path: resolve(__dirname, 'dist/'),
      filename: prod ? '[name].[chunkhash].js' : '[name].js',
    },

    devtool: prod ? 'source-map' : 'cheap-module-eval-source-map',

    devServer: {
      historyApiFallback: {
        index: '/dist/',
      },
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['react', 'es2015'],
            },
          },
        },

        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: ExtractTextWebpackPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader!sass-loader',
          }),
        },

        // {
        //   test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        //   use: {
        //     loader: 'file-loader',
        //   },
        // },
      ],
    },

    plugins: [
      new ExtractTextWebpackPlugin('main.css'),

      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),

      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendors',
      }),
    ],
  };
};

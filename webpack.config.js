// NOT working
// require("core-js/stable");
// require("regenerator-runtime/runtime");
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack')

console.log(process.env.NODE_ENV);

const hmr = (mode) => {
  return mode === "dev" ? { hotModuleRepl: new webpack.HotModuleReplacementPlugin() } : null;
}

const getDevServer = (mode) => {
  const devS = {
    devServer: {
      contentBase: './dist',
      hot: true
    }
  }
  return mode === "dev" ? devS : null;
}

const getDevTools = (mode) => {
  return mode === "dev" ? { devtool: 'source-map' } : null;
}

module.exports = (env) => {
  console.log(env);
  const { mode } = env;

  return {
    entry: './src/index.js',
    output: {
      path: path.join(__dirname, '/dist'),
      filename: 'index_bundle.js',
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader', 'eslint-loader'],
          // use: {

          //     loader: 'babel-loader'
          // }
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          loader: 'file-loader',
          options: {
            outputPath: './img'
          }
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use:[
            'file-loader',
          ]
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
          ],
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: { sourceMap: mode === "dev" ? true : false },
            },
            {
              loader: 'postcss-loader',
              options: { sourceMap: mode === "dev" ? true : false },
            },
            {
              loader: 'sass-loader',
              options: { sourceMap: mode === "dev" ? true : false },
            },

          ],
        },

      ],
    },
    resolve: {
      extensions: ['*', '.js', '.jsx'],
    },
    plugins: [
      hmr('dev').hotModuleRepl,
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),

      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),

    ],

    ...getDevServer(mode),
    ...getDevTools(mode),


    optimization: {
      runtimeChunk: {
        name: entrypoint => `runtime~${entrypoint.name}`
      }
    }
  }


};

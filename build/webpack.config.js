const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  // 指定打包模式
  mode: "development",
  entry: path.resolve(__dirname, "../src/main.js"),
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].[contenthash].js",
    clean: true
  },
  resolve: {
    alias: {
      'Vue': 'vue/dist/vue.esm-bundler.js',
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'cache-loader'
          },
          {
            loader: 'thread-loader'
          },
          {
            loader: 'vue-loader',
            options: {
              comilerOptions: {
                preserveWhitespace: false
              }
            }
          }
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'cache-loader'
          },
          {
            loader: 'thread-loader'
          },
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          {
            loader: "postcss-loader",
          },
          {
            loader: "sass-loader",
            options: {
              implementation: require("dart-sass"),
            },
          }
        ],
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'img/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|acc)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'media/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      {
        test: /\.(woff2|eot|ttf|otf)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'fonts/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/main.html'),
      inject: 'body'
    }),
    new VueLoaderPlugin()
  ]
};

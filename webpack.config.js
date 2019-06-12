const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


function resolve(relatedPath) {
    return path.join(__dirname, relatedPath)
}

const webpackConfigBase = {
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: false,
        port: 9000
    },
    devtool: 'evel-source-map',
    entry: {
        index: resolve('./src/index.jsx'),
    },
    output: {
        path: resolve('./dist'),
        filename: '[name].js',
        chunkFilename: 'chunks/[name].js',
        // publicPath: './'
    },

    module: {
        rules: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],

        },

        {
            test: /\.(png|jpg|jpeg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    name: '[name]-[hash:5].[ext]',
                    limit: 1000,
                    outputPath: 'assets/imgs/' // html和css中图片的输出路径
                }
            }]
        }
        ]
    },
    node: {
        fs: 'empty'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'React-demo',  
            filename: './index.html',
            template: './src/index.html',
        })
        // 去除moment的语言包
        // new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /de|fr|hu/),

        // 提取css 
        // new ExtractTextPlugin('style.[hash:4].css'),
        /* new webpack.optimize.CommonsChunkPlugin({
          name: 'common', // 入口文件名
          filename: 'common.[hash:4].js', // 打包后的文件名
          minChunks: function (module, count) {
            return module.resource &&
              /\.js$/.test(module.resource) &&
              module.resource.indexOf(resolve('../node_modules')) === 0
          }
        }), */
        // new webpack.optimize.CommonsChunkPlugin({
        //     async: 'async-common',
        //     minChunks: 3,
        // }),
    ]
}

module.exports = webpackConfigBase;
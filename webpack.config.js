const path = require('path');
const webpack = require('webpack');
const htmlPlugin = require('html-webpack-plugin');
const openBrowserPlugin = require('open-browser-webpack-plugin');
const dashboardPlugin = require('webpack-dashboard/plugin');
const autoprefixer = require('autoprefixer');

const PATHS = {
    app: path.join(__dirname, 'src'),
    images: path.join(__dirname, 'src/assets/'),
    build: path.join(__dirname, 'dist')
};

const options = {
    host: 'localhost',
    port: '3000'
};

module.exports = {
    node: {
        fs: 'empty'
    },
    entry: {
        app: PATHS.app
    },
    output: {
        path: PATHS.build,
        filename: 'bundle.[hash].js'
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        stats: 'errors-only',
        host: options.host,
        port: options.port
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
            },

            {
                test: /\.(ico|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
                loader: 'file',
                query: {
                    name: '[path][name].[ext]'
                }
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            }
        ]
    },
    plugins: [
        new dashboardPlugin(),
        new webpack.HotModuleReplacementPlugin({
            multiStep: true
        }),
        new htmlPlugin({
            template: path.join(PATHS.app, 'index.html'),
            inject: 'body'
        }),
        new openBrowserPlugin({
            url: `http://${options.host}:${options.port}`
        })
    ]
};
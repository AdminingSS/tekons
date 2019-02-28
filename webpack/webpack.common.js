'use strict';

const Path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const dest = Path.join(__dirname, '../dist');

module.exports = {
    entry: [
        '@babel/polyfill',
        Path.resolve(__dirname, '../src/scripts/index'),
    ],
    output: {
        path: dest,
        filename: 'scripts/bundle.[hash].js'
    },
    plugins: [
        new CleanWebpackPlugin(
            [dest],
            { root: Path.join(__dirname, '../') }),
        new CopyWebpackPlugin([
            {from: Path.resolve(__dirname, '../public'), to: './'},
            {from: Path.resolve(__dirname, '../src/images'), to: './images'},
        ]),
        new HtmlWebpackPlugin({
            template: Path.resolve(__dirname, '../src/index.html'),
            filename: "index.html",
            inject: "body",
        }),
        new HtmlWebpackPlugin({
            template: Path.resolve(__dirname, '../src/register.html'),
            filename: "register.html",
            inject: "body",
        }),
        new HtmlWebpackPlugin({
            template: Path.resolve(__dirname, '../src/login.html'),
            filename: "login.html",
            inject: "body",
        }),
        new HtmlWebpackPlugin({
            template: Path.resolve(__dirname, '../src/profile.html'),
            filename: "profile.html",
            inject: "body",
        }),
        new HtmlWebpackPlugin({
            template: Path.resolve(__dirname, '../src/about.html'),
            filename: "about.html",
            inject: "body",
        }),
        new HtmlWebpackPlugin({
            template: Path.resolve(__dirname, '../src/tekons.html'),
            filename: "tekons.html",
            inject: "body",
        }),
        new HtmlWebpackPlugin({
            template: Path.resolve(__dirname, '../src/tekon_new.html'),
            filename: "tekon_new.html",
            inject: "body",
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(ico|jpg|jpeg|png|gif|webp)(\?.*$|$)?$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images/',
                        publicPath: '../images/',
                    }
                }
            },
            {
                test: /\.(eot|otf|svg|ttf|woff|woff2)(\?.*$|$)?$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/',
                        publicPath: '../fonts/',
                    }
                }
            },
        ]
    }
};

// commonjs

const path = require('path');
const json5 = require("json5")

const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: {
        main: './main.js',
        indtttex: './index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        clean: true
    },
    module: {

        rules: [{
            test: /\.css$/i,
            // .css --> .js 
            //  webpack -->  js
            // 从后往前执行
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.(png|svg|jpg)$/i,
            type: 'asset/resource'
        }, {
            test: /\.json5$/i,
            type: 'json',
            parser: {
                parse: json5.parse
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'output '
        }),
    ],
    devServer: {
        static: './dist',
    },
    optimization: {
        splitChunks: {
            chunks: "all",
        }
    }
}
const path = require('path');
const json5 = require("json5");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: './main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    module: {
        rules: [{
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        }, {
            test: /\.json5$/i,
            type: 'json',
            parser: {
                parse: json5.parse
            }
        }],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '管理输出',
        }),
    ],
    devServer: {
        static: './dist',
    },
};
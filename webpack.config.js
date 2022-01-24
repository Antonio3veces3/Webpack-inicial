const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtract = require("mini-css-extract-plugin");
const Copy = require("copy-webpack-plugin");
const { runPattern } = require('copy-webpack-plugin');


module.exports = {
    mode: 'development',

    output: {
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
                options: {
                    sources: false
                }
            },
            {
                test: /\.css$/,
                exclude: /styles.css$/,
                use: ['style-loader', 'css-loader']
                
            },
            {
                test: /styles.css$/,
                use: [MiniCssExtract.loader, "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: "file-loader"
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            }
        ],
    },

    optimization: {

    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'My Webpack App',
            filename: 'index.html',
            template: './src/index.html',
        }),
        new MiniCssExtract({
            filename: 'styles.css',
            ignoreOrder: false,
        }),
        new Copy({
            patterns: [
                { from: 'src/assets/', to: 'assets/' }
            ]
        })
    ],
    
}
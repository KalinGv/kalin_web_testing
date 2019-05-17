
const webpack = require("webpack");
const path = require("path");
//const CleanWebpackPlugin = require('clean-webpack-plugin');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Obfuscator = require("webpack-obfuscator");
//const MinifyCss = require('mini-css-extract-plugin');


module.exports = {

	entry: {
		app: "./src/js/app.js",


	},
	output: {

		path: path.resolve(__dirname, "dist"),
		filename: "[name].bundle.js",

	},


	mode: "production",
	module: {
		rules: [
			{

				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader",

					}
				]
			},

			{

				test: /\.(scss|css)$/,


				use: ["style-loader", "css-loader", "sass-loader",]




			},

			{

				test: /\.(jpg|png|svg|gif)$/,
				use: "file-loader",
			},
			{

				test: /\.html$/,
				use: ["html-loader"]
			},
		]
	},


	plugins: [
		new Obfuscator({
			rotateUnicodeArray: true
		}, []),
		/*  new MinifyCss ({
             filename: '[name].bundle.js',
     
         },),  */
		new HtmlWebpackPlugin(
			{
				template: "./src/calc.html",
				filename: "./index.html"
			}
		)

	],

};

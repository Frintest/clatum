const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	context: path.resolve(__dirname, 'src/public'),
	entry: {
		main: {
			import: './index.js',
			filename: 'js/[name].js'
		}
	},
	output: {
		path: path.resolve(__dirname, 'dist/public'),
		clean: true
	},
	module: {
		rules: [
			// ? ===== css =====
			{
				test: /\.(css)$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			},

			// ? ===== scss =====
			{
				test: /\.(s[ac]ss)$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
			},

			// ? ===== fonts =====
			{
				test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'fonts/[name][ext]'
				}
			},

			// ? ===== img =====
			{
				test: /\.(png|jpe?g|gif|svg|webp)$/i,
				type: 'asset/resource',
				exclude: /fonts/,
				generator: {
					filename: 'img/[name][ext]'
				}
			},

			// ? ===== audio =====
			{
				test: /\.(mp3)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'audio/[name][ext]'
				}
			},

			// ? ===== video =====
			{
				test: /\.(mp4)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'video/[name][ext]'
				}
			},

			// ? ===== gltf =====
			{
				test: /\.(gltf|glb)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'models/[name][ext]'
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './index.html',
			inject: 'body'
		}),
		new HtmlWebpackPlugin({
			filename: 'experiments.html',
			template: './experiments.html',
			inject: 'body'
		}),
		new HtmlWebpackPlugin({
			filename: 'contacts.html',
			template: './contacts.html',
			inject: 'body'
		}),
		new HtmlWebpackPlugin({
			filename: 'materials.html',
			template: './materials.html',
			inject: 'body'
		}),
		new MiniCssExtractPlugin({
			filename: 'css/[name].css'
		})
	]
};
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const {
	BundleAnalyzerPlugin
} = require('webpack-bundle-analyzer');

module.exports = {
	mode: 'production',
	context: path.resolve(__dirname, 'src', 'public'),
	entry: {
		main: {
			import: './index.js',
			filename: '[name].js'
		}
	},
	output: {
		path: path.resolve(__dirname, 'dist', 'public'),
		clean: true
	},
	optimization: {
		minimizer: [
			new CssMinimizerPlugin(),
			new TerserPlugin()
		]
	},
	module: {
		rules: [{
				test: /\.js$/,
				exclude: '/node_modules/',
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			},
			{
				test: /\.s[ac]ss$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
			},
			{
				test: /\.(woff2|woff|svg|ttf|otf|eot)$/i,
				type: './asset/resource',
				exclude: '/img/'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'index.html'
		}),
		new MiniCssExtractPlugin({
			filename: './css/[name].css'
		}),
		new BundleAnalyzerPlugin()
	]
};
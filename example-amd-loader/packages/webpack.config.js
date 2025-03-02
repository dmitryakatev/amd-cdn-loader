'use strict';

var webpack = require('webpack')
var path = require('path')

module.exports = ({ name, deps }) => {
	return {
		mode: 'development',
	
		entry: {
			[name]: path.resolve(__dirname, `./src/${name}.ts`),
		},
		output: {
			path: path.resolve(__dirname, './public'),
			filename: './[name].js',
			library: '[name]',
			libraryTarget: 'amd',
		},
	
		devtool: false, // 'source-map',
	
		resolve: {
			extensions: ['.ts', '.js'],
		},

		externals: deps.reduce((acc, name) => {
			acc[name] = name
			return acc
		}, {}),

		devServer: {
			static: {
				directory: path.join(__dirname, 'public'),
			},
			compress: true,
		},
	
		module: {
			rules: [{
				test: /\.ts$/,
				loader: 'ts-loader',
				options: {
					compilerOptions: {
						noEmit: false,
						outDir: './public',
						declaration: true,
					},
				},
			}]
		},
	}
};

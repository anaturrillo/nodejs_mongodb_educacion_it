const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	entry: './app.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js'
	},
	module: {
		rules: [
		    {
		    	test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
		        	loader: 'babel-loader',
		        	options: {
		        		presets: ['@babel/preset-env']
		        	}
		      	}
		    },{
	            test: /\.scss$/,
	            use: [
	                MiniCssExtractPlugin.loader, // "style-loader" creates style nodes from JS strings 
	                "css-loader", // translates CSS into CommonJS
	                "sass-loader" // compiles Sass to CSS, using Node Sass by default
	            ]
	        }
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
	      filename: '[name].css',
	      chunkFilename: '[id].css'
	    })
	]
};
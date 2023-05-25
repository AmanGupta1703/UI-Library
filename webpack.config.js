const path = require("path");

module.exports = {
	entry: "./src/index.js", // where our source live
	output: {
		path: path.resolve(__dirname, "dist/assets"),
		filename: "bundle.js",
	}, // where to output it
	devServer: {
		static: path.resolve(__dirname, "dist"),
		devMiddleware: {
			publicPath: "/assets/",
		},
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
		],
	},
}; // how we want the webpack to work, will run on the computer and not on the browser

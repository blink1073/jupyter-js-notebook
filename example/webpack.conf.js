
module.exports = {
  entry: './build/index.js',
  output: {
    path: __dirname + "/build",
    filename: "bundle.js",
    publicPath: "./build/"
  },
  debug: true,
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.html$/, loader: 'file' },
      { test: /\.woff.*?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.(ttf|eot|svg).*?$/, loader: "file-loader" },
    ]
  }
}

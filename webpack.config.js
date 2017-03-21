const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry:"./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist/assets"),
    filename: "bundle.js",
    publicPath: "assets"
  },
  devServer: {
     inline:true,
     contentBase: './dist',
     port:3000
  },
  module: {
     rules: [{
            test:/\.js$/,
            exclude:[/node_modules/],
            use :[{
              loader: 'babel-loader',
              options: {
                 presets:['latest','stage-0','react']
              }
            }]
         },
      {
        test: /\.json$/,
        loader: 'json-loader',
        exclude:[/node_modules/],
      },
      {
        test:/\.css$/,
        loader:'style-loader!css-loader!autoprefixer-loader'
      },
      {
        test:/\.scss$/,
        loader:'style-loader!css-loader!autoprefixer-loader!sass-loader'
      }
    ]
    }
};

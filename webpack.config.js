const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve('src/index.js')
  },
  output: {
    path: path.resolve('dist'),
  },
  resolve: {
    extensions: ['js', 'jsx'],
  },
  module: {
    rules: [
      {
        test: /\.js(x)?$/i,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [[
              '@babel/plugin-transform-react-jsx',
              {pragma: 'ToyReact.createElement'},
            ]]
          }
        }
      }
    ]
  },
  optimization: {
    minimize: false
  }
}
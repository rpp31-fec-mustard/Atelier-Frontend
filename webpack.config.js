const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');

const entry = __dirname + '/client/components/index.jsx';

module.exports = {
  mode: 'development',
  optimization: {
    usedExports: true,
  },
  plugins: [new CompressionPlugin({
    compressionOptions: {level: 9}
  })],
  entry: ['regenerator-runtime/runtime.js', entry],
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/client/public')
  },
};
import webpack from 'webpack';
import path from 'path';
import nodeExternals from 'webpack-node-externals';
// import config from 'config';

const webpackConfig: webpack.Configuration = {
  target: 'node',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'server.js'
  },
  externals: [nodeExternals()],
  resolve: {
    extensions: ['.js', '.ts']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      CONFIG: JSON.stringify(require('config'))
    })
  ]
};

export default webpackConfig;

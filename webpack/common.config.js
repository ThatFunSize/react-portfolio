// webpack plugins
const SplitChunksPlugin = require('webpack/lib/optimize/SplitChunksPlugin');

module.exports = {
  entry: {
    app: ['./src/bootstrap.js'],
    vendor: './src/vendor.js',
  },

  resolve: {
    extensions: ['.js', '.scss'],

    modules: ['node_modules'],
  },
  node: { fs: 'empty', net: 'empty' },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },

      {
        test: /\.(png|jpg|gif|jpeg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },

      {
        test: /\.(mp4|webm)$/,
        loader: 'url?limit=10000',
      },
    ],
  },

  plugins: [
    new SplitChunksPlugin({
      name: ['app', 'vendor'],
      minChunks: Infinity,
    }),
  ], 
};

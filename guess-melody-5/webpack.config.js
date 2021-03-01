const path = require('path');

module.exports = {
  entry: './src/index.js', //точка входа
  output: { // на выходе
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public') //берёт на вход строку и пишет куда выходит
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    open: false,
    port: 1337,
  },
  module: {
    rules: [//правила
      {
        test: /\.(js|jsx)$/, //принимает пути до файлов, удовлетворяющих этой маске
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map', //видеть в отладчике где ошибка (файл а не БАНДЛ)
};

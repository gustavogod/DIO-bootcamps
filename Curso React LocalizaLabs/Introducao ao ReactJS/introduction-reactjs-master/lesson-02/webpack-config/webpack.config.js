const path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  //devtool: 'source-map',
  entry: './src/index.js',
  output: {
    // __dirname é para pegar o diretório raiz do path
    // gera uma pasta chamada dist, é o destino final do projeto
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundler.js', // arquivo final onde o projeto será empacotado e enviado para produção
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ] 
};


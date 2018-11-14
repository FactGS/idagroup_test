require(../css/style.css'');
let path = require('path');

let conf = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        publicPath: '/dist'
    },
    devServer: {
      overlay: true
    },
    devtool: 'eval-sourcemap',
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                //"sass-loader" // compiles Sass to CSS, using Node Sass by default
            ]
        }]
    }
/*    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          //exclude: '/node_modules/'
        }
      ]
    }*/
};

module.exports = conf;

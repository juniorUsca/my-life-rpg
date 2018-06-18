const webpack = require('webpack')
//const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')
const fs = require('fs')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
/*const nib = require('nib')
*/
const ExtractCSS = new ExtractTextPlugin('../statics/styles.css');
//const ExtractSTYL = new ExtractTextPlugin('../statics/main.css');


// dont bundle notthing of node_modules
const nodeModules = fs
  .readdirSync('node_modules')
  .filter(x => ['.bin'].indexOf(x) === -1)
  .reduce(
    (modules, module) => Object.assign(modules, { [module]: `commonjs ${module}` }),
    {}
  )

const config = {
  entry: './src/entries/server.jsx',
  output: {
    filename: 'index.js',
    path: path.resolve('./build/server'),
    /*publicPath: process.env.NODE_ENV === 'production'
      ? 'https://junior-react-statics.now.sh'
      : 'http://localhost:3001/', // sirve para importar cosas asincronas*/
  },
  mode: 'development',
  devtool: 'eval-source-map',
  target: 'node',
  module: {
    rules: [ // cambiamos loaders por rules
      /*{
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        exclude: /(node_modules)/,
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },*/
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'stage-2'],
            //presets: ['es2015', 'es2016', 'es2017', 'react', 'stage-2'],
            //plugins: ['transform-class-properties', 'transform-regenerator', 'transform-runtime'],
          },
        }
      },
      {
        test: /\.css$/,
        use: ExtractCSS.extract({
          fallback: 'style-loader',
          use: 'css-loader?modules'
        }),
      },
      /*{
        test: /\.styl$/,
        loader: ExtractSTYL.extract({ fallback: 'style-loader',
          use: ['css-loader?modules', {
            loader: 'stylus-loader',
            options: {
              use: [nib()],
            },
          }],
        }),
      },*/
    ],
  },
  //externals: { 'express': 'commonjs express' },
  /*resolve: {
    extensions: ['.js', '.jsx', '.css', '.styl', '.json'],
  },*/
  externals: nodeModules,
  plugins: [
    /*new webpack.DefinePlugin({ // es para que react optimize el bundle para produccion
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
      },
    }),*/

    // new ExtractTextPlugin('../statics/styles.css'),
    //ExtractSTYL,
    ExtractCSS,
  ],
};

/*if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new UglifyJSPlugin({
      uglifyOptions: {
        compress: {
          warnings: false,
        },
        mangle: {
          reserved: ['$super', '$', 'exports', 'require'], // que es lo q no debe minificar
        },
      },
    }) // uglify
  )
}*/

module.exports = config

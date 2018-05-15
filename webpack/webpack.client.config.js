const webpack = require('webpack')
const path = require('path')
//const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
//const ExtractTextPlugin = require('extract-text-webpack-plugin')
//const nib = require('nib')

//const ExtractCSS = new ExtractTextPlugin('../statics/styles.css');
//const ExtractSTYL = new ExtractTextPlugin('../statics/main.css');


const plugins = [
  /*new webpack.DefinePlugin({ // es para que react optimize el bundle para produccion
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
    },
  }),*/
//  ExtractSTYL,
  //ExtractCSS,
]

/*if (env.NODE_ENV === 'production') {
  plugins.push(
    new CleanWebpackPlugin(['dist'], {root: __dirname})
  )
  plugins.push(
    new UglifyJSPlugin({
      compress: {
        warnings: false,
      },
      mangle: {
        except: ['$super', '$', 'exports', 'require'], // que es lo q no debe minificar
      },
    })
  )
}*/

const config = {
  mode: 'development',
  entry: './src/client.jsx',
  output: {
    filename: 'app.js',
    path: path.resolve('./build/statics'),
    /*publicPath: process.env.NODE_ENV === 'production'
      ? 'https://junior-react-statics.now.sh'
      : 'http://localhost:3001/',*/
  },
  devServer: {
    port: 9000,
  },
  devtool: 'eval-source-map',
  module: {
    rules: [ // change loaders by rules
      /*{
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'eslint-loader',
          enforce: 'pre',
        },
      },*/
      /*{
        test: /\.json$/,
        loader: 'json-loader',
      },*/
      {
        test: /\.(js|jsx)?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react', 'stage-2'],
            //plugins: ['transform-es2015-modules-commonjs'],
            /*env: {
              production: {
                plugins: ['transform-regenerator', 'transform-runtime'],
                presets: ['es2015'], // generamos todo es2015 para navegadores antiguos
              },
              development: {
                plugins: ['transform-es2015-modules-commonjs'],
              },
            },*/
          },
        }
      },
      /*{
        test: /\.css$/,
        loader: ExtractCSS.extract({ fallback: 'style-loader', use: 'css-loader?modules' }),
      },*/
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
  /*target: 'web',
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.styl', '.json'],
  },*/
  plugins
};

/*if (env.NODE_ENV === 'development') {
  config.devtool = 'eval-source-map'
  config.mode = 'development'
  config.devServer = {
    port: 9000,
  }
}*/

module.exports = config

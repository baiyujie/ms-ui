const path = require('path')
const webpack = require('webpack')
const utils = require('./utils')
const entries = utils.getMultiEntry('./src/assets/js/*.js')
const pages = utils.getMultiHtml('./src/pages/*.html')
let plugins = []

const CommonsChunkPlugin = new webpack.optimize.CommonsChunkPlugin({
  name: 'vendor',
  minChunks: function (module, count) {
    return /node_modules/.test(module.userRequest || '');
  }
})
const UglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
  compress: {
    properties: false,
    warnings: false
  },
  output: {
    quote_keys: true
  },
  mangle: {
    screw_ie8: false
  },
  sourceMap: false
})
let ExtractTextPlugin = require("extract-text-webpack-plugin")
ExtractTextPlugin = new ExtractTextPlugin({
    //生成css文件名
    filename: 'static/css/[name].css',
    disable: false,
    allChunks: true
})
let OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
OptimizeCSSPlugin = new OptimizeCSSPlugin({
  cssProcessorOptions: {
    safe: true
  }
})
plugins = [CommonsChunkPlugin, ExtractTextPlugin, OptimizeCSSPlugin]

let HtmlWebpackPlugin = require('html-webpack-plugin')
pages.forEach((page)=>{
  const htmlPlugin = new HtmlWebpackPlugin({
    template: page.template,
    filename: page.filename,
    chunks: ['vendor', page.chuckName]
  });
  plugins.push(htmlPlugin)
})

module.exports = {
	plugins: plugins,
	entry: entries,
	output: {
    filename: 'static/js/[name][chunkhash].js',
    chunkFilename: 'static/js/[id].chunkhash.js',
    path: path.join(__dirname, '../nginx-1.11.9/html'),
    publicPath:'/'
	},
	module: {
    rules: [
      { test: /\.css$/, use: ExtractTextPlugin.extract({ fallback: "style-loader", use:[{ loader: 'css-loader', options:{ minimize: true } }] }) },
      { test: /\.scss$/, use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader', 'sass-loader'] }) },
      { test: /\.js$/, loader: 'es3ify-loader!babel-loader?presets[]=es2015', exclude: /node_modules/ },
      { test: /\.(png|jpe?g|gif|svg)(\?.*)?$/, loader: 'url-loader', options: { limit:10000, name:utils.assetsPath('img/[name].[hash:7].[ext]') }, exclude: /node_modules/},
      { test:/\.(woff2?|eot|ttf|otf)(\?.*)?$/, loader: 'url-loader', options: { limit: 10000, name: utils.assetsPath('fonts/[name].[ext]') } }
	  ]
	},
  devServer:{
    host:'192.168.1.183',
    contentBase:'./dist',
    compress:true,
    port:3000,
    inline:true
  }
}

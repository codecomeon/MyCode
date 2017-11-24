var path = require('path');
var webpack = require('webpack');
var glob = require('glob');
var WebpackDevServer = require('webpack-dev-server');
var SpritesmithPlugin = require('webpack-spritesmith');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var entries = getEntry('src/js/page/**/*.js', 'src/js/page/');
var commonsChunk = getCommonsChunk('src/js/page/**/*.js', 'src/js/page/');

var config = {
  entry: entries,
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: './dist',
    filename: 'js/[name].js',
    chunkFilename: 'js/[id].chunk.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('css!less')
      },
      {
        test: /\.html$/,
        loader: 'html?attrs=img:src img:data-src'
      },
      {
        test: '\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$',
        loader: 'file-loader?name=fonts/[name].[ext]'
      },
      {
        test: /\.(mp4|flv|swf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=video/[name].[ext]'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=5000&name=img/[hash].[ext]'
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './dist',
    host: '127.0.0.1',
    progress: true,
    port: 9090,
    inline: true,
    hot: true
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery:'jquery',
      'window.jQuery':'jquery'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name:'common',
      chunks:commonsChunk,
      minChunks:commonsChunk.length
    }),
    new ExtractTextPlugin('css/[name].css'),
      new SpritesmithPlugin({
        src:{
          cwd:path.resolve(__dirname,'src/img/sprite'),
          glob:'*.png'
        },
        target:{
          image:path.resolve(__dirname,'src/img/sprite.png'),
          css:path.resolve(__dirname,'src/css/common/sprite.sass')
        },
        apiOptions:{
          cssImageRef:'~sprite.png'
        }
      }),
      new HtmlWebpackPlugin({
        favicon:'src/img/favicon.ico',
        filename: './index.html',
        template:'./src/index.html',
        inject:'body',
        hash:true,
        chunks:['common','index'],
        minify:{
          removeComments:true,
          collapseWhitespace:false
        }
      }),
      new webpack.HotModuleReplacementPlugin()
  ]
};

var viesObj = getView('src/view/**/*.html', 'src/view/')
var pages = Object.keys(viesObj);
pages.forEach(function(pathname) {
  var htmlName = viesObj[pathname]
  var conf = {
    filename: './view/' + htmlName + '.html', //生成的html存放路径，相对于path
    template: './src/view/' + htmlName + '.html', //html模板路径
    inject: 'body', //js插入的位置，true/'head'/'body'/false
    hash: true, //为静态资源生成hash值
    favicon: './src/img/favicon.ico', //favicon路径，通过webpack引入同时可以生成hash值
    chunks: ['common',htmlName],//需要引入的chunk，不配置就会引入所有页面的资源
    minify: { //压缩HTML文件
      removeComments: true, //移除HTML中的注释
      collapseWhitespace: false //删除空白符与换行符
    }
  };
  config.plugins.push(new HtmlWebpackPlugin(conf));
});


module.exports = config;

function getView(globPath, pathDir) {
  var files = glob.sync(globPath);
  var entries = {},
      entry, dirname, basename, pathname, extname;
  
  for (var i = 0; i < files.length; i++) {
    entry = files[i];
    dirname = path.dirname(entry);
    
    extname = path.extname(entry);
    basename = path.basename(entry, extname);
    pathname = path.join(dirname, basename);
    pathname = pathDir ? pathname.replace(new RegExp('^' + pathDir), '') : pathname;
    entries[pathname] =  basename;
  }
  return entries;
}


function getEntry(globPath, pathDir) {
  var files = glob.sync(globPath);
  var entries = {},
      entry, dirname, basename, pathname, extname;
  
  for (var i = 0; i < files.length; i++) {
    entry = files[i];
    dirname = path.dirname(entry);
    extname = path.extname(entry);
    basename = path.basename(entry, extname);
    pathname = path.join(dirname, basename);
    entries[basename] = './' + entry;
  }
  return entries;
}

function getCommonsChunk(globPath, pathDir) {
  var files = glob.sync(globPath);
  var entries = [],
      entry, dirname, basename, extname;
  
  for (var i = 0; i < files.length; i++) {
    entry = files[i];
    dirname = path.dirname(entry);
    extname = path.extname(entry);
    basename = path.basename(entry, extname);
    entries.push(basename);
  }
  return entries;
}

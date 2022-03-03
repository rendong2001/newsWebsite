const webpack = require('webpack');
module.exports = {
  publicPath:'./',
  configureWebpack: {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:7070',
          changeOrigin: true,
          ws:true,
          pathRewrite: {
            '^/api':'/'
          }
        }
      }
    }
  },
}
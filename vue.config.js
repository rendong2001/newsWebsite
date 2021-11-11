const webpack = require('webpack');
module.exports = {
  configureWebpack: {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://8.140.68.52',
          changeOrigin: true,
          ws:true,
          pathRewrite: {
            '^/api':'/'
          }
        }
      }
    }
  }
}
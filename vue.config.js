const webpack = require('webpack');
module.exports = {
  configureWebpack: {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://10.2.33.200',
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
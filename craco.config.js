const path = require('path')//拿到path模块
const resolve = pathname => path.resolve(__dirname, pathname)
const CracoLessPlugin = require('craco-less');


module.exports = {
  // less
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {},
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  //webpack
  webpack: {
    alias: {
      '@': resolve('src'),//拼接路径
      'components': resolve('src/components'),
      'utils': resolve('src/utils')
    }
  }
}

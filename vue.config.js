module.exports = {
//打包不带Map文件 减少30%体积
productionSourceMap:false,
  //关闭eslint
  lintOnSave:false,
  //代理跨域
  devServer: {
    proxy: {
      '/api': {
        target: 'http://gmall-h5-api.atguigu.cn',
        // pathRewrite: { '^/api': '' },
      },
    },
  },
}

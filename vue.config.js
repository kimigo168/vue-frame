module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '' : '',
  productionSourceMap: false,
  devServer: {
    port: '8080',
    // host: 'localhost',
    // host: '192.168.1.103',
    host: '172.16.1.78',
    https: false,
    open: true
    // proxy: 'http://localhost:4000' // 配置跨域处理，只有一个代理
    // proxy: {
    //   '/': {
    //     ws: false,
    //     target: 'http://aiwriter.giiso.com',
    //     // target: 'http://172.16.1.135', // 马帅服务器
    //     // target: 'http://172.16.1.150:8081', // 陈健菲服务器
    //     // target: 'http://172.16.1.237', // 温博文服务器
    //     // target: 'http://114.119.5.9:9000', // uat测试
    //     changeOrigin: true,
    //     pathReWrite: {
    //       '^/': ''
    //     }
    //   }
    // }
  }
}

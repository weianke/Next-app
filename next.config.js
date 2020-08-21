const withCss = require('@zeit/next-css');


const configs = {
  // 编译文件的输出目录
  distDir: 'dest',
  // 是否给每个路由生成Etag
  generateEtags: true,
  // 页面内容缓存配置
  onDemandEntries: {
    // 内容再内存缓存的时长(ms)
    maxInactiveAge: 25 * 1000,
    // 同时缓存多少个页面
    pageBufferLength: 2
  },
  // 在pages目录下那种后缀得文件会被认为是页面
  pageExtensions: ['jsx', 'js'],
  // 配置buildId
  generateBuildId: async () => {
    if (process.env.YOUR_BUILD_ID) {
      return process.env.YOUR_BUILD_ID
    }
    
    // 返回null使用默认得unique id
    return null
  },
  // 手动修改webpack config
  webpack(config, options) {
    return config;
  },
  // 修改webpackDevMiddleWare配置
  webpackDevMiddleware: config => {
    return config;
  },
  // 可以在页面通过 procsess.env.customkey获取 value
  env: {
    customkey: 'value'
  },
  // 下面两个要通过 ’next/config‘ 来读取
  // 只有在服务端渲染时才会获取的配置
  serverRuntimeConfig: {
    mySecret: 'secret',
    secondSecret: process.env.SECOND_SECRET
  },
  // 在服务端渲染得客户端渲染都可获取得配置
  publicRuntimeConfig: {
    staticFolder: '/static'
  }
}

if (typeof require !== 'undefined') {
  require.extensions['.css'] = (file) => {};
}

module.exports = withCss({
  env: {
    customKey: 'value'
  },
  serverRuntimeConfig: {
    mySecret: 'secret',
    secondSecret: process.env.SECOND_SECRET
  },
  // 在服务端渲染得客户端渲染都可获取得配置
  publicRuntimeConfig: {
    staticFolder: '/static'
  }
});

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
  }
}

if (typeof require !== 'undefined') {
  require.extensions['.css'] = (file) => {};
}

module.exports = withCss({});

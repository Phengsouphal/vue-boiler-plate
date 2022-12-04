const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: []
    },
    webpackBundleAnalyzer: {
      // analyzerMode: 'disabled', // 不启动展示打包报告的http服务器
      openAnalyzer: false
    }
  },
})

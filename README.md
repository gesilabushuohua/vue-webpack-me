# 手动搭建 Vue 框架

前述，搭建需要注意依赖版本

* ES6/7/8 转 ES5 代码，babel-loader @babel/core @babel/preset-env，转换新的 api core-js@2 @babelruntime-corejs2
* css 预编译，sass sass-loaer dart-sass css-loader 解析css 文件，style-loader 将 css 解析到 html 页面的 style 上
* postcss 实现自动添加 css3 前缀， postcss-loader autoprefixer
* html-webpack-plugin 创建 html 页面，自动引入打包生成 js 文本， html-webpack-plugin
* 热更新功能，webpack-dev-server
* 打包图片、媒体、字体文件，file-loader url-loader，file-loader 解析文件 url，并将文件复制到输出的目录，url-loader 如果文件小于限制的大小，会返回 base64 编码，否则使用 file-loader 将文件复制到输出文件
* webpack 识别 .vue 文件，vue-loader 解析 vue 文件，vue-template-compiler 编译模板，cache-loader 缓存 loader 编译结果，thread-loader 使用 worker 池来运行 loader，每个 worker 都是一个 node.js 进程
* 定义环境变量，webpack DefinePlugin，可以方便定义环境变量
* 生产环境， @intervolga/optimize-cssnano-plugin 用于压缩css代码，min-css-extract-plugin 用于提取 css 到文件中，clean-webpack-plugin 用于删除上次构建的文件
* webpack-merge 合并 webpack 配置
* copy-webpack-plugin 用户拷贝静态资源

生产环境
* 压缩代码
* 不需要更新
* 提取 css 压缩 css 代码
* sourceMap
* 构建前清除上一次构建

打包分析，模块分析工具 webpack-bundle-analyzer

参考资料：
[https://juejin.cn/post/6844903833160646663]
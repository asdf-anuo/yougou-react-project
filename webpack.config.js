const webpack = require("webpack");
const path = require("path"); // node 自带的模块 无需安装
const htmlWebpackPlugin = require("html-webpack-plugin"); // 处理 HTML 文件
const openBrowserWebpackPlugin = require("open-browser-webpack-plugin");
const extractTextWebpackPlugin = require("extract-text-webpack-plugin"); // 抽离样式
const url = 'http://localhost:1810';

module.exports = {
  entry: ["./src/main.js"], // 入口文件
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].[hash:8].js", // hash:8 长度为8 的hash 加密(md5) 设置 字符串  防止缓存
    publicPath: "" // 引用文件的 公共路径  上线需要设置
  },

  resolve: {
    alias: {
      react: path.resolve(__dirname, "node_modules", "react")
    }
  },

  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/, // 排除不去寻找的文件
        use: ["babel-loader"]
      },
      {
        test: /\.(png|gif|jpg|svg|woff|woff2|eot|ttf)\??.*$/i,
        use: ["url-loader?limit=8192&name=font/[hash:8].[name].[ext]"]
      },
      {
        test: /\.(css|scss)$/,
        use: extractTextWebpackPlugin.extract({
          fallback: "style-loader", // 创建 样式风格Node代码 以JS 字符串
          use: [
            "css-loader", //   转译 Css  为 commonJs 风格
            {
              loader: "postcss-loader",
              options: {
                plugins: function () {
                  return [
                    require("cssgrace"), // CSS代码美化
                    require("autoprefixer"), // 自动补全
                    require("postcss-px2rem-exclude")({
                      remUnit: 100,
                      exclude: /mint-ui/i // 排除 antd-mobile不需要进行 rem 转换
                    }) // px 转 rem
                  ];
                }
              }
            },
            "sass-loader"
          ]
        })
      },
      {
        test: /\.(css|less)$/,
        use: extractTextWebpackPlugin.extract({
          fallback: "style-loader", // 创建 样式风格Node代码 以JS 字符串
          use: [
            "css-loader", //   转译 Css  为 commonJs 风格
            {
              loader: "postcss-loader",
              options: {
                plugins: function () {
                  return [
                    require("cssgrace"), // CSS代码美化
                    require("autoprefixer"), // 自动补全
                    require("postcss-px2rem-exclude")({
                      remUnit: 100,
                      exclude: /antd-mobile/i // 排除 antd-mobile不需要进行 rem 转换
                    }) // px 转 rem
                  ];
                }
              }
            },
            "less-loader"
          ]
        })
      }
    ]
  },

  devtool: "source-map", // 方便调试 项目

  devServer: {
    contentBase: path.join(__dirname, "dist"), // 启动的服务作用的范围
    compress: true,
    hot: true,
    inline: true,
    // open: true, // 自动打开浏览器
    host: "0.0.0.0",
    // host:"localhost",
    port: 5800,
    publicPath: "",
    historyApiFallback: true, // history mode ==> html5 API
    disableHostCheck: true,
    proxy: {
      // 代理  解决跨域
      "/react": {
        target: url,
        changeOrigin: true,
        pathRewrite: {
          '^/react': '/react'
        }
      }
    }
  },

  // 插件
  plugins: [
    new openBrowserWebpackPlugin({
      url: "http://localhost:5800"
    }),

    new htmlWebpackPlugin({
      template: "./public/index.html",
      inject: true // 自动导入打包的js/css文件
    }),

    new extractTextWebpackPlugin({
      filename: "css/app.[hash:8].css", // 抽离样式的文件名
      allChunks: true, // 全部数据 处理
      disable: false // 抽离
    }),

    new webpack.ProvidePlugin({
      React: "React",
      Component: ["react", "Component"]
    })
  ]
};
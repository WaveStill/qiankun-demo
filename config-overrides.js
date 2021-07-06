const { name } = require("./package");
const { override, overrideDevServer, addLessLoader, addPostcssPlugins, fixBabelImports } = require('customize-cra');

// 跨域配置
const devServerConfig = () => config => {
  config.headers = {
    "Access-Control-Allow-Origin": "*",
  };
  config.historyApiFallback = true;
  config.hot = false;
  config.watchContentBase = false;
  config.liveReload = false;
  config.port = 4001;
  return config;
}
module.exports = {
  webpack: function override(config, env) {
    // 根据qiankun文档配置
    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = "umd";
    config.output.jsonpFunction = `webpackJsonp_${name}`;
    return config;
  },
  devServer: overrideDevServer(devServerConfig())

};
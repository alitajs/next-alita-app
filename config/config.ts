const isSSR = true;
const outputPath = 'dist/';
const env = process.env.NODE_ENV;
// 这里需要对应服务器地址
const path = env === 'development' ? 'http://127.0.0.1:8000/' : outputPath;

export default {
  appType: 'h5',
  mobileLayout: true,
  hash: false,
  ssr: isSSR ? {} : false,
  outputPath: outputPath,
  publicPath: isSSR ? path : './',
  keepalive: ['/list'],
  packageId: 'com.alita.demos',
  displayName: 'alita-demos',
};

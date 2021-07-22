// 本地测试环境-只打包umd模块，并开启本地服务器
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import packageConfig from './package.json';

const extensions = ['.js', '.ts', '.tsx'];

export default {
  input: 'src/index.ts',
  output: {
    name: 'jsHelper',
    file: packageConfig.main, // 通用模块
    format: 'umd',
  },
  plugins: [
    resolve(extensions), // 查找和打包node_modules中的第三方模块
    commonjs(), // 将 CommonJS 转换成 ES2015 模块供 Rollup 处理
    babel({
      babelHelpers: 'bundled',
    }),
    typescript({
      tsconfig: 'tsconfig.json',
      extensions,
      useTsconfigDeclarationDir: true,
    }),
    livereload(), // 热更新，与serve结合使用
    serve({
      open: true, // 自动打开页面
      port: 8000,
      openPage: '/index.html', // 打开的页面
      contentBase: '',
    }),
  ],
};

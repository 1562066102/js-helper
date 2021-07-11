import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import {uglify} from 'rollup-plugin-uglify';
import packageConfig from './package.json';

const extensions = ['.js', '.ts', '.tsx'];

// 公共配置
const commonConfig = {
  input: 'src/index.ts',
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
    uglify(), // 压缩
  ],
};

// 需要导出的模块类型
const outputModel = [
  {
    name: 'jsLib',
    file: packageConfig.main, // 通用模块
    format: 'umd',
  },
  {
    name: packageConfig.name,
    file: packageConfig.module, // es6模块
    format: 'es',
  },
];

export default outputModel.map(output => {
  return Object.assign({}, commonConfig, {
    output: {
      ...output,
    },
  });
});

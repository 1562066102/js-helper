# @gx-solution/tools 开发说明文档

## 快速开始

```sh
$ npm install // 安装依赖
$ npm run start // 本地运行
$ npm run build // 本地打包
$ npm run release:[patch/minor/major] // 发布npm（patch/minor/major三选一，代表对应版本号+1）
```

**Tips:**

1.  由于 Jest 无法测试资源引入场景，所以引入了`node-canvas`实现测试需求。[如何下载 node-canvas？](https://github.com/Automattic/node-canvas/)
2.  rimraf、rollup、jest 三个依赖需要全局安装
3.  发布前，需要先登录 npm 账号`npm login`，并还原 npm 默认源：`npm config set registry https://registry.npmjs.org/`

## 项目架构

- 语言：Javascript
- 构建工具：[Rollup](https://www.rollupjs.com/)
- 测试框架：[Jest](https://www.jestjs.cn/)
- 规范约束：[Typescript](https://www.tslang.cn/) | [ESLint](https://eslint.bootcss.com/) | [prettier](https://prettier.io/)
- 编译目标：UMD 和 ES 双模块，使用 babel 将 es6 语法转换 es5，扩展兼容性

## 项目规范

### 文件规范

- 源码文件必须建立在 src 目录下
- 测试用例文件必须建立在 test 目录下
- 文件名采用 kebab-case 命名方式

### 代码规范

- 每个函数/类/类型必须添加注释，在其上方加入`/** 对应注释 */`，这样可以获得 Ide 更友好的提示

示例代码：

```javascript
/**
 * 文件异步转换为base64
 * @param file 文件对象
 * @returns base64字符串
 */
public fileToBase64(file: File): string {
  // done
}
```

- 针对于复杂逻辑，仅在关键处添加上注释即可
- 原则上不声明 any 类型
- 善用枚举，以增强可读性
- 以`async/await`代替`promise.then().catch()`写法
- 模块内的必要声明类型必须导出
- 变量/函数采用`camelCase`命名方式，类/ts 类型采用`PascalCase`命名方式

### 测试用例规范

- 每个源码模块文件必须有对应的测试用例
- 原则上测试覆盖率指标必须达成：Stmts-100%、Branch-100%、Funcs-100%、Lines-100%（`catch`块内如果没有必要逻辑可以不进行测试）
- 测试用例使用`describe`包裹
- 每个`test`函数描述尽量清晰明了，语义化

## 维护者

[@黄云辉](http://git.e479.cn/huangyunhui)

## 使用许可

[MIT](LICENSE) © 成都国星宇航科技有限公司

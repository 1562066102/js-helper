# 藏宝图-前端 JS 公共方法库

服务于藏宝图前端项目快捷使用，避免重复造轮子

> 支持导出 UMD 和 ES 两种格式引入

## 安装

### 浏览器引入：

```html
<script src="lib/index.js" />
<script>
  const number = random(0, 10); // 生成0~10的随机整数
</script>
```

> 需要自行将打包后生成的 lib 目录下的 index.js 文件移植到你的项目中，再引入即可

### 使用 npm：

```shell
$ npm i @gx-solution/tools
```

示例：

```javascript
import {firstLetterUpperCase} from '@gx-solution/tools';
const str = firstLetterUpperCase('aaa'); // 生成首字母大写字符串Aaa
```

## 维护者

[@黄云辉](http://git.e479.cn/huangyunhui)

## 使用许可

[MIT](LICENSE) © 成都国星宇航科技有限公司

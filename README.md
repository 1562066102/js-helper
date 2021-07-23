# Javascript 常用方法库

用于前端项目便捷使用部分常用方法，避免重复造轮子

> 支持导出 UMD 和 ES 两种格式引入

## 安装

### 浏览器引入：

```html
<script src="https://cdn.jsdelivr.net/npm/@huangyunhui/js-helper@x.x.x/lib/js-helper.js">
  // 注意@x.x.x替换成真实版本号
</script>
<script>
  const number = jsHelper.random(0, 10); // 生成0~10的随机整数
</script>
```

### 使用 npm：

```shell
$ npm i @huangyunhui/js-helper --save
```

方法使用示例：

```javascript
import {firstLetterUpperCase} from '@huangyunhui/js-helper';
const str = firstLetterUpperCase('aaa'); // 生成首字母大写字符串Aaa
```

## 维护者

[@黄云辉](https://github.com/1562066102)

## 使用许可

[MIT](LICENSE) Copyright (c) 2021-present, Huangyunhui

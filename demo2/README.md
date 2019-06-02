# Demo2

## How to run

方法一：

```bash
.\node_modules\.bin\webpack
```

方法二：

```bash
npm run build
```

其中：

- webpack 会默认带上 `--config webpack.config.js`
- package.json 中的 script 会自动定位到 `.\node_modules\.bin\` 目录下

## 解析 ES6

```bash
cnpm i @babel/core @babel/preset-env babel-loader -D
```

## 解析 JSX

```bash
cnpm i @babel/preset-react -D
```

## 构建前清理 dist 文件夹

```bash
cnpm i clean-webpack-plugin -D
```

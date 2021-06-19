# `babel-plugin-vconsole`

> 在打包过程中，用于移除项目中的vconsole

## install
```
  npm i babel-plugin-vconsole -D

  yarn add babel-plugin-vconsole -D

  cnpm i babel-plugin-vconsole -D

```

## Usage

在babel的配置文件中添加插件`babel-plugin-vconsole`

```
const babelPluginVConsole = require('babel-plugin-vconsole');

// TODO: DEMONSTRATE API

 plugins: [
   ...(process.env.NODE_ENV === 'development'?['babel-plugin-vconsole']:[])
 ]
```

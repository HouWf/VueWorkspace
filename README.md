# VueWorkspace
基于vue.config.js的多项目管理空间，支持多项目共用一套css、js、组件功能

增加vue-router基础用法  === 见projectA

增加vuex基础用法及相关注释说明 === 见projectA

一切都在config中

自用基础项目，借鉴于：http://t.zoukankan.com/phoebeyue-p-10303739.html。感谢大佬提供的方式。

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### 运行/打包projectA
```
npm run d projectA 
npm run b projectA 
```
### 运行/打包projectB
```
npm run d projectB
npm run b projectB
```


### 新增项目步骤
1. src/projects文件夹中增加项目
2. config/projectConfig中增加项目配置
3. 执行npm run d xxx编译项目，npm run b xxx打包项目

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

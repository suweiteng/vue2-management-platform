# vue2-management-platform（请点右上角star）
vue2.0 + elementUI 后台管理平台
访问： https://suweiteng.github.io/vue2-management-platform

# 概述
最近学习vue2.0和elementUI的使用，在各种文档的帮助下，尝试编写了一个后台管理平台。
目前数据采用mock.js模拟，比较简略。后续会进行细化并增加登录等功能。
# 依赖项版本


~~"vue": "^2.1.0",~~

~~"vue-router": "^2.1.3",~~ // vue.js官方路由
    
~~"axios": "^0.16.1",~~   // 官方已不再推荐使用vue-resource，如今推荐axios。

~~"element-ui": "^1.2.3",~~ // 样式库

  "mockjs": "^1.0.1-beta3", //模拟数据使用
     
     更新：vue已升级至2.5.X，elementUI已升级至2.2，其他相关依赖也已升级，
     具体请参考https://github.com/suweiteng/vue2-management-platform/blob/master/package.json
     
    
    
# 特别提醒
 为了便于项目在github pages直接在线预览，部分配置与本地运行配置不一样。目前有2处，代码中已有详细说明，遇到问题可自行修改：
 
 一是在`config/index.js`中的`assetsPublicPath: '/vue2-management-platform/'`,本地打包可改为`assetsPublicPath: '/'`
 
 二是在UE编辑器的配置`static/UE/ueditor.config.js`中，本地开发写`window.UEDITOR_HOME_URL = "/static/UE/"`即可。
# 更新
### 增加富文本编辑器(beta1.6)

2017年7月11日：集成Ueditor富文本编辑器，作为公共组件。

2017年7月13日：编辑器支持同页面多次调用。

2018年1月23日：编辑器支持小功能：获取纯文本(解决[博客](http://www.cnblogs.com/dmcl/p/7152711.html/ "博客")中40L评论的疑问)。

教程：http://www.cnblogs.com/dmcl/p/7152711.html

效果如下：
![](http://images2015.cnblogs.com/blog/1023587/201707/1023587-20170711213454306-1844528970.png)
在线体验本功能：https://suweiteng.github.io/vue2-management-platform/#/editor

### 版本升级(beta2.0)  

2018年2月25日：vue已升级至2.5.X，elementUI已升级至2.2，其他相关依赖也已升级。(beta2.0)  

效果如下：![](https://images2018.cnblogs.com/blog/1023587/201802/1023587-20180226174230802-1767157998.png)


2018年2月26日：增加打包分析webpack-bundle-analyzer；优化导出功能。(beta2.1)  

2018年4月2日：修复ElementUI升级2.x引起的弹窗问题:[issue 10](https://github.com/suweiteng/vue2-management-platform/issues/10) 

 
 
# 截图预览
![](http://images2015.cnblogs.com/blog/1023587/201704/1023587-20170417163412243-1686976549.png)
![](http://images2015.cnblogs.com/blog/1023587/201704/1023587-20170417163442727-1202100665.png)
![](http://images2015.cnblogs.com/blog/1023587/201704/1023587-20170417163508102-673769802.png)
![](http://images2015.cnblogs.com/blog/1023587/201704/1023587-20170424111627287-2091967244.gif)
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
请点右上角star，谢谢

![](https://images2018.cnblogs.com/blog/1023587/201802/1023587-20180226133036435-1544066188.png)

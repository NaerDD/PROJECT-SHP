## vue-cli脚手架初始化。
### 1. node + webpack +淘宝镜像

### 2. node_module文件夹:项目依赖文件夹

### 3. public文件夹:
  一般放置一些静态资源(图片)，需要注意，放在public文件夹中的静态资源,
  webpack进行打包的时候会原封不动放到dist文件夹中。

### 4. src文件夹(程序员源代码文件夹):

  1. assets文件夹:一般放置静态资源(一般放置多个组件共用的静态资源)
  -assets文件夹里面静态资源，在webpack打包的时候，webpack会把静态资源当成一个模块，打包JS文件里面。

  2. components文件夹:一般放置的是非路由组件(全局组件)

  3. App.vue:唯一的根组件，Vue当中的组件(.vue)

  4. main.js 入口文件

### 5.babel.config.js 配置文件(babel相关)

### 6.package.json文件 项目的信息 项目的依赖 项目怎么运行

### 7.package-lock.json 缓存文件

## 项目的其他配置

### 自动打开
  "scripts": {
    "serve": "vue-cli-service serve --open",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },
### eslint校验功能关闭
  在根目录创建一个vue.config.js
  module.exports = {
  //关闭eslint
  lintOnSave:false
}
### 文件夹简写方法，配置别名

jsconfig.json配置别名@提示

{
  "compilerOptions":{
    "baseUrl:""./",
    "paths":{
        "@/":["src/*"]
    }
  },
  "exclude":["node_modules","dist"]
}



## 项目路由的分析
vue-router
前端所谓路由:KV键值对。
key：URL(地址栏中的路径)
value:相应的路由组件
注意:项目 上中下结构

Home首页路由组件、Search路由组件、login登录路由
非路由组件:
Header[首页、搜索页]
Footer[在首页、搜索页]，但是在登录|注册页面是没有的

## 完成非路由组件Header与Footer业务
在项目中 不再以HTML+CSS为主 主要搞业务、逻辑
1书写静态页面(HTML+CSS)
2拆分组件
3获取服务器的数据动态展示
4完成相应的动态业务逻辑

注意1 创建组件的时候，组件的结构 + 组件的样式 + 图片资源

注意2 项目采用less样式 浏览器不识别less样式 需要通过less、less-loader进行处理
less，把less编程css样式

注意3 如果想让组件识别less样式，需要再style标签的身上加上lang=less

4.1使用组件的步骤(非路由组件)
-创建或者定义
-引入
-注册
-使用


5 路由组件的搭建
vue-router
在上面分析的时候,路由组件应该有4个Home/Search/login/register
安装Vue-router时候 用vue2的需要在vue-router后面加@3，不然路由不能用

-components文件夹 经常放置的非路由组件(公用全局组件)
-pages|views文件夹:经常放置路由组件
5.1配置路由
项目当中配置的路由一般放置在router中

5.2总结
1. 
-components文件夹 经常放置的非路由组件(公用全局组件)
-pages|views文件夹:经常放置路由组件
2. 
路由组件一般需要在router文件夹中进行注册(使用的即为组件的名字)，
非路由组件在使用的时候，一般是以标签的形式使用
3. 
注册完路由 所有组件身上都有$route $router属性

$route:一般获取路由信息[路径、query、params等等]
$router:一般进行编程式导航进行路由跳转[push|replace]

5.3路由的跳转?
路由的跳转有两种形式：
声明式导航router-link,可以进行路由的跳转
编程式导航push|replace,可以进行路由跳转

编程式导航：声明式能做 它也能做 还可以做一些其他的业务逻辑

6)Footer组件显示与隐藏
v-if v-show
Footer组件:在Home、Search显示Footer组件
Footer组件:在登录、注册时隐藏Footer组件

6.1根据组件身上的$route获取当前的路由信息,通过路由路径判断Footer显示隐藏
6.2配置路由的时候 可以给路由添加路由元信息[meta] 路由需要配置对象，key不能乱写


8）路由传参

8.1：路由跳转有几种方式？
比如 A->B
声明式导航：router-link(必须要有to属性),可以实现路由的跳转
编程式导航:利用的式组件实例的$router.push|replace方法，可以实现路由的跳转。(可以书写一些自己的业务)

8.2路由传参，参数有几种写法
params参数：属于路径当中的一部分，需要注意，在配置路由的时候，需要占位
query参数：不属于路径当中的一部分 类似于ajax中的queryString /home?k=v&kv=,不需要占位

9)路由传参相关面试题
1:路由传递参数(对象写法) path是否可以结合params参数一起使用？
2:如何指定params参数可传可不传?
3:params参数可以传递也可以不传递,但是如果传递是空串,如何解决?
4:路由组件能不能传递props数据？





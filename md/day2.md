1:编程式路由跳转到当前路由(参数不变)，多次执行会抛出NavigationDuplicated的警告错误?
--路由跳转有两种形式:声明式导航、编程式导航
--声明式导航没有这类问题，因为vue-router底层已经处理好了
1.1为什么编程式导航进行路由跳转的时候，就有这种警告错误？
"vue-router":"^3.5.3":最新的vue-router引入promise

function push(){
  return new Promise((resolve,reject)=>{

  })
}

1.2通过给push方法传递相应的成功、失败的回调函数，可以捕获到当前错误，可以解决。

1.3 this.$router.push({name:"search",params:{keyword:this.keyword},query:{k:this.keyword.toUpperCase()}},()=>{},()=>{});
这种写法：治标不治本 将来在别的组件当中push|replace,编程式导航还是有类似的错误。

1.4
this:当前组件实例(search)
this.$router属性:当前的这个属性，属性值VueRouter类的一个实例，当在入口文件注册路由的时候，给组件实例添加$router|$route属性
push:VueRouter类的一个实例

2:Home模块组件拆分
--先把静态页面完成
--拆分出静态组件
--获取服务器的数据进行展示
--动态业务

3:三级联动组件完成
---由于三级联动在HOME、Search、Detail 把三级联动注册为全局组件。
只需要注册一次 就可以在项目任意地方使用

4:完成其余静态组件
HTML+CSS+图片资源 ---信息[结构、样式、图片资源]

5：POSTMAN测试接口

6:axios二次封装
XMLHttp、fetch、JQ、axios
6.1为什么要二次封装axios？
请求拦截器、响应拦截器:请求拦截器，可以在发请求之前处理一些业务、响应拦截器，当服务器数据返回以后，可以处理一些事情

6.2在项目当中经常出现API文件夹[axios]
接口当中:路径都带有/api

baseURL:"/api"
发请求的路径都带上/api
http://xxx.xxx:8000/api

7:接口统一管理
 项目小 完全可以在组件的生命周期函数中发送请求
 项目大 axios.get('xxx')

7.1跨域问题
协议 域名 端口号不同 就是跨域问题
http://localhost:8080/#/home ---前端项目本地服务器
http://39.98.123.211 ---后台服务器
解决方案
JSONP、CROS、代理

8:nprogress进度条的使用
start done 进度条开始 结束
颜色可以修改

9：vuex状态管理库
9.1vuex是什么？

vuex是官方提供的一个插件，状态管理库，集中式管理项目中组件共用的数据。
小项目不需要vuex
大项目 组件多 数据多 数据维护费劲 使用vuex
四个状态
state
mutations
actions
getters

9.2 vuex的基本使用

9.3vuex实现模块式开发
如果项目过大,组件过多,接口/数据也很多,可以让Vuex实现模块式开发
模拟state存储数据
{
  home:{},
  search:{}
}

10:完成TypeNav三季联动展示数据业务

1)完成一级分类动态添加背景颜色

第一种方案 采用样式完成 hover
第二种方案 v-for遍历检测鼠标移入事件 加入index和current相同时设置背景色


2)通过JS控制二三级商品分类的显示与隐藏
最开始的时候,是通过css样式display:block|none显示与隐藏二三级商品分类

3)演示卡顿现象
正常:事件触发非常频繁，而且每一次的触发，回调函数都要去执行(如果时间很短，而回调函数内部有计算，那么很可能出现浏览器卡顿)
节流:在规定的间隔时间范围内不会重复触发回调，只有大于这个时间间隔才会触发回调，把频繁触发变为少量触发
防抖:前面的所有的触发都被取消，最后一次执行在规定的时间之后才会触发，也就是说如果连续快速的触发 只会执行一次


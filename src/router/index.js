//配置路由的地方
import Vue from 'vue';
import VueRouter from 'vue-router';
//使用插件
Vue.use(VueRouter);
//引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Register from '@/pages/Register'
import Login from '@/pages/Login'
//先把VueRouter原型对象的push，保存一份
let originPush = VueRouter.prototype.push;
let originreplace = VueRouter.prototype.replace;

//重写push|replace
//第一个参数：告诉原来的push方法，你往哪里跳(传递哪些参数)
VueRouter.prototype.push = function(location,resolve,reject){
    if(resolve && reject){
      //call||apply区别
      //相同点:都可以调用函数一次，都可以篡改函数的上下文一次
      //不同点:call与apply传参数 call用逗号隔开 apply方法执行 传递数组
      originPush.call(this,location,resolve,reject);
    }else{
      originPush.call(this,location,()=>{},()=>{});
    }
 }
VueRouter.prototype.replace = function(location,resolve,reject){
    if(resolve && reject){
      //call||apply区别
      //相同点:都可以调用函数一次，都可以篡改函数的上下文一次
      //不同点:call与apply传参数 call用逗号隔开 apply方法执行 传递数组
      originreplace.call(this,location,resolve,reject);
    }else{
      originreplace.call(this,location,()=>{},()=>{});
    }
 }
//配置路由
export default new VueRouter({
  routes:[
    {
      path:"/home",
      component:Home,
      meta:{show:true}
    },
    {
      path:"/search/:keyword?",
      component:Search,
      meta:{show:true},
      name:"search",
      //路由组件能不能传递props数据？ 能
      //布尔值写法:params 只能传递params参数 不能传递query参数
      // props:true
      //对象写法:额外给路由组件传递一些props
      // props:{a:1,b:2}
      //函数写法：可以将params参数、query参数，通过props传递给路由组件
      props:($route)=>{
        return {keyword:$route.params.keyword,k:$route.query.k}
      }
    },
    {
      path:"/register",
      component:Register
      //不写meta默认false
    },
    {
      path:"/login",
      component:Login
    },
     //重定向 在项目跑起来的时候，访问立马定向到首页
    {
     path:'*',
     //重定向 在项目跑起来的时候，访问立马定向到/home页面下
     redirect:"/home"

    }
  ]
})
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
//配置路由
export default new VueRouter({
  routes:[
    {
      path:"/home",
      component:Home,
      meta:{show:true}
    },
    {
      path:"/search/:keyword",
      component:Search,
      meta:{show:true},
      name:"search"
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
//配置路由的地方
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
//引入store
import store from '@/store';

//使用插件
Vue.use(VueRouter);


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
//配置路由 对外暴露VueRouter的实例
let router = new VueRouter({
  routes,
  scrollBehavior(to,from,savedPosition){
    //返回这个y=0,代表回到最上方
    return {y:0}
  },
});
//全局首位：前置首位(在路由跳转之间进行判断)
router.beforeEach(async (to,from,next)=>{
  //to可以获取到你要跳转到那个路由信息
  //from可以获取到你从哪个路由来
  //next放行函数 next()直接放行 next(path)放行到指定路由   next(false);
  //用户登陆了才有token
  // next();
  let token = store.state.user.token;
  //用户信息
  let name = store.state.user.userInfo.name;
  if(token){
    //阻止用户已经登陆还去login
    if(to.path=='/login'){
      //原地不动
      next('/')
    }else{
      //登陆了但是去的不是login
      if(name){
        next();
      }else{
        //没有用户信息,派发action让仓库存储用户信息再跳转
        try {
          //获取用户信息成功
          await store.dispatch('getUserInfo');
          next();
        } catch (error) {
          //token失效了 获取不到用户的信息 重新登陆
          //清除token
          await store.dispatch('userLogout');
          next('/login');
        }
      }
    }
  }else{
    //没登陆 后期再处理
    next();
  }
  
  

})

export default router;
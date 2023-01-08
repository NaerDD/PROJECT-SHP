//配置路由的地方
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

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
//配置路由
export default new VueRouter({
  routes,
  scrollBehavior(to,from,savedPosition){
    //返回这个y=0,代表回到最上方
    return {y:0}
  },
})
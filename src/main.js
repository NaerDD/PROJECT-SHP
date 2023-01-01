import Vue from 'vue'
import App from './App.vue'
//三级联动组件---全局组件
import TypeNav from '@/pages/Home/TypeNav'
//第一个参数 全局组件的名字 第二个参数：哪一个组件
Vue.component(TypeNav.name,TypeNav);

Vue.config.productionTip = false
//引入路由
import router from './router'

new Vue({
  render: h => h(App),
  //注册路由:地下的写法KV一致省略V【router小写的】
  //注册路由信息：当这里书写router的时候，组件身上都拥有$route,$router属性
  router
}).$mount('#app')

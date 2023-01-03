4)函数的防抖与节流
节流:在规定的间隔时间范围内不会重复触发回调，只有大于这个时间间隔才会触发回调，把频繁触发变为少量触发

防抖:前面的所有的触发都被取消，最后一次执行在规定的时间之后才会触发，也就是说如果连续快速的触发 只会执行一次

5)完成三级联通节流的操作
//按需引入功能函数
import throttle from 'lodash/throttle';
//throttle回调函数别用箭头函数，可能出现上下文this
changeIndex:throttle(function(index){
  this.currentIndex = index;
  },50),

6)三级联动组件的路由跳转与传参

三级联动用户可以点击的:一级分类,二级分类,三级分类,点击时
Home模块跳转到Search模块,一级会把用户选中的产品(产品的名字 ID)在路由跳转的时候,进行传递.

路由跳转:
声明式导航:router-link
编程式导航:push|replace

三级联动:如果使用声明式导航,可以实现路由跳转与传参
但是会卡顿
router-link:可以一个组件,当服务器的数据返回之后,循环出很多的router-link组件[创建组件实例的]
一瞬间创建了很多组件实例 很耗内存,出现了卡顿

7)完成三级联动路由跳转与传递参数

this.$router.push({name:"search",query:{categoryName:'xxx',2id:'xx'}})
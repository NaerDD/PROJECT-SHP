<template>
  <div>
    <Header></Header>
    <!-- 路由组件的出口 -->
    <router-view></router-view>
    <!-- 在Home、Search显示的 在登录注册隐藏 -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
  
</template>

<script>
//引入
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name:'',
  components:{
    Header,
    Footer
  }
}
</script>

<style scoped>

</style>
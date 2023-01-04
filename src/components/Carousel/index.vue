<template>
      <div class="swiper-container" ref="cur">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(carousel, index) in list" :key="carousel.id">
          <img :src="carousel.imgUrl"/>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
</template>

<script>
import Swiper from 'swiper';
export default {
  name:'Carsousel',
  props:['list'],
  watch:{
    list:{
      //立即监听:上来立即监听一次.因为watch监听不到list数据变化,从来没发生变化(数据是父亲给的)
      immediate:true,
      handler(){
        //v-for动态渲染的结构是没办法确定的,因此还是需要nextTick
        this.$nextTick(()=>{
    //执行这个回调时,保证服务器数据回来了,v-for执行完毕了[轮播图的结构一定有了]
    var mySwiper = new Swiper(
     this.$refs.cur,
    
    {
    // direction: 'vertical', // 垂直切换选项 默认水平
    loop: true, // 循环模式选项
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      //点击小球切换
      clickable:true,
    },
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  })
    })
        
      }
    }
  }
}
</script>

<style>

</style>
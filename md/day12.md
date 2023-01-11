1 交易页面完成(商品清单)
动态展示服务器数据完成

2 提交订单
2.1支付的静态组件
2.2提交订单按钮，还需要向服务器发一次请求[把支付信息传递给服务器]
2.3不用vuex


3 获取支付信息(不适用vue)
3.1    async mounted(){
      await this.$API.reqPayInfo(this.orderId);)
      生命周期中别用async
3.2 获取支付信息

4 elementUI使用+按需引入
antd:React Vue 
elementUI按需引入，配置文件发生变化，项目需要重启

5 二维码生成 qrcode

6 支付业务

7 个人中心
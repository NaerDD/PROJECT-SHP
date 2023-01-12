1)个人中心完成
面试的时候:是否封装过组件、分页器、日历
个人中心当中:分页器

2)全局守卫未登录访问 ，交易相关(trade)、支付相关(pay、paysuccess)、用户中心(center)相关跳转到 登录页面

3)路由独享守卫
只有从购物车界面才能跳转到交易页面《创建订单)
只有从交易页面《创建订单》页面才能跳转到支付页面
只有从支付页面才能跳转到支付成功页面

4)图片懒加载
https://www.npmjs.com/package/vue-lazyload

5)vee-validate 基本使用
第一步:插件安装与引入
cnpm i vee-validate@2 --save 安装的插件安装 2 版本的

import VeeValidate from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'         
Vue.use(VeeValidate)


第二步：提示信息
VeeValidate.Validator.localize('zh CN'，{
  messages:{
...zh_CN.messages,
is: (field) =>${field}必须与密码相同 //修改内置规则的 message，让确认密码和密码相同
attributes:[// 给校验的 field 属性名映射中文名称
phone: 手机号
code:“验证码
password:密码
password1:确认密码，
isCheck:协议
}
})

6)路由懒加载
  路由懒加载
  当打包构建应用时,js包会变得非常大 影响页面加载
  把不同路由对应的组件分割成不同的代码块,然后当路由被访问的时候才加载对应组件,这样就更加高效了


7)打包上线
npm run build 项目打包过后 代码都是经过压缩加密,如果运行时报错,输出的错误信息无法准确得知哪里出错
有了map文件就可以精确的知道哪里出错了
如果该文件项目不要可以直接去除掉
vue.config.js配置
productionSourceMap:false

7.2购买服务器
1阿里云 2腾讯云 等等

2设置安全组,让服务器一些端口号打开

3利用xshell工具登陆服务器
复习:
1)商品分类的三级列表由静态变为动态形式[获取服务器数据:解决跨域问题] 代理服务器
2)函数防抖与节流[面试频率很高]
3)路由的跳转:声明式导航(router-link 耗内存 卡顿).编程式导航(事件委派(给子元素a绑定属性 给123级标签绑定属性))
编程式导航解决这个问题:自定义属性

1)开发Search模块中的TypeNav商品分类菜单(过渡动画效果)
过渡动画:前提组件|元素务必要有v-if|v-show指令才可以进行过渡动画

2)对三级列表进行优化
在APP根组件当中发请求[根组件mounted]执行一次

3)合并params与query参数

4)开发Home首页当中的ListContainer组件与Floor组件?
服务器返回的数据(接口)只有商品分类菜单数据 没有ListContainer组件与Floor组件

mock数据(模拟):如果你想mock数据 需要用到mock.js

使用步骤:
1)在项目中src文件夹中创建mock文件夹
2)准备JSON数组 格式化一下 有空格跑不起来
3)把mock数据需要的图片放到public文件夹中[public文件夹打包的时候 会把相应的资源原封到dist文件夹中]
4)创建mockServe.js 通过mockjs插件实现模拟数据
5)把mockServer.js文件在入口文件中引入(至少执行一次,才能模拟数据)


5)ListContainer组件开发重点?
cnpm i -s-save swiper@5

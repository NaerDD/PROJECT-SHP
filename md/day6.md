复习:
1)search模块需要的服务器数据,我们已经请求到了,而且存在Vuex仓库中
用过getters进行简化 getters为简化数据而生
2)商品列表 平台售卖属性 已经动态数据(来自于服务器)

1)动态开发面包屑中的分类名
编程是导航路由跳转(自己跳自己)

2)动态开发面包屑中的关键字
当面包屑中的关键字清楚后,需要让兄弟组件Header组件中的关键字清除
设计组件通讯
props[父传子]
自定义事件[子传父]
vuex[万能]
插槽[父传子]
pubsub-js:[万能]
$bus:全局事件总线

排序操作 order属性
1 综合 2 asc 升序 desc 降序
例子: "1:desc"
1:asc
1:desc
2:asc
2:desc

1.谁应该有类名:通过order属性值当中是包含1(综合)||2(价格)
2.谁应该有箭头:谁有类名谁有箭头
3.箭头用什么 ali图标库 icon-font
4.分页 
//引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Register from '@/pages/Register'
import Login from '@/pages/Login'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'

export default [
  {
    path: "/paySuccess",
    component: PaySuccess,
    meta: { show: true }
  },
  {
    path: "/pay",
    component: Pay,
    meta: { show: true }
  },
  {
    path: "/trade",
    component: Trade,
    meta: { show: true }
  },
  {
    path: "/shopcart",
    component: ShopCart,
    meta: { show: true }
  },
  {
    path: "/addcartsuccess",
    name:'addcartsuccess',
    component: AddCartSuccess,
    meta: { show: true }
  },
  {
    path: "/detail/:skuid",
    component: Detail,
    meta: { show: true }
  },
  {
    path: "/home",
    component: Home,
    meta: { show: true }
  },
  {
    path: "/search/:keyword?",
    component: Search,
    meta: { show: true },
    name: "search",
    //路由组件能不能传递props数据？ 能
    //布尔值写法:params 只能传递params参数 不能传递query参数
    // props:true
    //对象写法:额外给路由组件传递一些props
    // props:{a:1,b:2}
    //函数写法：可以将params参数、query参数，通过props传递给路由组件
    props: ($route) => {
      return { keyword: $route.params.keyword, k: $route.query.k }
    }
  },
  {
    path: "/register",
    component: Register
    //不写meta默认false
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: '*',
    //重定向 在项目跑起来的时候，访问立马定向到/home页面下
    redirect: "/home"

  }
]

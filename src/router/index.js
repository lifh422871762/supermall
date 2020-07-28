import Vue from 'vue'
import VueRouter from 'vue-router'

//以下代码解决路由地址重复点击的报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const Home = () => import('views/home/Home')
const Cart = () => import('views/cart/Cart')
const Category = () => import('views/category/Category')
const Profile = () => import('views/profile/Profile')

//1.安装插件
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home'
  },{
    path: '/home',
    component:Home,
    meta: {
      title: '首页'
    }

  },{
    path: '/cart',
    component:Cart,
    meta: {
      title: '购物车'
    }
  },{
    path: '/category',
    component:Category,
    meta: {
      title: '分类'
    }
  },{
    path: '/profile',
    component:Profile,
    meta: {
      title: '我的'
    }
  }
]


//2.创建router
const router = new VueRouter({
  routes,
  mode: 'history'
})

//给每个页面设置title //路由前置钩子函数，可用于做用户信息验证。
router.beforeEach((to, from, next) => {
  document.title=to.meta.title
  next()
})

//导出router
export default router

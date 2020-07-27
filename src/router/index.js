import Vue from 'vue'
import VueRouter from 'vue-router'

//以下代码解决路由地址重复点击的报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const Home = () => import('../views/home/Home')
const Cart = () => import('../views/cart/Cart')
const Category = () => import('../views/category/Category')
const Profile = () => import('../views/profile/Profile')

//1.安装插件
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home'
  },{
    path: '/home',
    component:Home
  },{
    path: '/cart',
    component:Cart
  },{
    path: '/category',
    component:Category
  },{
    path: '/profile',
    component:Profile
  }
]


//2.创建router
const router = new VueRouter({
  routes,
  mode: 'history',

})

//导出router
export default router

import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Cart from '../components/Cart/Cart'
import OnePage from '../components/OnePage/OnePage'
import ShopDetail from '../components/ShopDetail/ShopDetail'
import Order from '../components/Order/Order'

Vue.use(Router)
 
export default new Router({
  routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/cart',
            name: 'Cart',
            component: Cart,
            meta: {
                showFooter: true
            },
        },
        {
            path: '/onepage',
            component: OnePage
        },
        {
            path: '/shopDetail',
            component: ShopDetail
        },
        {
            path: '/order',
            component: Order,
            meta: {
                showFooter: true
            },
        },
        {
            path: '/userLogin',
            name: 'userLogin',
            meta: {
                showFooter: true,
                showHeader: true
            },
            component: resolve => void(require(['../components/user/userLogin.vue'], resolve)),
        },
        {
            path: '/userRegister',
            name: 'userRegister',
            meta: {
                showFooter: true,
                showHeader: true
            },
            component: resolve => void(require(['../components/user/userRegister.vue'], resolve)),
        },
        {
            path: '/userCont',
            name: 'userCont',
            component: resolve => void(require(['../components/user/userCont.vue'], resolve)),
        },
        {
            name: 'search',
            path: '/search/:data',
            component: resolve => void(require(['../components/search.vue'], resolve))
        },
        {
            name: 'OnePage',
            path: '/OnePage/:data',
            component: resolve => void(require(['../components/OnePage/OnePage.vue'], resolve))
        },
        {
            name: 'eye',
            path: '/cosmetics/eye',
            component: resolve => void(require(['../components/cosmetics/eye.vue'], resolve))
        },
        {
            name: 'face',
            path: '/cosmetics/face',
            component: resolve => void(require(['../components/cosmetics/face.vue'], resolve))
        },
        {
            name: 'commit',
            path: '/commit/:data',
            component: resolve => void(require(['../components/commit.vue'], resolve)),
            meta: {
                showFooter: true,
            },
        },
  ]
})

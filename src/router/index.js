import Vue from "vue";
import Router from 'vue-router'
// import Home from '../components/Home.vue'

Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            redirect:'/login',
            component:()=> import('@/components/Login')
        },
        // 路由懒加载
        {
            path:'/login',
            name:'Login',
            component:()=> import('@/components/Login')
        },
        // 路由延迟加载
        {
            path:'/home',
            // component:Home
            // component:()=> import('@/components/Home')
            component : resolve => require(['@/components/Home'],resolve)
        },
    ],
    mode:'history'
})
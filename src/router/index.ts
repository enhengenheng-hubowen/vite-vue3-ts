import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from '@/views/home.vue'

const routers: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/pageOne',
        name: 'pageOne',
        component: () => import('@/views/PageOne.vue') // 懒加载组件
    },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes: routers
})

export default router
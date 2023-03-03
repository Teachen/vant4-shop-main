/*
 * @Author: CJY
 * @Date: 2023-03-03 16:44:13
 * @LastEditors: CJY
 * @LastEditTime: 2023-03-03 17:27:03
 * @Description: 
 * @FilePath: \vant4-shop-main-h5\src\router\index.ts
 */
// 1 引入所需方法
// 路由创建：createRouter
// 路由模式(两者任选其一)：createWebHistory - history模式、createWebHashHistory - hash模式
// RouteRecordRaw：意为路由原始信息 （使用vue3+js的不用引入）
import {createRouter,createWebHistory,createWebHashHistory,RouteRecordRaw} from 'vue-router';
import About from '@/views/about.vue'
import Home from '@/views/home.vue'
// 设置路由规则
const routes:Array<RouteRecordRaw> = [
    {
        path:'/About',
        name: 'About',
        component: About
    },    
    {
        path:'/Home',
        name: 'Home',
        component: Home
    },
    {
        path: '/',
        redirect: '/Home'
    }
];
 
// 设置路由
const router = createRouter({
    routes,
    //路由模式：history
    history:createWebHistory()
    //路由模式：hash
    // history:createWebHashHistory()
});

// 导出路由
export default router;
import Vue from 'vue'
import Router from 'vue-router'
// 底部导航页
import Home from '@/pages/Home'
import Market from '@/pages/Market'
import Cart from '@/pages/Cart'
import Mine from '@/pages/Mine'
// 顶部导航页
import Food from '@/pages/Food'
import Cook from '@/pages/Cook'
import Topic from '@/pages/Topic'
import Scene from '@/pages/Scene'
import Community from '@/pages/Community'
import Activity from '@/pages/Activity'
import Newuser from '@/pages/Newuser'
// 表单页面
import Login from '@/pages/Login'
import Form from '@/pages/Form'

// 使用插件
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home //首页--掌厨
        },
        {
            path: '/market',
            name: 'Market',
            component: Market //市集
        },
        {
            path: '/cart',
            name: 'Cart',
            component: Cart //购物车
        },
        {
            path: '/food',
            name: 'Food',
            component: Food //美食
        },
        {
            path: '/cook/:type/:index',
            name: 'Cook',
            component: Cook //食材
        },
        {
            path: '/topic',
            name: 'Topic',
            component: Topic //专题
        },
        {
            path: '/scene',
            name: 'Scene',
            component: Scene //场景
                // children: [{
                //         path: 'today',
                //         component: require('../pages/scenes/Happy') //今日新品
                //     },
                //     {
                //         path: 'night',
                //         component: require('../pages/scenes/Night') //下午茶/宵夜
                //     },
                //     {
                //         path: 'happy',
                //         component: require('../pages/scenes/Happy') //幸福烘焙
                //     },
                //     {
                //         path: 'mango',
                //         component: require('../pages/scenes/Mango') //芒果
                //     }
                // ]
        },
        {
            path: '/community',
            name: 'Community',
            component: Community //社区
        },
        {
            path: '/activity',
            name: 'Activity',
            component: Activity //活动
        },
        {
            path: '/newuser',
            name: 'Newuser',
            component: Newuser //新手入门
        },
        {
            path: '/scenedetail',
            name: 'Scenedetail',
            component: require('../pages/Scenedetail') //场景详情页
        },
        {
            path: '*',
            name: 'Home',
            component: Home // 其他网址默认跳转窗口
        },
        {
            path: '/mine',
            name: 'Mine',
            component: Mine // 用户登录后的界面
                // children: [{
                //     path: 'form',
                //     component: require('../pages/Form')
                // }]
        },
        {
            path: "/login",
            name: 'Login',
            component: Login // 登录界面
        },
        {
            path: '/form',
            name: 'Form',
            component: Form //注册界面
        },
        {
            path: '/empty',
            name: 'Empty',
            component: require('../pages/Empty') //场景详情页
        },
        {
            path: '/mine/redbag',
            name: 'Redbag',
            component: require('../pages/mines/Redbag') //我的红包页
        },
        {
            path: '/mine/address',
            name: 'Address',
            component: require('../pages/mines/address') //添加收货地址页

        },
        {
            path: '/mine/shopcity',
            name: 'Shopcity',
            component: require('../pages/mines/shopcity') // 添加积分商城页
        },
        {
            path: '/home/search',
            name: 'Search',
            component: require('../pages/Search') // 搜索页面
        }
    ]
})
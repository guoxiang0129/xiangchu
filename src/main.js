// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
// 使用vue-swipe不需要使用Vue.use
// import VueSwiper from 'vue-swipe'
import VueSwiper from 'vue-awesome-swiper'
import Lazyload from 'vue-lazyload'
import store from './vuex/store'

Vue.use(Lazyload)
Vue.use(VueSwiper)

// 配置懒加载
Vue.use(Lazyload, {
    preLoad: 1.3,
    error: '',
    loading: './assets/loading'
})

// 将axios的方法赋值给Vue的原型
Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})
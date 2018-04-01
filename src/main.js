import Vue from 'vue'
import App from './App.vue'
import MuseUi from 'muse-ui'
import VueRouter from "vue-router"
import VueTouchRipple from "vue-touch-ripple"
import { Indicator } from "mint-ui"
import 'mint-ui/lib/style.css'
Vue.component(Indicator)
import VueAwesomeSwiper from 'vue-awesome-swiper'
import "swiper/dist/css/swiper.css"
import 'muse-ui/dist/muse-ui.css'
import routes from "./router/rouer-config"
import store from "./store/index" //??vuex
import "vue-touch-ripple/dist/vue-touch-ripple.css"
Vue.use(VueTouchRipple,{
    color:"black",
    opacity:"0.3",
    speed:3,
    transition:'ease-out'
})
Vue.use(VueRouter)
Vue.use(MuseUi)
Vue.use(VueAwesomeSwiper)
const router = new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    },
})
// router.beforeEach((to, from, next) => {
//   setTimeout(function(){
//     next()
//   },200)
// })
new Vue({
    store,
    router,
    el: '#app',
    render: h => h(App)
})
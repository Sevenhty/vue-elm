import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
export default new VueRouter({
    routes: [
        {
            path: "/msite",
            name: "msite",
            meta: {
                showFooter: true
            },
            component: () => import('./pages/Msite/Msite.vue')
        },
        {
            path: "/order",
            name: "order",
            meta: {
                showFooter: true
            },
            component: () => import('./pages/Order/Order.vue')
        },
        {
            path: "/profile",
            name: "profile",
            meta: {
                showFooter: true
            },
            component: () => import('./pages/Profile/Profile.vue')
        },
        {
            path: "/search",
            name: "search",
            meta: {
                showFooter: true
            },
            component: () => import('./pages/Search/Search.vue')
        },
        {
            path: "/login",
            name: "login",
            component: () => import('./pages/Login/Login.vue')
        },
        {
            path: "/choosolocation",
            name: "choosolocation",
            component: () => import('./pages/ChooseLocation/ChooseLocation.vue')
        },
        {
            path: "/selectlocation",
            name: "selectlocation",
            component: () => import('./pages/SelectLocation/SelectLocation.vue')
        },
        {
            path: "/balance",
            name: "balance",
            component: () => import('./pages/SingleProfile/balance.vue')
        },
        {
            path: "/integral",
            name: "integral",
            component: () => import('./pages/SingleProfile/integral.vue')
        },
        {
            path: "/servicecenter",
            name: "servicecenter",
            component: () => import('./pages/SingleProfile/serviceCenter')
        },
        {
            path: "/loading",
            name: "loading",
            component: () => import('./pages/SingleProfile/loadingApp')
        },
        {
            path: "/singleshop",
            name: "singleshop",
            component: () => import('./pages/SingleShop/SingleShop')
        },
        {
            path: "/",
            redirect: "/choosolocation",
        },
    ]
})
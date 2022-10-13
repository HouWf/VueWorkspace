
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const home = () => import('../pages/home.vue')
const about = () => import('../pages/about.vue')

const routes = [
    {
        path: "/",
        name: "home",
        component: home,
        meta: {
            title: "首页"
        }
    },
    {
        path: "/about",
        name: "about",
        component: about,
        meta: {
            title: "关于"
        }
    }
]

const router = new Router({
    // mode: 'hash',
    base: process.env.BASE_URL,
    routes:routes
})


router.beforeEach((to, from, next)=>{
    next()
    // return true  
    // or next()
    // or return {path:"/login", replace: true}
})

router.beforeResolve((to, from, next)=>{
    next()
})

router.afterEach((to, from) => {
    if(to.meta.title){
        document.title = to.meta.title
    }
    return true
})

router.onError(err=>{
    console.log('====================================');
    console.log("router error: " + err);
    console.log('====================================');
})

export default router
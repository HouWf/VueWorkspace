
import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

const home = ()=>import("../pages/home")
const about = ()=>import("../pages/about")

const routes = [
    {
        path:"/",
        name:"home",
        component:home,
        meta:{
            title:"首页"
        }
    },
    {
        path:"/about",
        name:"about",
        component:about,
        meta:{
            title:"关于"
        }
    }
]

const router = new Router({
    base: process.env.BASE_URL,
    routes
})

export default router
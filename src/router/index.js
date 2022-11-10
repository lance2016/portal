import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const index = () => import('@/views/index/index');
const starSky = () => import('@/views/socool/starSky');
const parallaxScroll = () => import('@/views/socool/parallaxScroll');
const constantRoutes = [
    { path: "/", redirect: "/index" },
    {
        path: "/index",
        name: "index",
        component: index
    },
    {
        path: "/starSky",
        name: "starSky",
        component: starSky
    },
    {
        path: "/parallaxScroll",
        name: "parallaxScroll",
        component: parallaxScroll
    },
]

const createRouter = () => new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})

const router = createRouter();

//释放路由
export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/Layout.vue'
Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
const routes = [{
        path: '/Home',
        name: 'Home',
        component: () =>
            import ('../views/Home.vue')
    }, {
        path: '/Login',
        name: 'Login',
        component: () =>
            import ('../views/Login/Login.vue')

    },
    {
        path: '/Logon',
        name: 'Logon',
        component: () =>
            import ('../views/Login/Logon.vue')

    },
    {
        path: '',
        component: Layout,
        children: [{
                path: '/Homepage',
                name: 'Homepage',
                component: () =>
                    import ('../views/Homepage/Homepage.vue'),
                meta: {
                    prentpath: '/Homepage'
                },
            }, {
                path: '/Publish',
                name: 'Publish',
                component: () =>
                    import ('../views/Publish.vue'),
                meta: {
                    prentpath: '/Publish'
                },
            }, {
                path: '/Excle',
                name: 'Excle',
                component: () =>
                    import ('../views/Excle.vue'),
                meta: {
                    prentpath: '/Excle'
                },
            },
            {
                path: '/Have',
                name: 'Have',
                component: () =>
                    import ('../views/Have.vue'),

                children: [{
                        path: '/Compile',
                        name: 'Compile',
                        component: () =>
                            import ('../views/Compile.vue'),
                        meta: {
                            title: '已发布',
                            prentpath: '/Havepublished'
                        },
                    },
                    {
                        path: '/Havepublished',
                        name: 'Havepublished',
                        component: () =>
                            import ('../views/Havepublished.vue'),
                        meta: {
                            title: '已发布',
                            prentpath: '/Havepublished'
                        },
                    },
                    {
                        path: '/Look',
                        name: 'Look',
                        component: () =>
                            import ('../views/Look.vue'),
                        meta: {
                            title: '已发布',
                            prentpath: '/Havepublished'
                        },
                    },
                ]
            },
            {
                path: '/Upload',
                name: 'Upload',
                component: () =>
                    import ('../views/Upload.vue'),
                meta: {
                    prentpath: '/Upload'
                }
            },
            {
                path: '/Label',
                name: 'Label',
                component: () =>
                    import ('../views/Label.vue'),
                meta: {
                    prentpath: '/Label'
                }
            },
            {
                path: '/Statistics',
                name: 'Statistics',
                component: () =>
                    import ('../views/Statistics.vue'),
                meta: {
                    prentpath: '/Statistics'
                }
            },
            {
                path: '/Exit',
                name: 'Exit',
                component: () =>
                    import ('../views/Exit.vue'),
                meta: {
                    prentpath: '/Exit'
                }
            },

        ],
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }, {
        path: '*',
        component: () =>
            import ('../views/404/404.vue')

    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
router.beforeEach((to, from, next) => {
    let user = localStorage.getItem('user')
    if (to.path === '/Login' || to.path === '/Logon') next()
    else user ? next() : next('/Login')
})

export default router
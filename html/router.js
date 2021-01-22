const loginMain = httpVueLoader('main/login-main.vue')
const dashboardMain = httpVueLoader('main/dashboard-main.vue')
const routes = [
    {path: '/', component: loginMain},
    {path: '/dashboard', component: dashboardMain},
]
const router = new VueRouter({
    routes: routes
})
export {router}

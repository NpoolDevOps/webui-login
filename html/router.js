const loginMain = httpVueLoader('main/login-main.vue')
const routes = [
    {path: '/', component: loginMain},
]
const router = new VueRouter({
    routes: routes
})
export {router}

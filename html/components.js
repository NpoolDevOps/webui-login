import {router} from './router.js'
new Vue({
    el: "#app",
    router,
    components: {
        'app': httpVueLoader('app.vue'),
    }
})
    
import {router} from './router.js';

import { Notification } from 'element-ui'

Vue.prototype.$notify = Notification;

new Vue({
    el: "#app",
    router,
    components: {
        'app': httpVueLoader('app.vue')
    }
})
    

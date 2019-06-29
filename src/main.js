import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import Hello from './components/Hello'
import Home from './components/Home'
import About from './components/About'
import Pages from './components/Pages'

// 1. Use plugin.
// This installs <router-view> and <router-link>,
// and injects $router and $route to all router-enabled child components
Vue.use(VueRouter)
Vue.use(VueResource)

// 3. Create the router
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [{
            path: '/',
            component: Home
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/bar',
            component: Hello
        },
        {
            path: '/articles',
            component: Pages
        }
    ]
})

// 4. Create and mount root instance.
// Make sure to inject the router.
// Route components will be rendered inside <router-view>.
new Vue({
        router,
        el: '#app',
        template: '<App/>',
        components: {
            App
        }
    }).$mount('#app')
    //
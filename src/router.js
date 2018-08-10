import Vue from 'vue'
import Router from 'vue-router'
import AppCustomers from './components/AppCustomers.vue'
import AppProducts from './components/AppProducts.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', redirect: '/customers'},
        { path: '/customers', component: AppCustomers},
        { path: '/products', component: AppProducts},
        
      ]
})





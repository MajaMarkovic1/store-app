import Vue from 'vue'
import Router from 'vue-router'
import AppCustomers from './components/AppCustomers.vue'
import AppProducts from './components/AppProducts.vue'
import AppLatestPurchases from './components/AppLatestPurchases.vue'
import AppBuyProduct from './components/AppBuyProduct.vue'


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', redirect: '/customers'},
        { path: '/customers', component: AppCustomers},
        { path: '/products', component: AppProducts},
        { path: '/customers/:id', component: AppLatestPurchases, name: 'latest-purchases', props: true},
        { path: '/products/:id', component: AppBuyProduct, name: 'buy-product', props: true}
    ]
})





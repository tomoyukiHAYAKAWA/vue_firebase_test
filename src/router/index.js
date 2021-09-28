import Vue from 'vue'
import Router from 'vue-router'
import Sales from '@/components/Sales'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Sales',
      component: Sales
    }
  ]
})

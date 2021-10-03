import Vue from 'vue'
import Router from 'vue-router'
import Sales from '@/components/Sales'
import MessageForm from '@/components/MessageForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MessageForm',
      component: MessageForm
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import regist from '@/components/Regist'
import shuimeiren from '@/components/Shiumeiren'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Regist',
      component: regist
    },
    {
      path: '/shuimeiren',
      name: 'Shiumeiren',
      component: shuimeiren
    }
  ]
})


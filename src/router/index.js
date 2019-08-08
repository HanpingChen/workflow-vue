import Vue from 'vue'
import Router from 'vue-router'
import Apply from '@/components/Apply'
import Process from '@/components/Process'
import ApplyResult from '@/components/ApplyResult'
import ActivateTask from '@/components/ActivateTask'
import Home from '@/components/Home'
import Login from '@/components/Login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children:[
        {
          path: '/apply',
          name: 'Apply',
          component: Apply,
          children: [
            {
              path: '/result',
              name: 'ApplyResult',
              component: ApplyResult
            }
          ]
        },
        {
          path: '/process',
          name: 'Process',
          component: Process
        },
        {
          path: '/activate_task',
          name: 'activateTask',
          component: ActivateTask
        }
      ]
    },
    {
      path: '/login',
      name:'login',
      component: Login
    }
  ]
})

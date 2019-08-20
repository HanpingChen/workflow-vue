import Vue from 'vue'
import Router from 'vue-router'
import Apply from '@/components/Apply'
import Process from '@/components/Process'
import ApplyResult from '@/components/ApplyResult'
import ActivateTask from '@/components/ActivateTask'
import Home from '@/components/Home'
import Login from '@/components/Login'
import ApprovalTask from'@/components/ApprovalTask'
import StatusTask from '@/components/StatusTask'
import test from '@/components/test'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
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
        },
        {
          path: '/approval_task',
          name: 'approvalTask',
          component: ApprovalTask
        },
        {
          path:'/status_task',
          name:'StatusTask',
          component:StatusTask
        },
        {
          path: '/test',
          name:'test',
          component: test
        }
      ]
    },
    {
      path: '/',
      name:'login',
      component: Login
    }
  ]
})

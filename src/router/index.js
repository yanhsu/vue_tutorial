import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Bind from '../components/Bind.vue'
import If from '../components/If.vue'
import Show from '../components/Show.vue'
import IfShow from '../components/IfVsShow.vue'
import On from '../components/On.vue'
import For from '../components/For.vue'
import BindModel from '../components/BindVsModel.vue'
import Homework from '../components/Homework.vue'
import RefvsReactive from '../components/RefvsReactive.vue'
import Setup from '../components/Setup.vue'
import Parent from '../components/Parent.vue'
import LifeCycle from '../components/LifeCycle.vue'
import Workshop from  '../view/TodoList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/hello",
    },
    {
      path: '/hello',
      name: 'hello',
      component: HelloWorld,
      root: true,
      beforeEnter:(to, from) => {
        console.log(from.name);
      }
    },
    {
      path: '/bind',
      name: 'bind',
      component: Bind
    },
    {
      path: '/if',
      name: 'if',
      component: If
    },
    {
      path: '/show',
      name: 'show',
      component: Show
    },
    {
      path: '/ifshow',
      name: 'ifshow',
      component: IfShow
    },
    {
      path: '/on',
      name: 'on',
      component: On
    },
    {
      path: '/for',
      name: 'for',
      component: For
    },
    {
      path: '/bindmodel',
      name: 'bindmodel',
      component: BindModel
    },
    {
      path: '/homework',
      name: 'homework',
      component: Homework
    },
    {
      path: '/refreactive',
      name: 'refreactive',
      component: RefvsReactive
    },
    {
      path: '/setup',
      name: 'setup',
      component: Setup
    },
    {
      path: '/props&emit',
      name: 'props&emit',
      component: Parent
    },
    {
      path: '/lifecycle',
      name: 'lifecycle',
      component: LifeCycle
    },
    {
      path: '/workshop',
      name: 'workshop',
      component: Workshop
    }
  ]
})
//不可從 bind 跳轉至 if
router.beforeEach((to, from) => {
  if(from.name == 'bind' && to.name == 'if') {
    return false
  } 
  else {
    return true
  }
})
// 從 workshop 跳轉至lifecycle 時轉導至 hello 一定要給一個next callback 不然路由會中斷
router.beforeEach((to, from) => {
  if(from.name == 'workshop' && to.name == 'lifecycle') {
    return {name: 'hello'}
  } 
})
router.afterEach((to, from, failure) => {
  console.log(to.name);
})
export default router

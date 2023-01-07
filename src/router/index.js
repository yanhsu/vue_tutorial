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
import RouteDemo from '../components/RouteDemo.vue'

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
      root: true
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
    },
    {
      path: '/routedemo1',
      name: 'routedemo1',
      component: RouteDemo
    },
    {
      path: '/routedemo2/:id',
      name: 'routedemo2',
      component: RouteDemo
    }
  ]
})

router.beforeEach((to, from) => {
  if(to.name === 'on' && from.name === 'for') {
    return false;
  }
});

export default router

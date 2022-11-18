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
    }
  ]
})

export default router

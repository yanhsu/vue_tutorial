<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import router from '../router/index'

const route=useRoute();
const activePath = computed(() =>route.path)
console.log('path:'+ activePath)


function chgpage(routerName) {
    router.push({
        name: routerName
      });
}
</script>

<template>
    <b-card>
    <b-nav pills>
        <b-nav-item :active="activePath === '/hello'" @click="chgpage('hello')">hello</b-nav-item>
        <b-nav-item :active="activePath === '/bind'" @click="chgpage('bind')">v-bind</b-nav-item>
        <b-nav-item :active="activePath === '/if'" @click="chgpage('if')">v-if</b-nav-item>
        <b-nav-item :active="activePath === '/show'" @click="chgpage('show')">v-show</b-nav-item>
        <b-nav-item :active="activePath === '/ifshow'" @click="chgpage('ifshow')">v-if vs v-show</b-nav-item>
        <b-nav-item :active="activePath === '/for'" @click="chgpage('for')">v-for</b-nav-item>
        <b-nav-item :active="activePath === '/on'" @click="chgpage('on')">v-on</b-nav-item>
        <b-nav-item :active="activePath === 8" @click="chgpage('bindmodel')">v-bind vs v-model</b-nav-item>
    </b-nav>
    </b-card>
</template>


<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import router from '../router/index'

const route=useRoute();
const activePath = computed(() =>route.path)


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
        <b-nav-item :active="activePath === '/bindmodel'" @click="chgpage('bindmodel')">v-bind vs v-model</b-nav-item>
        <b-nav-item :active="activePath === '/homework'" @click="chgpage('homework')">homework</b-nav-item>
        <b-nav-item :active="activePath === '/refreactive'" @click="chgpage('refreactive')">ref vs reactive</b-nav-item>
        <b-nav-item :active="activePath === '/setup'" @click="chgpage('setup')">setup</b-nav-item>
        <b-nav-item :active="activePath === '/props&emit'" @click="chgpage('props&emit')">props&emit</b-nav-item>
        <b-nav-item :active="activePath === '/lifecycle'" @click="chgpage('lifecycle')">lifecycle</b-nav-item>
        <b-nav-item :active="activePath === '/workshop'" @click="chgpage('workshop')">workshop</b-nav-item>
    </b-nav>
    </b-card>
</template>


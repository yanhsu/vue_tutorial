<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import router from '../router/index'
let input = ref('');
const route = useRoute();

</script>

<template>
    <div class="mt-3" style="text-align:center;font-size: x-large;">
        <input type="text" v-model = "input">
        <button @click="router.push({
        name: 'routedemo2',
        params: { id: input }
      })">go route demo2</button>
      <p>route parameter :{{ route.params.id? route.params.id: "none"}}</p>
    </div>
</template>

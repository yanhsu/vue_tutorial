<script setup>
import { ref,reactive } from 'vue'
let fruits = ref([
    {
        name: 'apple',
        price: 10
    },
    {
        name: 'banana',
        price: 5
    },
    {
        name: 'cherry',
        price: 15
    },
    {
        name: 'mango',
        price: 12
    }
]);

</script>

<template>
    <div class="mt-2" style="text-align:center;font-size: x-large;">
        <h2>v-for</h2>
        <p v-for="item in fruits">{{ item.name }} : ${{ item.price }} </p>
    </div>

    <div class="mt-2" style="text-align:center;font-size: x-large;">
        <h2>v-for with index</h2>
        <p v-for="(item, index) in fruits">{{ index + 1 }}.{{ item.name }} : ${{ item.price }} </p>
    </div>

    <div class="mt-2" style="text-align:center;font-size: x-large;">
        <h2>v-for with index</h2>
        <p v-for="num in 10">{{ num }} </p>
    </div>
</template>

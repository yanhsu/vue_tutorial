<script setup>
import { ref } from 'vue'
let input = ref('if');

</script>

<template>
    <div class="mt-2" style="text-align:center;font-size: x-large;">
        <input type="text" v-model="input">
    </div>
    <div class="mt-2" style="text-align:center;font-size: x-large;">
        <span v-if="input === 'if'">v-if</span>
        <span v-else-if="input === 'elsif'">v-else-if</span>
        <span v-else>v-else</span>
    </div>
</template>


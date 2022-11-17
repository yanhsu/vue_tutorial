<script setup>
import { ref } from 'vue'
let input = ref('if');

</script>

<template>
    <div class="mt-2" style="text-align:center;font-size: x-large;">
        <input type="text" v-model="input">
    </div>
    <div class="mt-2" style="text-align:center;font-size: x-large;">
        <span v-show="input === 'if'">v-if</span>
        <span v-show="input === 'elsif'">v-else-if</span>
        <span v-show="input !== 'if' && input !=='elsif'">v-else</span>
    </div>
</template>

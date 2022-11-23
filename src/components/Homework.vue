<script setup>
import { ref } from 'vue'
let count = ref(0);

function add (){
    count.value ++;
}
function reset () {
    count.value = 0
}
function minus () {
    count.value --;
}
</script>

<template>
    <div class="mt-2" style="text-align:center;font-size: x-large;">
        <h2>onClick</h2>
        <span>count: {{ count }}</span>&nbsp;
        <div>
            <b-button size="sm" @click="add" variant="primary">add</b-button>
            &nbsp;
            <b-button size="sm" @click="reset" variant="danger">reset</b-button>
            &nbsp;
            <b-button size="sm" @click="minus" variant="secondary">minus</b-button>
        </div>
        <span v-if="count <= 5"> small </span>
        <span v-else-if="count <= 10"> middle</span>
        <span v-else>large</span>
    </div>
</template>
<script setup>
import { defineProps, defineEmits } from 'vue'
defineProps({
    msg: String
})
const emit = defineEmits(['changeMsg'])
const changeInput = (msg) => {
    emit('changeMsg', msg)
}
</script>
<template>
    <div>
        <div class="mt-3" style="text-align:center;font-size: x-large;">
                <h4>Props: {{ msg }}</h4>
        </div>
        <div class="mt-2" style="text-align:center;font-size: x-large;">
            <h4>emit</h4>
            <input type="text" v-model="msg" @input ="changeInput(msg)">
        </div>
        <div class="mt-2" style="text-align:center;font-size: x-large;">
            <h4>without emit</h4>
            <input type="text" v-model="msg">
        </div>
    </div>
</template>
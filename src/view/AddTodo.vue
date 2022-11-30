<script setup>
    import { ref, defineEmits } from 'vue';
    const emit = defineEmits(['addItem']);
    let inputTodo = ref('');
    function addInput() {
        emit('addItem', {
            title: inputTodo.value,
            toggle: false
        });
        inputTodo.value = ''
    }
</script>
<template>
    <div class="center">
        <input v-model="inputTodo" type="text"/>
        <button type="submit" @click="addInput">新增</button>
    </div>
</template>
<style scoped>
.center {
    display: flex;
    justify-content: center;
    margin-top: 3em;
}
</style>
<script setup>
    import { reactive, defineProps, defineEmits } from 'vue';
    const { todolist } =defineProps({
        todolist: Array
    });
    const emit = defineEmits(['changeToggle']);
    function toggleItem(index) {
        emit('changeToggle', index);
    }
</script>
<template>
    <div class="center">
        <ul>
            <li 
                v-for="(item, index) in todolist"
                :class="item.toggle?'done':'null'"
            >
                {{ `${index + 1}.${item.title}` }}
                <input type="checkbox" @change="toggleItem(index)">
            </li>
        </ul>
    </div>
</template>
<style scoped>
.center {
    display: flex;
    justify-content: center;
    margin-top: 3em;
}
.done {
    text-decoration: line-through;
}
</style>

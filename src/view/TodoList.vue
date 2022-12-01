<script setup>
    import { reactive } from 'vue';
    import TodoItem from './TodoItem.vue';
    import AddTodo from './AddTodo.vue';
    // 宣告一個陣列紀錄待辦清單(使用reactive)

    // 新增待辦方法(function)

    // 切換是否完成待辦(function)

    // 刪除待辦(function)

</script>
<template>
    <!-- 新增待辦功能component -->
    <AddTodo />
    <!-- 顯示待辦列表component(含切換、刪除) -->
    <TodoItem />
</template>
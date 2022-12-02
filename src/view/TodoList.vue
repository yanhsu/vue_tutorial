<script setup>
    import { reactive } from 'vue';
    import TodoItem from './TodoItem.vue';
    import AddTodo from './AddTodo.vue';
    let todolist = reactive([]);
    function addTodo(obj) {
        console.log(obj);
        todolist.push(obj);
    }
    function toggleTodo(index) {
        console.log(index);
        todolist[index].toggle = !todolist[index].toggle;
    }
    function deleteOne(index) {
        todolist.splice(index, 1);
    }
</script>
<template>
    <AddTodo @addItem="addTodo"/>
    <TodoItem 
        :todolist="todolist" 
        @changeToggle="toggleTodo"
        @deleteTodo="deleteOne"
    />
</template>
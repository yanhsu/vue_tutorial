<script setup>
    import { reactive } from 'vue';
    import TodoItem from './TodoItem.vue';
    import AddTodo from './AddTodo.vue';
    let todolist = reactive([]);
    function add(obj) {
        console.log(obj);
        todolist.push(obj);
    }
    function toggle(index) {
        console.log(index);
        todolist[index].toggle = !todolist[index].toggle
    }
    function deleteOne(index) {
        todolist.splice(index, 1);
    }
</script>
<template>
    <AddTodo @addItem="add"/>
    <TodoItem 
        :todolist="todolist" 
        @changeToggle="toggle"
        @deleteTodo="deleteOne"
    />
</template>
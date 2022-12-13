<script setup>
    import { reactive, computed } from 'vue';
    import TodoItem from './TodoItem.vue';
    import AddTodo from './AddTodo.vue';
    import { useStore } from 'vuex'
    const store = useStore();
    let todolist = computed(
        function () {
            return state.todolist
        }
    );
    // let todolist = reactive([]);
    // function addOne(obj) {
    //     console.log(obj);
    //     todolist.push(obj);
    // }
    // function toggleOne(index) {
    //     console.log(index);
    //     todolist[index].done = !todolist[index].done;
    // }
    // function deleteOne(index) {
    //     todolist.splice(index, 1);
    // }
</script>
<template>
    <b-container class="mt-5">
        <b-card
            header="TODOLIST"
            header-text-variant="white"
            header-tag="header"
            header-bg-variant="dark"
        >
            <!-- <AddTodo 
                @addTodo="addOne"/> -->
            <AddTodo/>    
            <!-- <TodoItem 
                :todolist="todolist" 
                @toggleTodo="toggleOne"
                @deleteTodo="deleteOne"
            /> -->
            <TodoItem/>
        </b-card>     
    </b-container >
</template>
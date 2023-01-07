<script setup>
    import { reactive, computed, onMounted } from 'vue';
    import TodoItem from './TodoItem.vue';
    import AddTodo from './AddTodo.vue';
    import { useStore } from 'vuex'
    const store = useStore();
    let todolist = computed(() => store.todolist);
    let today = new Date(
    new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
  );
    const request = {
        header:{
            msgNo: "UP0090_02_20221209134638_01882",
            txnCode: 'getDataDictionaries',
            txnTime: today.toISOString().replace("T", " ").slice(0, 19),
            senderCode: "UP0090_02",
            receiverCode: "UP0090_01",
            operatorCode: "19598", 
            unitCode: "9004",
            authorizerCode: "19598", 
        },
        requestBody: {

        }
    };
    const headers = {
        "Content-Type": "application/json;charset=utf-8",
    };
    onMounted(()=> {
        store.dispatch('getDataDictionary', {request,headers})
    })
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
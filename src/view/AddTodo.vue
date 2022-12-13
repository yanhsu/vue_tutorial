<script setup>
    import { ref, defineEmits } from 'vue';
    import { useStore } from 'vuex'
    const store = useStore();
    // const emit = defineEmits(['addItem']);
    let inputTodo = ref('');

    function addInput() {
        store.commit('addTodo', {
            obj:{
                title: inputTodo.value,
                done: false
            }
        })
        inputTodo.value = ''
    }
    // function addInput() {
    //     emit('addTodo', {
    //         title: inputTodo.value,
    //         done: false
    //     });
    //     inputTodo.value = ''
    // }
</script>
<template>
    <!-- <div class="center">
        <input v-model="inputTodo" type="text"/>
        <button type="submit" @click="addInput">新增</button>
    </div> -->
    <!-- <div class= "mb-5">
        <b-input-group class="mt-2">
            <b-form-input
                autofocus
                :state="textValidate"  
                v-model="inputTodo"
                placeholder="Enter your todo"
                aria-describedby="input-live-feedback"
            />
            <b-input-group-append> 
            <b-button type='submit' variant= 'primary' @click="addInput">
                <font-awesome-icon icon="plus" />
            </b-button>
            </b-input-group-append>
            <b-form-invalid-feedback id="input-live-feedback">
                Enter at least 1 letter
            </b-form-invalid-feedback>
        </b-input-group> 
    </div> -->
    <div class= "mb-5">
        <b-input-group class="mt-2">
            <b-form-input
                autofocus
                v-model="inputTodo"
                placeholder="Enter your todo"
                aria-describedby="input-live-feedback"
            />
            <b-input-group-append> 
            <b-button type='submit' variant= 'primary' @click="addInput">
                <font-awesome-icon icon="plus" />
            </b-button>
            </b-input-group-append>
        </b-input-group> 
    </div>
</template>
<style scoped>
.center {
    display: flex;
    justify-content: center;
    margin-top: 3em;
}
</style>
<script setup>
    import { reactive, defineProps, defineEmits, computed } from 'vue';
    import { useStore } from 'vuex'
    const store = useStore();
    // const { todolist } =defineProps({
    //     todolist: Array
    // });
    // const emit = defineEmits(['toggleTodo', 'deleteTodo']);
    // function toggleItem(index) {
    //     emit('toggleTodo', index);
    // }
    // function deleteItem(index) {
    //     emit('deleteTodo', index);
    // }
    let todolist = computed(() => store.state.todolist)
    function toggleItem(index) {
        store.commit('toggleTodo', { "index": index})
    }
    function deleteItem(index) {
        store.commit('deleteTodo', { 'index': index})
    }
</script>
<template>
    <div >
        <!-- <ul>
            <li 
                v-for="(item, index) in todolist"
                :class="item.done?'done':'null'"
            >
                {{ `${index + 1}.${item.title}` }}
                <input type="checkbox" @change="toggleItem(index)">
                <button @click="deleteItem(index)">刪除</button>
            </li>
        </ul> -->

    <!-- <b-list-group>
        <b-list-group-item v-for=" (item, index) in todolist">
            <b-input-group class="mt-2">
                <b-input-group-prepend is-text>
                    <b-form-checkbox class="mr-n2"  @change="toggleItem(index)"/>
                </b-input-group-prepend>
                <b-form-input readonly :class="item.done?'done':'null'" v-model="item.title"></b-form-input>
                <b-input-group-append> 
                    <b-button type='submit' variant= 'primary' @click="deleteItem(index)">
                        <font-awesome-icon icon="trash" />
                    </b-button>
                </b-input-group-append>
            </b-input-group>
        </b-list-group-item>
    </b-list-group> -->
    <b-list-group>
        <b-list-group-item v-for=" (item, index) in todolist">
            <b-input-group class="mt-2">
                <b-input-group-prepend is-text>
                    <b-form-checkbox class="mr-n2"  @change="toggleItem(index)"/>
                </b-input-group-prepend>
                <b-form-input readonly :class="item.done?'done':'null'" v-model="item.title"></b-form-input>
                <b-input-group-append> 
                    <b-button type='submit' variant= 'primary' @click="deleteItem(index)">
                        <font-awesome-icon icon="trash" />
                    </b-button>
                </b-input-group-append>
            </b-input-group>
        </b-list-group-item>
    </b-list-group>
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

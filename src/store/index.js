import {createStore} from "vuex"
import  axios  from "axios";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
    // plugins:[createPersistedState()],
    //狀態儲存庫
    state: {
        todolist: []
    },
    mutations: {
        addTodo: function(state, payload) {
            // console.log(payload);
            // state.todolist.push(payload.obj)
            state.todolist = [...state.todolist, payload.obj];
        },
        deleteTodo: function(state, payload) {
            // state.todolist.splice(payload.index, 1);
            state.todolist = [...state.todolist.slice(0, payload.index), ...state.todolist.slice(payload.index + 1)];    

        },
        toggleTodo: function(state, payload) {
            state.todolist[payload.index].done = !state.todolist[payload.index].done
        }
    },
    actions: {
        add: function({commit}, payload) {
            commit('addTodo', payload)
        },
        delete: function({commit}, payload) {
            commit('deleteTodo', payload)
        },
        toggle: function({commit}, payload) {
            console.log(payload)
            commit('toggleTodo', payload)
        }
    },
    getters: {
        doneTodolist: function(state) {
          return state.todolist.filter(todo => todo.done)
        }
    }
})

export default store
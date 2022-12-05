import {createStore} from "vuex"
import  axios  from "axios";

const store = createStore({
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
            state.todolistp[payload.index].done = !state.todolistp[payload.index].done
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
            commit('toggleTodo', payload)
        }
    }
})

export default store
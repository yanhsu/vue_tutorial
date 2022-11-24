<script setup>
import { ref } from 'vue'
let msg = ref('我是setup 語法糖');
let count = ref(0);

const add = ()=>{
    count.value ++;
}
const reset = ()=> {
    count.value = 0
}
</script>

<!-- <script>
import { ref } from 'vue'
export default {
    setup() {
        let msg = ref('我是setup 沒有語法糖');
        let count = ref(0);
        const add = ()=>{
            count.value ++;
        }
        const reset = ()=> {
            count.value = 0
        }
        return {
            msg,
            count,
            add,
            reset
        }
    }
}
</script> -->

<!-- <script>
export default {
    data() {
        return {
            msg: '我是vue2 寫法',
            count: 0
        }
    },
    methods: {
        add: function () {
            this.count++;
        },
        reset: function () {
            this.count = 0
        },
        // add: () => {
        //     this.count++;
        // }
    }
}
</script> -->


<template>
    <div class="mt-3" style="text-align:center;font-size: x-large;">
            <h2>{{ msg }}</h2>
    </div>

    <div class="mt-2" style="text-align:center;font-size: x-large;">
        <h2>onClick</h2>
        <span>count: {{ count }}</span>&nbsp;
        <div>
            <b-button size="sm" v-on:click="add" variant="primary">add count</b-button>
            &nbsp;
            <b-button size="sm" @click="reset" variant="danger">reset</b-button>
        </div>
    </div>
</template>

<!-- <script setup>
import { ref } from 'vue'
let msg = ref('我是setup 語法糖');
// COUNT 計算使用
let count = ref(0);
const add = ()=>{
    count.value ++;
}
const reset = ()=> {
    count.value = 0
}

// INPUT 使用
let input = ref('')
const inputChange = (e) => {
    input.value = e.target.value
}
</script> -->

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
        let input = ref('')
        const inputChange = (e) => {
            input.value = e.target.value
        }
        return {
            msg,
            count,
            add,
            reset,
            input,
            inputChange
        }
    }
}
</script> -->

<script>
export default {
    //所有變數宣告都寫在一起
    data() {
        return {
            msg: '我是vue2 寫法',
            count: 0,
            input: ''
        }
    },
    // 所有methods都寫一起
    methods: {
        add: function () {
            this.count++;
        },
        reset: function () {
            this.count = 0
        },
        inputChange: function (e) {
            this.input = e.target.value
        }
        // add: () => {
        //     this.count++;
        // }
    }
}
</script>


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

    <div class="mt-5" style="text-align:center;font-size: x-large;">
        <h2>onInput</h2>
        <span>input: {{ input }}</span>
        <div class="mt-2" style="text-align:center;font-size: x-large;">
            <input type="text" :value="input" @input="inputChange">
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
let input = ref('');
let count = ref(0);
let selectVal = ref();

function add (){
    count.value ++;
}

function reset (){
    count.value = 0;
}

function inputChange(e) {
    input.value = e.target.value
}

function selectChange(val) {
    console.log(val)
    selectVal.value = val
}
</script>

<template>
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
        <div class="mt-2" style="text-align:center;font-size: x-large;">
            <input type="text" :value="input" @input="inputChange">
        </div>
        <span>{{ input }}</span>
    </div>

    <div class="mt-5" style="text-align:center;font-size: x-large;">
        <h2>onChange</h2>
        <div style="display: flex;justify-content: center;align-items: center;">
            <b-form-radio @change="selectChange" name="some-radios" value="male"> Boy </b-form-radio>
            <b-form-radio @change="selectChange" name="some-radios" value="female"> Girl </b-form-radio>
        </div>
        <span>{{ selectVal }}</span>
    </div>
</template>


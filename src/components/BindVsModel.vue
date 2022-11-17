<script setup>
import { ref } from 'vue'
let input = ref('');
let selectVal = ref();
function selectChange(val) {
    console.log(val)
    selectVal.value = val
}

function inputChange(e) {
    input.value = e.target.value
}

</script>

<template>
    <div class="mt-5" style="text-align:center;font-size: x-large;">
        <span>input value :{{ input }}</span>
        <h2>Input Use bind without onInput Function</h2>
        <div class="mt-2" style="text-align:center;font-size: x-large;">
            <input type="text" :value="input">
        </div>
        <h2>Input Use bind with onInput Function</h2>
        <div class="mt-2" style="text-align:center;font-size: x-large;">
            <input type="text" :value="input" @input="inputChange">
        </div>
        <h2>Input Use V-Model</h2>
        <div class="mt-2" style="text-align:center;font-size: x-large;">
            <input type="text" v-model="input">
        </div>
    </div>

    <div class="mt-5" style="text-align:center;font-size: x-large;">
        <span>radio value :{{ selectVal }}</span>
        <h2>Radio Use bind without onChange Function</h2>
        <div style="display: flex;justify-content: center;align-items: center; text-align: none;">
            <b-form-radio name="some-radios" value="male"> Boy </b-form-radio>
            <b-form-radio name="some-radios" value="female"> Girl </b-form-radio>
        </div>
        <h2>Radio Use bind with onChange Function</h2>
        <div style="display: flex;justify-content: center;align-items: center; text-align: none;">
            <b-form-radio @change="selectChange" name="some-radios2" value="male"> Boy </b-form-radio>
            <b-form-radio @change="selectChange" name="some-radios2" value="female"> Girl </b-form-radio>
        </div>
        <h2>Radio Use V-Model</h2>
        <div style="display: flex;justify-content: center;align-items: center; text-align: none;">
            <b-form-radio v-model="selectVal" name="some-radios3" value="male"> Boy </b-form-radio>
            <b-form-radio v-model="selectVal" name="some-radios3" value="female"> Girl </b-form-radio>
        </div>
    </div>


</template>

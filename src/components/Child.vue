<script setup>
import { defineProps, defineEmits, ref } from 'vue'
let { msg } = defineProps({
    msg: String
})
let childMsg = ref(msg);
const emit = defineEmits(['changeMsg'])
const changeInput = (e) => {
    emit('changeMsg',  e.target.value)
}
</script>

<!-- <script>
import { ref, toRefs } from 'vue'
 export default {
    props: {
        msg: {
            type: String,
            require: true
        }
    },
    setup(props, context){
        let { msg } = toRefs(props);
        let childMsg = ref(props.msg);
        function changeInput(e) {
            context.emit('changeMsg', e.target.value)
        }

        return {
            msg,
            childMsg,
            changeInput
        }
    }
 }
</script> -->
<template>
    <div>
        <div class="mt-3" style="text-align:center;font-size: x-large;">
                <h4>Props: {{ msg }}</h4>
        </div>
        <div class="mt-2" style="text-align:center;font-size: x-large;">
            <h4>emit</h4>
            <input type="text" v-model="childMsg" @input ="changeInput">
        </div>
        <div class="mt-2" style="text-align:center;font-size: x-large;">
            <h4>without emit</h4>
            <input type="text" v-model="childMsg">
        </div>
    </div>
</template>
<script setup>
import { ref, reactive, onMounted , watch} from 'vue'
let ref1 = ref({name: 'ref1'});
let reactive1 = reactive({name: 'reactive1'});

onMounted(()=>{
    setTimeout(()=>{
        ref1.value.name = 'ref2'
        reactive1.name = 'reactive2'
    }, 3000)
});

watch(ref1, (nv, pv) => {
    console.log('ref new value:', nv);
})

watch(reactive1, (nv, pv) => {
    console.log('reactive new value:', nv);
})

</script>

<template>
    <div class="mt-3" style="text-align:center;font-size: x-large;">
        <span>{{ ref1.name }}</span>
    </div>

    <!-- 由於v-bind 很常使用故提供簡便語法 -->
    <div class="mt-3" style="text-align:center;font-size: x-large;">
        <span>{{ reactive1.name }}</span>
    </div>
</template>

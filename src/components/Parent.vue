<script setup>
    import { ref } from 'vue';
    import Child from './Child.vue';
    let parentMsg = ref('我是上層傳下來的');

    function changeFromChild(e) {
        console.log('emit value:'+ e)
        // parentMsg.value = e
    }
</script>

<template>
    <Child :msg="parentMsg" 
        @changeMsg="changeFromChild"
    />
</template>
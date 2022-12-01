<script setup>
    import { defineProps, defineEmits } from 'vue';

    //取得parent 傳下來的待辦清單(defineProps)

    //定義傳給parent之事件名稱

    //發送切換是否完成待辦事件至parent component

    //發送刪除待辦事件至parent component

</script>
<template>
    <div class="center">
            <!-- 使用li 搭配v-for 渲染待辦清單 -->
            <!-- 使用checkbox 作為待辦是否完成開關 -->
            <!-- 實作刪除按鈕 -->
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

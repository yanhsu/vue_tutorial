<script setup>
import { ref } from 'vue'
let eip = ref('https://eip.esunbank.com.tw/SitePages/default.aspx');

</script>

<template>
    <div class="mt-3" style="text-align:center;font-size: x-large;">
        <a v-bind:href="eip" target="_blank">
            <span>v-bind</span>
        </a>
    </div>

    <!-- 由於v-bind 很常使用故提供簡便語法 -->
    <div class="mt-3" style="text-align:center;font-size: x-large;">
        <a :href="eip" target="_blank">
            <span>v-bind alias</span>
        </a>
    </div>
</template>

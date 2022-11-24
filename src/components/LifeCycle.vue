<!-- <script setup>
import { ref, reactive, onMounted , onBeforeMount, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

let count = ref(0);

function add (){
    count.value ++;
}

function reset (){
    count.value = 0;
}

// life cycle function
console.log("it's time to set up");
console.log("count:"+ count.value)

onBeforeMount(() => {
    console.log("it's time before mount")
    console.log("count:"+ count.value)
});

onMounted(() => {
    console.log("it's time after mount")
    console.log("count:"+ count.value)
});

onBeforeUpdate(() => {
    console.log("it's time before update")
    console.log("count:"+ count.value)
});

onUpdated(() => {
    console.log("it's time after update")
    console.log("count:"+ count.value)
});

onBeforeUnmount(() => {
    console.log("it's time before unmount")
    console.log("count:"+ count.value)
});

onUnmounted(() => {
    console.log("it's time after unmount")
    console.log("count:"+ count.value)
});

</script> -->

<script>
// vue 2寫法
export default {
    data() {
        return {
            count: 0
        }
    },
    methods: {
        add: function() {
            this.count ++;
        },
        reset: function() {
            this.count = 0;
        }
    },
    beforeCreate() {
        console.log('vue2 before create(set up)')
        console.log("count:"+ this.count)
    },
    created() {
        console.log('vue2 after create(set up)')
        console.log("count:"+ this.count)
    },
    beforeMount() {
        console.log('vue2 before mount')
        console.log("count:"+ this.count)
    },
    mounted() {
        console.log('vue2 after mount')
        console.log("count:"+ this.count)
    },
    beforeUpdate() {
        console.log('vue2 before update')
        console.log("count:"+ this.count)
    },
    updated() {
        console.log('vue2 after update')
        console.log("count:"+ this.count)
    },
    beforeUnmount() {
        console.log('vue2 before unmount')
        console.log("count:"+ this.count)
    },
    unmounted() {
        console.log('vue2 after unmount')
        console.log("count:"+ this.count)
    }
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
</template>

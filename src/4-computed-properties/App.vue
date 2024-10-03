<script setup>
import { computed, ref } from 'vue';

const count = ref(0)
const name = ref("Riyat Dul")

const greeting = computed(()=>{
    console.log("greeting() was executed")
    return "Hello, " + name.value + "!"
});

// function greeting() {
//     console.log("greeting() was executed")
//     return "Hello, " + name.value + "!"
// }

</script>

<template>
    <input type="text" v-model="name" />
    
    <h3>{{ greeting }}</h3>
    <!-- <h3>{{ greeting() }}</h3> -->

    <button @click="count++">Increment - {{ count }}</button>
</template>


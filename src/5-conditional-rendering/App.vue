<script setup>
import { ref } from 'vue';

const isShow = ref(true)
const awesome = ref(true)
const type = ref("D")

</script>

<template>
   <h2 v-if="isShow">This will be shown if isShow <cite>true</cite></h2>
   <button @click="awesome = !awesome">Toggle</button>

    <h1 v-if="awesome">Vue is awesome!</h1>
    <h1 v-else>Oh no 😢</h1>

    <!-- another case -->
    <div v-if="type === 'A'">
    A
    </div>
    <div v-else-if="type === 'B'">
    B
    </div>
    <div v-else-if="type === 'C'">
    C
    </div>
    <div v-else>
        Not A/B/C
    </div>
</template>
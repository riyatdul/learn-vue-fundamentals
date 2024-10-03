<script setup>
import { ref } from 'vue';

const name = ref("Riyat Dul")
const tall = ref(170)
</script>
<template>
    <h2>Name: {{ name }}</h2>
    <h3>Tall: {{ tall }}</h3>
</template>
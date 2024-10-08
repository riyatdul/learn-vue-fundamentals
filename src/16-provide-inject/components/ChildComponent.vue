<script setup>
import { inject } from 'vue';


const message = inject("message");
const info = inject("info");
</script>

<template>
    <h1>{{ message }}</h1>
    <h2>{{ info.name }} {{ info.isAdmin }}</h2>
</template>
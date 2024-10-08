<script setup>
import { provide } from 'vue';

import ChildComponent from './components/ChildComponent.vue';
provide("message", "hello")
provide("info", {name:"Riyat Dul", isAdmin:true});
</script>

<template>
    <ChildComponent/>
</template>
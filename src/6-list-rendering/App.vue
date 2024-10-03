<script setup>
import { ref } from 'vue';

const items = ref([
    {
        id:1,
        name:"Riyat"
    },
    {
        id:2,
        name:"Dul"
    },
    {
        id:3,
        name:"Insan"
    }
])
</script>

<template>
    <ul v-for="item in items" :key="item.id">
        <li>{{ item.name }}</li>
    </ul>

</template>
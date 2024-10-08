<script setup>
import { ref } from 'vue';


const username = ref('');
const email = ref('');
const password = ref('');

</script>

<template>
    <form @submit.prevent="$emit('userInfo', username, email, password)">
        <input type="text" placeholder="Username" v-model="username">
        <input type="email" placeholder="Email" v-model="email">
        <input type="password" placeholder="Password" v-model="password">
        <button type="submit">Submit</button>
    </form>
</template>
<script setup>
import { ref } from 'vue';
import ComponentEvent from './components/ComponentEvent.vue';
import FromComponent from './components/FromComponent.vue';

let count = ref(0);

const formHandler = (username, email, password) => {
    console.log('username', username);
    console.log('email', email);
    console.log('password', password);
}

</script>

<template>
    <h1>Count: {{ count }}</h1>
    <ComponentEvent @incrementCounter="count++" />
    <FromComponent @userInfo="formHandler" />
</template>
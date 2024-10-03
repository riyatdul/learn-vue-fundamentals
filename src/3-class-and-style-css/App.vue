<!-- actually vue have a scope and module for scoping CSS, 
but in this not include include in.
more https://vuejs.org/api/sfc-css-features.html#scoped-css
-->
<script setup>
import { ref } from 'vue';

const isActive = ref(true);
const igLink = 'https://www.instagram.com/alriyat/'
const amazingImage =
  'https://images.unsplash.com/photo-1699646034253-0ebaa551d226?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
const altText = 'Just a random picture'

const imageWidth = 400
const imageHeight = 400
</script>

<template>
<div class="container">
    <h1>Container</h1>
    <!-- :class (or v:bind:class) define class for css dynamic -->
    <div
        class="box" :class="{ active: isActive }">My Box
    </div>
    <br/>
    <!-- Another Case -->
    <!-- Old way 👇 -->
    <!-- <a v-bind:href="igLink">@alriyat</a> -->

    <!-- New way 👇 -->
    <a :href="igLink">@alriyat</a>
    <img :src="amazingImage" :alt="altText" :width="imageWidth" :height="imageHeight" />
    <br/>

    <!-- inline style -->
    <span :style="{ color: 'purple', fontSize: 24 + 'px' }">Hi, I'm Riyat Dul</span>
    
</div>
</template>

<style scoped>

h1{
    color: blue;
}

.container {
    width: 400px;
    height: 400px;
    background-color: aquamarine;
    padding: 10px;
}

button {
    font-size: 24px;
    margin-left: 24px;
}

.box {
  width: 200px;
  height: 100px;
  background-color: lightgray;
  text-align: center;
  align-content: center;
}

.active{
    background-color: red;
}


</style>
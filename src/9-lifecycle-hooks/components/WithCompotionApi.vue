<script setup>
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from 'vue'

// let title = "im title" <- Not update
let title = ref("im title")

onBeforeMount(() => {
  console.log('BEFORE MOUNT ',title.value)
})

onMounted(() => {
  console.log('MOUNTED -> DOM ', title.value)
})

onBeforeUpdate(() => {
  console.log('BEFORE UPDATE ', title.value)
})

onUpdated(() => {
  console.log('UPDATED -> DOM', title.value)
})

onBeforeUnmount(()=>{
    console.log(`UNMOUNTED`)
})

onUnmounted(() => {
  console.log(`UNMOUNTED -> DOM`)
})

</script>
<template>
    <h1>I'm Component(DOM)</h1>
    <h1>{{ title }}</h1>
    <h1>{{ count }}</h1>
    <button @click="title = `new title`">Update</button>
</template>
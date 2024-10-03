<script setup>
import { ref } from 'vue';

const name = ref("Riyat Dul")
const isMarried = ref(true)
const isNull = ref(null)
const location = ref(["JMB","INA"])
const isMap = ref({
    name: "Riyat Dul",
    age: 30,
})
const count = ref(0)
const increment = () => {
    count.value++ //access outside template, use .value
}
const decrement = () => {
    count.value--
}
</script>

<template>
    <div>
        <h1>{{ count }}</h1>
        <button @click="increment">Increment</button>
        <button @click="decrement">Decrement</button>
    </div>
</template>


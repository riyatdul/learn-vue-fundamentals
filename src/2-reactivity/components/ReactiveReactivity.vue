<!-- There is another way to declare reactive state,
Unlike a ref which wraps the inner value in a special object, 
Not Support for primitif data such string, number, boolean
reactive() makes an object itself reactive. -->
<script setup>
import { reactive } from 'vue';

// const errorReactive = reactive(0)
const object = reactive({ count: 0})

const increment = () => {
    object.count++ //access outside template, use .value
}
const decrement = () => {
    object.count--
}

</script>

<template>
    <div>
        <h1>{{ object.count }}</h1>
        <button @click="increment">Increment</button>
        <button @click="decrement">Decrement</button>
    </div>
</template>


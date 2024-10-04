<script setup>
import { defineProps } from 'vue';

//Basic form validation
// const props = defineProps({
//     post: String,
//     favorite: Number,
// })

const props = defineProps({
    post:{
        type: String,
        required: true,
        default: "-"
    },
    favorite: Number
})

console.log("prop", props)

</script>

<template>
    <h4>{{ props.post +'-'+ props.favorite}}</h4>
</template>
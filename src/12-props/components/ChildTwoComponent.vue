<script setup>
import { defineProps } from 'vue';
const props = defineProps(['firstName','lastName'])
// const objectProps = defineProps({
//     post: String,
//     favorite: number,
// })

</script>

<template>
    <h4>{{ props.firstName +'-'+ props.lastName}}</h4>
</template>
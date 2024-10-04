<script setup>
import { defineProps } from 'vue';
const props = defineProps(['id'])
// const props = defineProps(['firstName','lastName'])
// const objectProps = defineProps({
//     post: String,
//     favorite: number,
// })


</script>
<!-- In non <script setup> components, props are declared using the props option: -->
<!-- export default {
    props: ['foo'],
    setup(props) {
      // setup() receives props as the first argument.
      console.log(props.foo)
    }
  } -->

<template>
    <h4>{{ props.id }}</h4>
    <!-- <h4>{{ props.firstName +'-'+ props.lastName}}</h4> -->
</template>
<script setup>
import { ref } from 'vue'

const counter = ref(0)
function greet(event) {
  alert(`Hello ${name.value}!`)
  // `event` is the native DOM event
  if (event) {
    alert(event.target.tagName)
  }
}
function say(message) {
  alert(message)
}

</script>

<!-- We can use the v-on directive, which we typically shorten to the @ symbol, 
 to listen to DOM events and run some JavaScript when they're triggered. 
 The usage would be v-on:click="handler" or with the shortcut, @click="handler". -->

<template>
    <!-- inline handler -->
	<button @click="counter++">Add 1</button>
	<p>The button above has been clicked {{ counter }} times.</p>

    <!-- method handler -->
    <button @click="greet">Greet</button>

    <!-- calling method in inline handler -->
    <button @click="say('bye')">Say hello</button>
</template>
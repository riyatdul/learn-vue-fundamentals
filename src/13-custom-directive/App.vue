<script setup>
const vHighlight = {
  mounted: (el, bind) => {
    el.style.fontSize = `${bind.value}px`,
    el.style.color = 'teal'
  }
}

const vParagraph = {
  mounted: (el) => {
    el.style.color = 'red'
  }
}
</script>

<template>
  <p v-highlight="50">This sentence is important!</p>
  <p v-paragraph>This paragraph is important!</p>
</template>
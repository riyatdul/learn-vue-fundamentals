<script setup>
import {onMounted , useTemplateRef} from 'vue';

const search = useTemplateRef('input-search');
onMounted(() => {
    search.value.focus()
})
</script>

<template>
    <input ref="input-search" type="text" placeholder="Tipe s">
</template>
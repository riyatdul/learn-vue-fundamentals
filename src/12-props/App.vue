<script setup>
import ChildComponent from './components/ChildComponent.vue';
import ChildThreeComponent from './components/ChildThreeComponent.vue';
import ChildTwoComponent from './components/ChildTwoComponent.vue';


</script>

<template>
    <ChildComponent id="1"/>
    <ChildTwoComponent first-name="Riyat" last-name="Dul"/>
    <!-- <ChildThreeComponent post="News" favorite="21"/> Validation Error -->
    <ChildThreeComponent post="News" :favorite="21"/>
</template>
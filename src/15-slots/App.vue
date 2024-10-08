<script setup>
import BaseLayout from './components/BaseLayout.vue';
import Card from './components/Card.vue';
import Child from './components/Child.vue';
import FancyList from './components/FancyList.vue';
import MyComponent from './components/MyComponent.vue';
import SubmitButton from './components/SubmitButton.vue';

</script>

<template>
    <!-- simple -->
    <Child>
        <div>Main Content</div>
    </Child>

   <!-- fallback content -->
   <SubmitButton />
   <SubmitButton>Simpan</SubmitButton>
   <br />

   <!-- named slot -->
   <BaseLayout>
    <template #header>
      <h1>Here might be a page title</h1>
    </template>

    <template #default>
      <p>A paragraph for the main content.</p>
      <p>And another one.</p>
    </template>

    <template #footer>
      <p>Here's some contact info</p>
    </template>
  </BaseLayout>

  <!-- Conditional slot -->
  <Card>
    <template #header>
      <h1>This is the header</h1>
    </template>

    <template #default>
      <p>This is the content</p>
    </template>

    <template #footer>
      <em>This is the footer</em>
    </template>
  </Card>

  <!-- Props slot -->
  <MyComponent v-slot="slotProps">
  	{{ slotProps.text }} {{ slotProps.count }}
  </MyComponent>

  <!-- fancy list -->
  <FancyList api-url="url" :per-page="10">
    <template #item="{ body, username, likes }">
      <div class="item">
        <p>{{ body }}</p>
        <p class="meta">by {{ username }} | {{ likes }} likes</p>
      </div>
    </template>
  </FancyList>

</template>

<style scoped>
.meta {
  font-size: 0.8em;
  color: #42b883;
}
</style>
<script setup>
import { ref } from 'vue'

const message = ref('')
const multiMessage = ref('')
const checked = ref(true)
const checkedNames = ref([])
const picked = ref('One')
const selected = ref('')


</script>

<template>  
  <!-- Input Text -->
  <p>Message is: {{ message }}</p>
  <input v-model="message" placeholder="edit me" />

  <!-- Textarea -->
  <span>Multiline message is:</span>
  <p style="white-space: pre-line;">{{ multiMessage }}</p>
  <textarea v-model="multiMessage" placeholder="add multiple lines"></textarea>
  <br/>
  <!-- bad -->
  <!-- <textarea>{{ text }}</textarea> -->

  <!-- good -->
  <!-- <textarea v-model="text"></textarea> -->

  <!-- Checkbox -->
  <input type="checkbox" id="checkbox" v-model="checked" />
  <label for="checkbox">{{ checked }}</label>

  <div>Checked names: {{ checkedNames }}</div>
  <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
  <label for="jack">Jack</label>

  <input type="checkbox" id="john" value="John" v-model="checkedNames" />
  <label for="john">John</label>
  
  <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
  <label for="mike">Mike</label>

  <!-- Radio -->
  <div>Picked: {{ picked }}</div>
  <input type="radio" id="one" value="One" v-model="picked" />
  <label for="one">One</label>
  
  <input type="radio" id="two" value="Two" v-model="picked" />
  <label for="two">Two</label>

  <!-- Selected -->
  <div>Selected: {{ selected }}</div>
  <select v-model="selected">
    <option disabled value="">Please select one</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
</template>
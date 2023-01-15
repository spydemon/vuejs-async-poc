<script setup>
  import { ref, defineProps } from 'vue';
  defineProps({
    parentCounter: Number
  })
  const counter = ref(0);
  const increment = () => counter.value++;
</script>
<template>
  <div>
    <h2>In child async component</h2>
    <p>Counter : {{ counter }}</p>
    <p>Parent counter: {{ parentCounter }}</p>
    <p @click="increment">Increment</p>
  </div>
</template>
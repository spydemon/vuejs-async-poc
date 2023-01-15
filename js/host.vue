<script setup>
  import {defineAsyncComponent, ref} from "vue";

  let child = defineAsyncComponent({
    /**
     * In the real application, the component location will be generated dynamically at the execution depending on
     * customer configuration.
     */
    loader: () => import(/* webpackIgnore: true */ 'http://localhost:8000/build/child.js'),
    loadingComponent: () => 'Loading...',
    errorComponent: () => 'Error',
    delay: 200,
    timeout: 3000,
  });

  const counter = ref(0);
  const increment = () => counter.value++;
</script>

<template>
  <div>
    <h2>In host component.</h2>
    <p>Counter : {{ counter }}</p>
    <p @click="increment">Increment</p>
    <hr />
    <component :is="child" :parentCounter="counter" />
  </div>
</template>
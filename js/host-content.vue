<script setup>
  import { defineAsyncComponent} from "vue";
  const child = defineAsyncComponent(() => import(/* webpackIgnore: true */ 'http://localhost:8000/build/child.js'))
</script>

<template>
  <div>
    In the host component.
    <child />
  </div>
</template>
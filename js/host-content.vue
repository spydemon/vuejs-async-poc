<script setup async>
  let child = await import(/* webpackIgnore: true */ 'http://localhost:8000/build/child.js');
  child = child.default;
</script>

<template>
  <div>
    In the host component.
    <child />
  </div>
</template>
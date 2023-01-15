<script setup>
  import { shallowRef } from 'vue';
  const count = shallowRef(0);
</script>
<template>
  <div>
    In the child.
    Ref count: {{ count }}
  </div>
</template>
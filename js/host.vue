<script setup>
    import HostContent from './host-content.vue';
</script>
<template>
  <Suspense>
    <HostContent />
    <template #fallback>
      Loading...
    </template>
  </Suspense>
</template>
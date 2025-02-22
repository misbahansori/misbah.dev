<script setup lang="ts">
const { count, increment } = useStateCounter();

count.value++;
</script>

<template>
  <div class="flex flex-col items-start gap-2">
    <div class="flex items-center gap-2 text-lg font-bold">
      <span>Count:</span>
      <span>{{ count }}</span>
    </div>
    <Button @click="increment">Increment</Button>
  </div>
</template>

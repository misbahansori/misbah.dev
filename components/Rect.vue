<script setup lang="ts">
defineProps<{
  x: number;
  y: number;
}>();
</script>

<template>
  <rect :x="x" :y="y" width="1" height="1" fill="currentColor" />
</template>

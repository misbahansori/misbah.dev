<script setup lang="ts">
defineProps<{
  x: number;
  y: number;
}>();
</script>
<template>
  <Rect :x="x" :y="y" />
</template>

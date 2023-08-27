<script setup lang="ts">
const { x, y } = defineProps<{
  x: number;
  y: number;
}>();

const leftWing = computed(() => ({
  x: x - 1,
  y: y - 1,
}));

const rightWing = computed(() => ({
  x: x + 1,
  y: y - 1,
}));
</script>

<template>
  <Rect :x="x" :y="y" />
  <Rect :x="leftWing.x" :y="leftWing.y" />
  <Rect :x="rightWing.x" :y="rightWing.y" />
</template>

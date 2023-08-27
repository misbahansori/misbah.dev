<script setup lang="ts">
const props = defineProps<{
  x: number;
  y: number;
}>();

const leftWing = computed(() => ({
  x: props.x - 1,
  y: props.y + 1,
}));

const rightWing = computed(() => ({
  x: props.x + 1,
  y: props.y + 1,
}));
</script>

<template>
  <Rect :x="x" :y="y" />
  <Rect :x="leftWing.x" :y="leftWing.y" />
  <Rect :x="rightWing.x" :y="rightWing.y" />
</template>

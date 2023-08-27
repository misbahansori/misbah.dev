<script setup lang="ts">
const character = ref({ x: 1, y: 20 });

onKeyStroke("ArrowDown", (e) => {
  e.preventDefault();

  if (character.value.y >= 24 - 1) return;
  character.value.y++;
});

onKeyStroke("ArrowUp", (e) => {
  e.preventDefault();
  character.value.y--;
});

onKeyStroke("ArrowLeft", (e) => {
  e.preventDefault();
  character.value.x--;
});

onKeyStroke("ArrowRight", (e) => {
  e.preventDefault();
  character.value.x++;
});
</script>

<template>
  <svg class="w-full h-full aspect-square bg-white" viewbox="0 0 24 24">
    <Character :x="character.x" :y="character.y" />
    <Enemy :x="8" :y="1" />
    <Enemy :x="14" :y="1" />
  </svg>
</template>

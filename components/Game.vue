e
<script setup lang="ts">
const BOARD_SIZE = 24;
const character = ref({ x: 1, y: 20 });
const enemies = ref([
  { x: 8, y: 1 },
  { x: 14, y: 1 },
]);
const projectiles = ref<
  {
    x: number;
    y: number;
  }[]
>([]);

onKeyStroke("ArrowDown", (e) => {
  e.preventDefault();

  if (character.value.y >= BOARD_SIZE - 1) return;
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

onKeyStroke(" ", (e) => {
  e.preventDefault();
  fire();
});

const fire = () => {
  projectiles.value.push({
    x: character.value.x,
    y: character.value.y - 1,
  });
};

useIntervalFn(() => {
  projectiles.value = projectiles.value.filter((projectile) => {
    projectile.y--;

    return projectile.y >= 0;
  });
}, 100);
</script>

<template>
  <svg
    class="w-full h-full aspect-square bg-white"
    :viewbox="`0 0 ${BOARD_SIZE} ${BOARD_SIZE}`"
  >
    <Character :x="character.x" :y="character.y" />
    <Enemy v-for="enemy in enemies" :x="enemy.x" :y="enemy.y" />
    <Projectile
      v-for="projectile in projectiles"
      :x="projectile.x"
      :y="projectile.y"
    />
  </svg>
</template>

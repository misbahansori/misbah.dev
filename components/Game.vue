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
const { ready: readyToFire, start: startFiring } = useTimeout(500, {
  controls: true,
});

const { ready: readyToSpawnEnemy, start: resetSpawnEnemy } = useTimeout(3000, {
  controls: true,
});

const spawnEnemy = () => {
  resetSpawnEnemy();

  const newEnemy = {
    x: Math.floor(Math.random() * (BOARD_SIZE - 2)) + 1,
    y: Math.floor(Math.random() * 2) + 1,
  };

  if (
    enemies.value.some(
      (enemy) =>
        (enemy.x === newEnemy.x && enemy.y === newEnemy.y) ||
        (enemy.x - 1 === newEnemy.x && enemy.y - 1 === newEnemy.y) ||
        (enemy.x + 1 === newEnemy.x && enemy.y - 1 === newEnemy.y)
    )
  )
    return;

  enemies.value.push(newEnemy);
};

onKeyStroke("ArrowDown", (e) => {
  e.preventDefault();

  if (character.value.y >= BOARD_SIZE - 2) return;
  character.value.y++;
});

onKeyStroke("ArrowUp", (e) => {
  e.preventDefault();

  if (character.value.y <= 0) return;
  character.value.y--;
});

onKeyStroke("ArrowLeft", (e) => {
  e.preventDefault();

  if (character.value.x <= 0 + 1) return;
  character.value.x--;
});

onKeyStroke("ArrowRight", (e) => {
  e.preventDefault();

  if (character.value.x >= BOARD_SIZE - 2) return;
  character.value.x++;
});

onKeyStroke(" ", (e) => {
  e.preventDefault();
  fire();
});

const fire = () => {
  if (!readyToFire.value) return;

  startFiring();
  projectiles.value.push({
    x: character.value.x,
    y: character.value.y - 1,
  });
};

const projectileHitsEnemy = (projectile: { x: number; y: number }): boolean => {
  return enemies.value.some(
    (enemy) =>
      (enemy.x === projectile.x && enemy.y === projectile.y) ||
      (enemy.x - 1 === projectile.x && enemy.y - 1 === projectile.y) ||
      (enemy.x + 1 === projectile.x && enemy.y - 1 === projectile.y)
  );
};

const killEnemy = (projectile: { x: number; y: number }) => {
  enemies.value = enemies.value.filter(
    (enemy) =>
      !(
        (enemy.x === projectile.x && enemy.y === projectile.y) ||
        (enemy.x - 1 === projectile.x && enemy.y - 1 === projectile.y) ||
        (enemy.x + 1 === projectile.x && enemy.y - 1 === projectile.y)
      )
  );
};

watch(readyToSpawnEnemy, (ready) => {
  if (!ready) return;

  spawnEnemy();
});

useIntervalFn(() => {
  if (!projectiles.value.length) return;

  projectiles.value = projectiles.value.filter((projectile) => {
    projectile.y--;

    if (projectileHitsEnemy(projectile)) {
      killEnemy(projectile);
      return false;
    }

    return projectile.y >= 0;
  });
}, 50);
</script>

<template>
  <svg
    class="w-full h-full aspect-square bg-white"
    :viewbox="`0 0 ${BOARD_SIZE} ${BOARD_SIZE}`"
  >
    <Character :x="character.x" :y="character.y" />
    <Enemy
      v-for="enemy in enemies"
      :key="`${enemy.x}-${enemy.y}`"
      :x="enemy.x"
      :y="enemy.y"
    />
    <Projectile
      v-for="projectile in projectiles"
      :key="`${projectile.x}-${projectile.y}`"
      :x="projectile.x"
      :y="projectile.y"
    />
  </svg>
</template>

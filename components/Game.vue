<script setup lang="ts">
const state = ref<"idle" | "playing" | "gameover">("idle");
const BOARD_SIZE = 24;
const character = ref({ x: 1, y: 20 });
const enemies = shallowRef<
  {
    x: number;
    y: number;
  }[]
>([
  { x: 8, y: 1 },
  { x: 14, y: 1 },
]);
const projectiles = shallowRef<
  {
    x: number;
    y: number;
  }[]
>([]);

const enemyProjectiles = shallowRef<
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
        (enemy.x - 2 === newEnemy.x && enemy.y - 2 === newEnemy.y) ||
        (enemy.x + 2 === newEnemy.x && enemy.y - 2 === newEnemy.y)
    )
  )
    return;

  enemies.value.push(newEnemy);
};

onKeyStroke("ArrowDown", (e) => {
  e.preventDefault();
  if (state.value !== "playing") return;
  if (character.value.y >= BOARD_SIZE - 2) return;
  character.value.y++;
});

onKeyStroke("ArrowUp", (e) => {
  e.preventDefault();
  if (state.value !== "playing") return;
  if (character.value.y <= 0) return;
  character.value.y--;
});

onKeyStroke("ArrowLeft", (e) => {
  e.preventDefault();
  if (state.value !== "playing") return;
  if (character.value.x <= 0 + 1) return;
  character.value.x--;
});

onKeyStroke("ArrowRight", (e) => {
  e.preventDefault();
  if (state.value !== "playing") return;
  if (character.value.x >= BOARD_SIZE - 2) return;
  character.value.x++;
});

onKeyStroke(" ", (e) => {
  e.preventDefault();
  state.value = "playing";
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

const enemyFire = (enemy: { x: number; y: number }) => {
  enemyProjectiles.value.push({
    x: enemy.x,
    y: enemy.y + 1,
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
  if (state.value !== "playing") return;

  if (!ready) return;

  spawnEnemy();
});

useIntervalFn(() => {
  if (state.value !== "playing") return;

  if (projectiles.value.length) {
    projectiles.value = projectiles.value.filter((projectile) => {
      projectile.y--;

      if (projectileHitsEnemy(projectile)) {
        killEnemy(projectile);
        return false;
      }

      return projectile.y >= 0;
    });
  }

  if (enemyProjectiles.value.length) {
    enemyProjectiles.value = enemyProjectiles.value.filter((projectile) => {
      projectile.y++;

      if (
        (projectile.x === character.value.x &&
          projectile.y === character.value.y) ||
        (projectile.x - 1 === character.value.x &&
          projectile.y === character.value.y + 1) ||
        (projectile.x + 1 === character.value.x &&
          projectile.y === character.value.y + 1)
      ) {
        state.value = "gameover";
      }

      return projectile.y <= BOARD_SIZE;
    });
  }
}, 50);

useIntervalFn(() => {
  if (state.value !== "playing") return;

  if (enemies.value.length) {
    enemies.value.forEach((enemy) => {
      if (Math.random() > 0.3) return;

      enemyFire(enemy);
    });
  }
}, 1000);
</script>

<template>
  <div class="h-full w-full relative">
    <div class="inset-0 absolute flex items-center justify-center">
      <button
        v-if="state === 'idle'"
        class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 group-hover:text-white"
        @click="state = 'playing'"
      >
        Start
      </button>
      <div
        v-else-if="state === 'gameover'"
        class="flex flex-col items-center gap-2"
      >
        <span class="text-gray-800">Game over!</span>
        <button
          class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 group-hover:text-white"
          @click="state = 'playing'"
        >
          Restart
        </button>
      </div>
    </div>
    <svg
      class="w-full h-full aspect-square"
      :viewbox="`0 0 ${BOARD_SIZE} ${BOARD_SIZE}`"
    >
      <Character :x="character.x" :y="character.y" />
      <Enemy
        v-for="enemy in enemies"
        :key="`enemy-${enemy.x}-${enemy.y}`"
        :x="enemy.x"
        :y="enemy.y"
      />
      <Projectile
        v-for="projectile in projectiles"
        :key="`projectile-${projectile.x}-${projectile.y}`"
        :x="projectile.x"
        :y="projectile.y"
      />
      <Projectile
        v-for="projectile in enemyProjectiles"
        :key="`enemy-projectile-${projectile.x}-${projectile.y}`"
        :x="projectile.x"
        :y="projectile.y"
      />
    </svg>
  </div>
</template>

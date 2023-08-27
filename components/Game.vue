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

const { ready: readyToSpawnEnemy, start: resetSpawnEnemy } = useTimeout(2000, {
  controls: true,
});

const reset = () => {
  state.value = "idle";
  character.value = { x: 1, y: 20 };
  enemies.value = [
    { x: 8, y: 1 },
    { x: 14, y: 1 },
  ];
  projectiles.value = [];
  enemyProjectiles.value = [];
};

const spawnEnemy = () => {
  if (enemies.value.length >= 10) return;

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

  move("down");
});

onKeyStroke("ArrowUp", (e) => {
  e.preventDefault();
  move("up");
});

onKeyStroke("ArrowLeft", (e) => {
  e.preventDefault();
  move("left");
});

onKeyStroke("ArrowRight", (e) => {
  e.preventDefault();
  move("right");
});

const move = (direction: "left" | "right" | "up" | "down") => {
  if (state.value !== "playing") return;

  if (direction === "left") {
    if (character.value.x <= 0 + 1) return;
    character.value.x--;
  }

  if (direction === "right") {
    if (character.value.x >= BOARD_SIZE - 2) return;
    character.value.x++;
  }

  if (direction === "up") {
    if (character.value.y <= 0) return;
    character.value.y--;
  }

  if (direction === "down") {
    if (character.value.y >= BOARD_SIZE - 2) return;
    character.value.y++;
  }
};

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
        <div class="bg-gray-100 px-6 py-4">
          <span class="text-gray-800">Game over!</span>
        </div>
        <button
          class="relative z-10 block bg-gray-100 px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 group-hover:text-white"
          @click="reset"
        >
          Reset
        </button>
      </div>
    </div>
    <div
      class="absolute inset-0 flex items-end justify-between md:hidden translate-y-10"
    >
      <button
        @click="move('left')"
        class="relative z-10 block px-2 py-2 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 group-hover:text-white"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          ></path>
        </svg>
      </button>
      <button
        @click="fire"
        class="relative z-10 block px-2 py-2 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 group-hover:text-white"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
          ></path>
        </svg>
      </button>
      <button
        @click="move('right')"
        class="relative z-10 block px-2 py-2 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 group-hover:text-white"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          ></path>
        </svg>
      </button>
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

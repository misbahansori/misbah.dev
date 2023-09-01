<script setup lang="ts">
interface Coordinate {
  x: number;
  y: number;
}
const BOARD_SIZE = 24;
const gameState = ref<"idle" | "playing" | "gameover">("idle");
const state = shallowRef<{
  renderCount: number;
  character: Coordinate;
  enemies: Coordinate[];
  projectiles: Coordinate[];
  enemyProjectiles: Coordinate[];
}>({
  renderCount: 0,
  character: { x: 1, y: 20 },
  enemies: [
    { x: 8, y: 1 },
    { x: 14, y: 1 },
  ],
  projectiles: [],
  enemyProjectiles: [],
});
const { resume, pause } = useIntervalFn(
  () => {
    moveProjectiles();

    if (state.value.renderCount % 20 === 0) {
      spawnEnemy();

      if (state.value.enemies.length) {
        state.value.enemies.forEach((enemy) => {
          if (Math.random() > 0.3) return;

          enemyFire(enemy);
        });
      }
    }

    state.value.renderCount++;
    triggerRef(state);
  },
  100,
  { immediate: false }
);

const startGame = () => {
  gameState.value = "playing";
  resume();
};

const moveProjectiles = () => {
  if (state.value.projectiles.length) {
    state.value.projectiles = state.value.projectiles.filter((projectile) => {
      projectile.y--;

      if (projectileHitsEnemy(projectile)) {
        killEnemy(projectile);
        return false;
      }

      return projectile.y >= 0;
    });
  }
  if (state.value.enemyProjectiles.length) {
    state.value.enemyProjectiles = state.value.enemyProjectiles.filter(
      (projectile) => {
        projectile.y++;

        if (
          (projectile.x === state.value.character.x &&
            projectile.y === state.value.character.y) ||
          (projectile.x - 1 === state.value.character.x &&
            projectile.y === state.value.character.y + 1) ||
          (projectile.x + 1 === state.value.character.x &&
            projectile.y === state.value.character.y + 1)
        ) {
          gameState.value = "gameover";
        }

        return projectile.y <= BOARD_SIZE;
      }
    );
  }
};

const reset = () => {
  gameState.value = "idle";
  reset();
  state.value.character = { x: 1, y: 20 };
  state.value.enemies = [
    { x: 8, y: 1 },
    { x: 14, y: 1 },
  ];
  state.value.projectiles = [];
  state.value.enemyProjectiles = [];
};

const spawnEnemy = () => {
  if (state.value.enemies.length >= 10) return;

  // find a random x position that is not occupied by an enemy
  let x = Math.floor(Math.random() * BOARD_SIZE);

  while (
    state.value.enemies.some((enemy) => enemy.x <= x - 3 && enemy.x >= x + 3)
  ) {
    x = Math.floor(Math.random() * BOARD_SIZE);
  }

  state.value.enemies.push({
    x,
    y: 1 + Math.floor(Math.random() * 5),
  });
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
  if (gameState.value !== "playing") return;

  if (direction === "left") {
    if (state.value.character.x <= 0 + 1) return;
    state.value.character.x--;
  }

  if (direction === "right") {
    if (state.value.character.x >= BOARD_SIZE - 2) return;
    state.value.character.x++;
  }

  if (direction === "up") {
    if (state.value.character.y <= 0) return;
    state.value.character.y--;
  }

  if (direction === "down") {
    if (state.value.character.y >= BOARD_SIZE - 2) return;
    state.value.character.y++;
  }
};

onKeyStroke(" ", (e) => {
  e.preventDefault();
  gameState.value = "playing";
  fire();
});

const fire = () => {
  state.value.projectiles.push({
    x: state.value.character.x,
    y: state.value.character.y - 1,
  });
};

const enemyFire = (enemy: { x: number; y: number }) => {
  state.value.enemyProjectiles.push({
    x: enemy.x,
    y: enemy.y + 1,
  });
};

const projectileHitsEnemy = (projectile: { x: number; y: number }): boolean => {
  return state.value.enemies.some(
    (enemy) =>
      (enemy.x === projectile.x && enemy.y === projectile.y) ||
      (enemy.x - 1 === projectile.x && enemy.y - 1 === projectile.y) ||
      (enemy.x + 1 === projectile.x && enemy.y - 1 === projectile.y)
  );
};

const killEnemy = (projectile: { x: number; y: number }) => {
  state.value.enemies = state.value.enemies.filter(
    (enemy) =>
      !(
        (enemy.x === projectile.x && enemy.y === projectile.y) ||
        (enemy.x - 1 === projectile.x && enemy.y - 1 === projectile.y) ||
        (enemy.x + 1 === projectile.x && enemy.y - 1 === projectile.y)
      )
  );
};
</script>

<template>
  <div class="h-full w-full relative">
    <div class="inset-0 absolute flex items-center justify-center">
      <button
        v-if="gameState === 'idle'"
        class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 group-hover:text-white"
        @click="startGame"
      >
        Start
      </button>
      <div
        v-else-if="gameState === 'gameover'"
        class="flex flex-col items-center gap-2"
      >
        <div class="bg-gray-100 px-6 py-4">
          <span class="text-gray-800">Game over!</span>
        </div>
        <button
          class="relative z-10 block bg-gray-100 px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 group-hover:text-white"
        >
          Reset
        </button>
      </div>
    </div>
    <div
      class="absolute inset-0 flex items-end justify-between md:hidden translate-y-10"
    >
      <button
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
      <Character :x="state.character.x" :y="state.character.y" />
      <Enemy
        v-for="enemy in state.enemies"
        :key="`enemy-${enemy.x}-${enemy.y}`"
        :x="enemy.x"
        :y="enemy.y"
      />
      <Projectile
        v-for="projectile in state.projectiles"
        :key="`projectile-${projectile.x}-${projectile.y}`"
        :x="projectile.x"
        :y="projectile.y"
      />
      <Projectile
        v-for="projectile in state.enemyProjectiles"
        :key="`enemy-projectile-${projectile.x}-${projectile.y}`"
        :x="projectile.x"
        :y="projectile.y"
      />
    </svg>
  </div>
</template>

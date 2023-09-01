<script setup lang="ts">
const state = ref<"idle" | "playing" | "gameover">("idle");
const BOARD_SIZE = 24;
const direction = ref<"up" | "down" | "left" | "right">("up");
const snake = ref<
  {
    x: number;
    y: number;
  }[]
>([{ x: BOARD_SIZE / 2, y: BOARD_SIZE / 2 }]);
const food = ref({
  x: Math.floor(Math.random() * BOARD_SIZE),
  y: Math.floor(Math.random() * BOARD_SIZE),
});

const reset = () => {
  state.value = "idle";
};

onKeyStroke("ArrowUp", (e) => {
  e.preventDefault();
  direction.value = "up";
});

onKeyStroke("ArrowDown", (e) => {
  e.preventDefault();
  direction.value = "down";
});

onKeyStroke("ArrowLeft", (e) => {
  e.preventDefault();
  direction.value = "left";
});

onKeyStroke("ArrowRight", (e) => {
  e.preventDefault();
  direction.value = "right";
});

useIntervalFn(() => {
  if (state.value !== "playing") return;

  const head = snake.value[0];

  if (direction.value === "up") {
    if (head.y <= 0) {
      state.value = "gameover";
      return;
    }
    snake.value.unshift({ x: head.x, y: head.y - 1 });
  }

  if (direction.value === "down") {
    if (head.y >= BOARD_SIZE - 1) {
      state.value = "gameover";
      return;
    }
    snake.value.unshift({ x: head.x, y: head.y + 1 });
  }

  if (direction.value === "left") {
    if (head.x <= 0) {
      state.value = "gameover";
      return;
    }
    snake.value.unshift({ x: head.x - 1, y: head.y });
  }

  if (direction.value === "right") {
    if (head.x >= BOARD_SIZE - 1) {
      state.value = "gameover";
      return;
    }
    snake.value.unshift({ x: head.x + 1, y: head.y });
  }

  if (snake.value[0].x === food.value.x && snake.value[0].y === food.value.y) {
    console.log("eat");

    food.value = {
      x: Math.floor(Math.random() * BOARD_SIZE),
      y: Math.floor(Math.random() * BOARD_SIZE),
    };
  } else {
    snake.value.pop();
  }
}, 300);
</script>

<template>
  <div class="h-full w-full relative bg-white">
    <div class="inset-0 absolute flex items-center justify-center">
      <button
        v-if="state === 'idle'"
        class="relative z-10 block px-5 bg-gray-100 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 group-hover:text-white"
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
    <svg
      class="w-full h-full aspect-square"
      :viewbox="`0 0 ${BOARD_SIZE} ${BOARD_SIZE}`"
    >
      <Projectile
        v-for="projectile in snake"
        :key="`snake-${projectile.x}-${projectile.y}`"
        :x="projectile.x"
        :y="projectile.y"
      />
      <Projectile :x="food.x" :y="food.y" />
    </svg>
  </div>
</template>

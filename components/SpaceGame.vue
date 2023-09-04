<script setup lang="ts">
const BOARD_SIZE = 48;

const { gameState, state, startGame, resetGame } = useSpaceGame({
  boardSize: BOARD_SIZE,
});
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
          @click="resetGame"
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

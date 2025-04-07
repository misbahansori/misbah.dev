<script setup lang="ts">
const el = ref<HTMLElement | null>(null);

const { elementX: x, elementY: y } = useMouseInElement(el);
</script>

<template>
  <div
    ref="el"
    class="bg-border relative mx-auto w-full max-w-2xl transform-gpu overflow-hidden rounded-(--radius) p-px before:absolute before:inset-0 before:bg-[radial-gradient(var(--spotlight-size)_circle_at_var(--x)_var(--y),var(--spotlight-color-stops))]"
    style="
      --spotlight-color-stops: #1cd1c6, #407cff, transparent;
      --spotlight-size: 100px;
      --radius: 1rem;
    }"
    :style="{
      '--x': x ? `${x}px` : '-100%',
      '--y': y ? `${y}px` : '-100%',
    }"
  >
    <div
      class="bg-card/95 absolute inset-px rounded-[calc(var(--radius)-1px)] backdrop-blur-md"
    />
    <slot />
  </div>
</template>

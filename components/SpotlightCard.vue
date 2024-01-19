<script setup lang="ts">
const el = ref<HTMLElement | null>(null);

const { elementX: x, elementY: y } = useMouseInElement(el);
</script>

<template>
  <div
    ref="el"
    class="relative mx-auto w-full max-w-2xl transform-gpu overflow-hidden rounded-[--radius] bg-border p-px [--radius:theme(borderRadius.2xl)] before:absolute before:inset-0 before:bg-[radial-gradient(var(--spotlight-size)_circle_at_var(--x)_var(--y),var(--spotlight-color-stops))]"
    style="
      --spotlight-color-stops: #1cd1c6, #407cff, transparent;
      --spotlight-size: 100px;
    "
    :style="{
      '--x': x + 'px',
      '--y': y + 'px',
    }"
  >
    <div
      class="absolute inset-px rounded-[calc(var(--radius)-1px)] bg-card/95 backdrop-blur-md"
    />
    <slot />
  </div>
</template>

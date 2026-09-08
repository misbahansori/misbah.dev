<script setup lang="ts">
const colorMode = useColorMode();

function toggle() {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
}
</script>

<template>
  <!-- Icons swap via CSS rather than state, so there is nothing to mismatch on hydration. -->
  <button
    type="button"
    aria-label="Toggle color mode"
    class="text-graph-muted hover:text-graph-accent relative inline-flex size-4 items-center justify-center transition-[color,transform] before:absolute before:top-1/2 before:left-1/2 before:size-11 before:-translate-x-1/2 before:-translate-y-1/2 active:scale-[0.96]"
    @click="toggle"
  >
    <Icon
      name="lucide:moon"
      class="size-4 transition-[opacity,transform,filter] duration-200 [transition-timing-function:cubic-bezier(0.2,0,0,1)] motion-reduce:transition-none dark:scale-[0.25] dark:opacity-0 dark:blur-[4px] motion-reduce:dark:scale-100 motion-reduce:dark:blur-none"
    />
    <Icon
      name="lucide:sun"
      class="absolute inset-0 size-4 scale-[0.25] opacity-0 blur-[4px] transition-[opacity,transform,filter] duration-200 [transition-timing-function:cubic-bezier(0.2,0,0,1)] motion-reduce:scale-100 motion-reduce:blur-none motion-reduce:transition-none dark:scale-100 dark:opacity-100 dark:blur-none"
    />
  </button>
</template>

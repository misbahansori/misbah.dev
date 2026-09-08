<script setup lang="ts">
const colorMode = useColorMode();

function toggle() {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
}
</script>

<template>
  <!-- Labels swap via CSS rather than state, so there is nothing to mismatch on hydration. -->
  <button
    type="button"
    aria-label="Toggle dark mode"
    class="text-graph-muted hover:text-graph-accent font-mono text-xs tracking-wide uppercase transition-colors"
    @click="toggle"
  >
    <span class="dark:hidden">dark</span>
    <span class="hidden dark:inline">light</span>
  </button>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  links: { name: string; path: string }[];
  class?: HTMLAttributes["class"];
}>();

const size = ref(60);
const position = ref(0);

const toggleMenu = (e: any) => {
  // get element width
  const width = e.target?.offsetWidth ?? 0;
  // get element position relative to the offsetParent
  const left = e.target?.offsetLeft ?? 0;

  // set the position and size
  size.value = width;
  position.value = left;
};
</script>

<template>
  <div :class="cn('group relative flex items-center gap-2', props.class)">
    <span
      :style="{
        '--size': size + 'px',
        '--position': position + 'px',
      }"
      class="bg-accent text-accent-foreground absolute inset-y-0 left-0 h-full w-(--size) translate-x-(--position) rounded-lg opacity-0 transition duration-200 ease-in-out group-hover:opacity-100"
    ></span>
    <NuxtLink
      @mouseover="toggleMenu"
      v-for="link in props.links"
      :key="link.name"
      :to="link.path"
      class="group focus-visible:ring-ring relative inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
    >
      {{ link.name }}
    </NuxtLink>
  </div>
</template>

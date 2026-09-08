<script setup lang="ts">
import type { HTMLAttributes } from "vue";

defineProps<{
  /** Rendered as "[ TITLE ]" punched into the top edge of the frame. */
  title?: string;
  contentClass?: HTMLAttributes["class"];
}>();

const captionId = useId();

const corners = [
  "top-0 left-0 -translate-x-1/2 -translate-y-1/2",
  "top-0 right-0 translate-x-1/2 -translate-y-1/2",
  "bottom-0 left-0 -translate-x-1/2 translate-y-1/2",
  "right-0 bottom-0 translate-x-1/2 translate-y-1/2",
];
</script>

<template>
  <figure
    :aria-labelledby="title ? captionId : undefined"
    class="graph-frame text-foreground relative w-full min-w-0 font-mono text-sm"
  >
    <figcaption
      v-if="title"
      :id="captionId"
      class="bg-background absolute top-0 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 px-2.5 tracking-wide whitespace-nowrap uppercase"
    >
      <span class="text-graph-accent">[ {{ title }} ]</span>
    </figcaption>

    <span
      v-for="corner in corners"
      :key="corner"
      aria-hidden="true"
      :class="corner"
      class="bg-background text-graph-frame pointer-events-none absolute z-10 flex size-4 items-center justify-center font-mono text-sm leading-none select-none"
    >
      +
    </span>

    <div :class="cn('min-w-0 px-5 py-7 sm:px-8 sm:py-8', contentClass)">
      <slot />
    </div>
  </figure>
</template>

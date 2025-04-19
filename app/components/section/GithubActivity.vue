<script setup lang="ts">
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>
<template>
  <section>
    <div :class="cn('relative mx-auto max-w-3xl px-4 pt-16', props.class)">
      <BorderX />
      <div class="relative">
        <GithubActivityGraph />
      </div>
    </div>
  </section>
</template>

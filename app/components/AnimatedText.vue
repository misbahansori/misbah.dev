<script setup lang="ts">
import { Motion, type Easing } from "motion-v";

const {
  text,
  splitBy = "char",
  delay = 0.4,
  staggerDelay = 0.075,
  duration = 1,
  ease = "easeOut",
} = defineProps<{
  text: string;
  splitBy?: "char" | "word" | "sentence";
  delay?: number;
  staggerDelay?: number;
  duration?: number;
  ease?: Easing;
}>();

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration,
      ease,
      delayChildren: delay,
      staggerChildren: staggerDelay,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const chars = computed(() => {
  if (splitBy === "char") {
    return text.split("");
  } else if (splitBy === "word") {
    return text.split(" ");
  } else if (splitBy === "sentence") {
    return text.split("\n");
  }
});
</script>

<template>
  <Motion :variants="container" initial="hidden" animate="show">
    <Motion
      as="span"
      v-for="(char, index) in chars"
      :key="index"
      :variants="item"
    >
      {{ char }}{{ splitBy === "word" ? " " : "" }}
    </Motion>
  </Motion>
</template>

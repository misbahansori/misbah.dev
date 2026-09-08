<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /** Position in a staggered group. 30ms each, capped at 280ms. */
    index?: number;
    /** Fraction of the element that must be visible before it reveals. */
    amount?: number;
    as?: string;
  }>(),
  { index: 0, amount: 0.2, as: "div" },
);

const el = ref<HTMLElement | null>(null);

// Server-rendered markup carries neither class, so content is visible without
// JavaScript. The hidden state is only ever applied on the client, after mount.
const hidden = ref(false);
const revealed = ref(false);

const { stop } = useIntersectionObserver(
  el,
  ([entry]) => {
    if (entry?.isIntersecting) reveal();
  },
  { threshold: props.amount },
);

function reveal() {
  hidden.value = false;
  revealed.value = true;
  stop();
}

onMounted(() => {
  if (!el.value || !window.IntersectionObserver) return;

  // Anything already on screen animates straight away; only off-screen content
  // is hidden and left to the observer.
  if (el.value.getBoundingClientRect().top < window.innerHeight) reveal();
  else hidden.value = true;
});
</script>

<template>
  <component
    :is="as"
    ref="el"
    :class="[hidden && 'reveal-hidden', revealed && 'reveal-in']"
    :style="{ '--reveal-delay': `${revealDelay(index)}s` }"
  >
    <slot />
  </component>
</template>

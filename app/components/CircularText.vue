<script setup lang="ts">
import { Motion } from "motion-v";
import type { HTMLAttributes } from "vue";
import { computed, onUnmounted, ref } from "vue";

interface CircularTextProps {
  text: string;
  spinDuration?: number;
  onHover?: "slowDown" | "speedUp" | "pause" | "goBonkers";
  class?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<CircularTextProps>(), {
  text: "",
  spinDuration: 20,
  class: "",
});

const letters = computed(() => Array.from(props.text));
const isHovered = ref(false);

const currentRotation = ref(0);
const animationId = ref<number | null>(null);
const lastTime = ref<number>(Date.now());
const rotationSpeed = ref<number>(0);

const getCurrentSpeed = () => {
  if (isHovered.value && props.onHover === "pause") return 0;

  const baseDuration = props.spinDuration;
  const baseSpeed = 360 / baseDuration;

  if (!isHovered.value) return baseSpeed;

  switch (props.onHover) {
    case "slowDown":
      return baseSpeed / 2;
    case "speedUp":
      return baseSpeed * 4;
    case "goBonkers":
      return baseSpeed * 20;
    default:
      return baseSpeed;
  }
};

const getCurrentScale = () => {
  return isHovered.value && props.onHover === "goBonkers" ? 0.8 : 1;
};

const animate = () => {
  const now = Date.now();
  const deltaTime = (now - lastTime.value) / 1000;
  lastTime.value = now;

  const targetSpeed = getCurrentSpeed();

  const speedDiff = targetSpeed - rotationSpeed.value;
  const smoothingFactor = Math.min(1, deltaTime * 5);
  rotationSpeed.value += speedDiff * smoothingFactor;

  currentRotation.value =
    (currentRotation.value + rotationSpeed.value * deltaTime) % 360;

  animationId.value = requestAnimationFrame(animate);
};

const startAnimation = () => {
  if (animationId.value) {
    cancelAnimationFrame(animationId.value);
  }
  lastTime.value = Date.now();
  rotationSpeed.value = getCurrentSpeed();
  animate();
};

onMounted(() => {
  startAnimation();
});

onUnmounted(() => {
  if (animationId.value) {
    cancelAnimationFrame(animationId.value);
  }
});

const handleHoverStart = () => {
  isHovered.value = true;
};

const handleHoverEnd = () => {
  isHovered.value = false;
};

const getLetterTransform = (index: number) => {
  const rotationDeg = (360 / letters.value.length) * (index + 100);
  const factor = Math.PI / letters.value.length;
  const x = factor * index;
  const y = factor * index;
  return `rotateZ(${rotationDeg}deg) translate3d(${x}px, ${y}px, 0)`;
};
</script>

<template>
  <Motion
    :animate="{
      rotate: currentRotation,
      scale: getCurrentScale(),
    }"
    :transition="{
      rotate: {
        duration: 0,
      },
      scale: {
        type: 'spring',
        damping: 20,
        stiffness: 300,
      },
    }"
    :class="
      cn(
        'relative m-0 size-44 origin-center cursor-pointer rounded-full text-center font-black text-white',
        props.class,
      )
    "
    @mouseenter="handleHoverStart"
    @mouseleave="handleHoverEnd"
  >
    <span
      v-for="(letter, i) in letters"
      :key="i"
      class="absolute inset-0 inline-block text-base leading-relaxed tracking-tight transition-all duration-500 ease-[cubic-bezier(0,0,0,1)]"
      :style="{
        transform: getLetterTransform(i),
        WebkitTransform: getLetterTransform(i),
      }"
    >
      {{ letter }}
    </span>
  </Motion>
</template>

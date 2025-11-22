<script setup lang="ts">
import { Motion } from "motion-v";

const fadeUpVariant = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const transition = {
  duration: 0.5,
};
</script>

<template>
  <section>
    <div class="relative mx-auto max-w-3xl px-4 py-16 lg:py-24">
      <BorderX />
      <div class="relative flex flex-col items-start gap-4">
        <div class="relative inline-flex">
          <CircularText
            text="✦ MISBAH ANSORI ✦ FULL STACK DEVELOPER "
            :spin-duration="20"
            class="border border-black bg-emerald-300 text-black dark:bg-teal-300"
          />
          <div
            class="absolute top-1/2 left-1/2 size-30 -translate-x-1/2 -translate-y-1/2"
          >
            <img
              :src="`/img/misbah.jpg`"
              alt="Misbah Ansori Profile Picture"
              class="h-full w-full rounded-full border border-black"
            />
          </div>
        </div>
        <Motion
          :variants="fadeUpVariant"
          :initial="'initial'"
          :whileInView="'animate'"
          :inViewOptions="{ once: true }"
          :transition="{ ...transition, delay: 0.5 }"
        >
          <h1 class="text-3xl/snug md:text-4xl/snug">
            <AnimatedText text="Hey, I'm Misbah Ansori." />
            <AnimatedText
              text="Full Stack Developer"
              :delay="0.8"
              class="font-serif font-medium tracking-wide italic"
            />
          </h1>
        </Motion>
        <Motion
          :variants="fadeUpVariant"
          :initial="'initial'"
          :whileInView="'animate'"
          :inViewOptions="{ once: true }"
          :transition="{ ...transition, delay: 0.7 }"
        >
          <p
            class="text-muted-foreground/80 max-w-md text-base/loose md:max-w-xl md:text-lg/loose"
          >
            A passionate developer with a strong interest in web development and
            other technologies. Proficient and experienced in both frontend and
            backend.
          </p>
        </Motion>
      </div>
    </div>
  </section>
</template>

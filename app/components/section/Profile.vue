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
      <div class="relative flex flex-col gap-4">
        <Motion
          asChild
          :variants="fadeUpVariant"
          :initial="'initial'"
          :whileInView="'animate'"
          :inViewOptions="{ once: true }"
          :transition="{ ...transition, delay: 0.3 }"
        >
          <img
            :src="`/img/misbah.jpg`"
            alt="Misbah Ansori Profile Picture"
            class="border-border h-24 w-24 rounded-full border-1 shadow-sm"
          />
        </Motion>
        <Motion
          :variants="fadeUpVariant"
          :initial="'initial'"
          :whileInView="'animate'"
          :inViewOptions="{ once: true }"
          :transition="{ ...transition, delay: 0.5 }"
        >
          <h1 class="text-3xl/snug md:text-4xl/snug">
            Hey, I'm Misbah Ansori.
            <br />
            <span class="font-serif font-medium tracking-wide italic">
              Full Stack Developer
            </span>
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

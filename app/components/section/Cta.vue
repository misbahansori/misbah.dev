<script setup lang="ts">
import { buttonVariants } from "~/components/ui/button";

const fadeInVariant = {
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
  duration: 0.6,
};
</script>
<template>
  <section>
    <div class="bg-pattern relative border-y">
      <div class="relative mx-auto max-w-3xl px-4">
        <BorderX />

        <div class="flex">
          <div class="bg-background relative flex gap-4">
            <div
              class="bg-background absolute -inset-x-2 inset-y-0 border-x lg:-inset-x-4"
            />
            <div class="relative py-4">
              <Motion
                :variants="fadeInVariant"
                :initial="'initial'"
                :whileInView="'animate'"
                :inViewOptions="{ once: true }"
                :transition="{ ...transition, delay: 0.5 }"
              >
                <NuxtLink
                  to="/about"
                  :class="
                    cn(
                      buttonVariants({ variant: 'default', size: 'lg' }),
                      'group rounded-full',
                    )
                  "
                >
                  <span>View profile</span>
                  <Icon
                    name="lucide:arrow-right"
                    class="size-4 transition group-hover:translate-x-1"
                  />
                </NuxtLink>
              </Motion>
            </div>
            <div class="bg-border relative h-full w-px" />
            <div class="relative py-4">
              <Motion
                :variants="fadeInVariant"
                :initial="'initial'"
                :whileInView="'animate'"
                :inViewOptions="{ once: true }"
                :transition="{ ...transition, delay: 0.7 }"
              >
                <a
                  href="mailto:misbah.ansori24@gmail.com"
                  :class="
                    cn(
                      buttonVariants({ variant: 'secondary', size: 'lg' }),
                      'rounded-full',
                    )
                  "
                >
                  <span class="relative flex size-3">
                    <span
                      class="bg-secondary-foreground/80 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                    ></span>
                    <span
                      class="bg-secondary-foreground relative inline-flex size-3 rounded-full"
                    ></span>
                  </span>
                  Available for Projects
                </a>
              </Motion>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

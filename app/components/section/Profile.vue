<script setup lang="ts">
import { buttonVariants } from "~/components/ui/button";

const props = defineProps<{
  shouldShowButton?: boolean;
}>();
</script>

<template>
  <section>
    <div class="relative mx-auto max-w-3xl px-4 py-16 lg:py-24">
      <BorderX />
      <div class="flex flex-col gap-4">
        <img
          :src="`/img/misbah.jpg`"
          alt="Misbah Ansori Profile Picture"
          class="border-border h-24 w-24 rounded-full border-1 shadow-sm"
        />
        <h1 class="text-3xl/snug md:text-4xl/snug">
          Hey, I'm Misbah Ansori.
          <br />
          Full Stack Developer
        </h1>
        <p
          class="text-muted-foreground/80 max-w-md text-base/loose md:max-w-xl md:text-lg/loose"
        >
          A passionate developer who has a strong interest in web development
          and other technologies. Proficient and experienced in both frontend
          and backend.
        </p>
      </div>
    </div>
    <div v-if="props.shouldShowButton" class="bg-pattern border-y">
      <div class="relative mx-auto max-w-3xl px-4">
        <BorderX />

        <div class="flex">
          <div class="bg-background relative flex gap-4">
            <div
              class="bg-background absolute -inset-x-2 inset-y-0 border-x lg:-inset-x-4"
            />
            <div class="relative py-4">
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
            </div>
            <div class="bg-border relative h-full w-px" />
            <div class="relative py-4">
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
            </div>
          </div>
        </div>
      </div>
    </div>
    <PatternSeparator v-else />
  </section>
</template>

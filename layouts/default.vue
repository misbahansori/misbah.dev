<script setup lang="ts">
import { MoonIcon, SunIcon } from "@radix-icons/vue";

const colorMode = useColorMode();
</script>

<template>
  <div class="min-h-screen">
    <div
      aria-hidden="true"
      class="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"
    />

    <section class="mx-auto max-w-3xl px-4">
      <nav class="flex items-center justify-end gap-8 py-4">
        <div class="flex items-center gap-2">
          <NuxtLink
            to="/blog"
            class="rounded-md px-4 py-2 text-sm hover:bg-accent"
          >
            Blog
          </NuxtLink>
          <NuxtLink
            to="/about"
            class="rounded-md px-4 py-2 text-sm hover:bg-accent"
          >
            About
          </NuxtLink>
        </div>
        <Button
          v-if="colorMode.value === 'dark'"
          variant="ghost"
          @click="colorMode.value = 'light'"
          class="h-auto p-2"
        >
          <SunIcon class="h-5 w-5" />
        </Button>
        <Button
          v-else
          variant="ghost"
          @click="colorMode.value = 'dark'"
          class="h-auto p-2"
        >
          <MoonIcon class="h-5 w-5" />
        </Button>
      </nav>
    </section>
    <slot />
  </div>
</template>

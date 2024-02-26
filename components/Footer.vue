<script setup lang="ts">
import { MoonIcon, SunIcon } from "@radix-icons/vue";

const colorMode = useColorMode();
const { links } = useNavigation();

links.unshift({ name: "Home", path: "/" });
</script>

<template>
  <section class="mx-auto max-w-3xl px-4">
    <footer
      class="flex flex-col items-center justify-between gap-8 py-4 sm:flex-row md:py-8"
    >
      <AnimatedTabs :links="links" />
      <div>
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
      </div>
    </footer>
  </section>
</template>

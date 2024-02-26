<script setup lang="ts">
import { buttonVariants } from "~/components/ui/button";

const { links } = useNavigation();
</script>

<template>
  <section class="mx-auto max-w-3xl px-4">
    <nav class="flex items-center justify-between gap-8 py-4">
      <NuxtLink
        to="/"
        :class="
          cn(
            buttonVariants({ variant: 'outline' }),
            'h-10 w-10 bg-background shadow-none',
          )
        "
      >
        <span class="font-bold">./</span>
      </NuxtLink>
      <AnimatedTabs :links="links" />
    </nav>
  </section>
</template>

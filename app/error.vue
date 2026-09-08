<script setup lang="ts">
import type { NuxtError } from "#app";

defineProps<{ error: NuxtError }>();
</script>

<template>
  <div class="flex min-h-dvh flex-col font-sans antialiased">
    <AppHeader />

    <main class="mx-auto w-full max-w-4xl flex-1 px-5 pb-24 sm:px-8">
      <GraphFrame :title="`Error ${error.statusCode}`" content-class="flex flex-col gap-6">
        <p class="text-graph-muted">
          {{ error.statusMessage || "Something went wrong." }}
        </p>
        <NuxtLink
          to="/"
          class="text-graph-accent hover:text-foreground w-fit transition-colors"
          @click="clearError({ redirect: '/' })"
        >
          ▶ Back to index
        </NuxtLink>
      </GraphFrame>
    </main>

    <AppFooter />
  </div>
</template>

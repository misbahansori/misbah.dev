<script setup lang="ts">
useHead({
  title: "My portfolios",
});
useSeoMeta({
  title: "My portfolios",
  description: "Useful links that I often visit and use",
  ogTitle: "My portfolios",
  ogDescription: "Useful links that I often visit and use",
});
</script>

<template>
  <section class="mx-auto max-w-3xl px-4">
    <div class="flex flex-col gap-4 py-6 lg:py-8">
      <h1 class="text-xl font-bold">My Portfolios</h1>
      <p class="text-muted-foreground">Here are some of my portfolios</p>
      <div class="pt-8">
        <div class="flex flex-col items-center justify-center gap-4">
          <div>
            <Icon
              name="my-icon:task-empty"
              mode="svg"
              class="mx-auto mt-8 size-40 animate-hover text-muted-foreground"
              :font-controlled="false"
            />

            <Icon
              name="my-icon:empty-shadow"
              mode="svg"
              class="mx-auto h-12 w-40 animate-hover-shadow text-muted-foreground"
              :font-controlled="false"
            />
          </div>

          <p class="max-w-sm text-center italic leading-loose">
            Just an empty page for now. Hopefully I can show something here
            soon.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

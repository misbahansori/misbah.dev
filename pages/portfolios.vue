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
            <SvgoTaskEmpty
              class="animate-hover mx-auto mt-8 w-40 text-muted-foreground"
              :font-controlled="false"
            />
            <SvgoEmptyShadow
              class="animate-hover-shadow mx-auto w-40 text-muted-foreground"
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

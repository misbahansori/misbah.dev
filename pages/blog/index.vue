<script setup lang="ts">
useHead({
  title: "My Blog",
});
useSeoMeta({
  title: "My Blog",
  description: "Just some random thoughts of mine",
  ogTitle: "My Blog",
  ogDescription: "Just some random thoughts of mine",
  ogImage: "/images/og/blog.png",
});
</script>

<template>
  <section class="mx-auto max-w-3xl px-4">
    <div class="flex flex-col gap-4 py-6 lg:py-8">
      <h1 class="text-xl font-bold">My Blog</h1>
      <p class="text-muted-foreground">
        A place where I share my thoughts and experiences
      </p>
      <div class="pt-8">
        <div
          class="flex items-center justify-center text-center italic text-muted-foreground"
        >
          Just an empty page for now. Hopefully I can write something here soon.
        </div>
        <!-- <ContentList path="/blog" v-slot="{ list }">
          <div v-for="article in list" :key="article._path">
            <article class="group relative">
              <div
                class="absolute -inset-x-4 -inset-y-2.5 transition group-hover:bg-accent-foreground/5 group-hover:backdrop-blur-[2px] sm:rounded-2xl md:-inset-x-6 md:-inset-y-4"
              ></div>
              <div class="relative">
                <h3 class="pt-8 text-base font-semibold tracking-tight lg:pt-0">
                  {{ article.title }}
                </h3>
                <div class="mb-4 mt-2 line-clamp-2">
                  <p>
                    {{ article.description }}
                  </p>
                </div>
              </div>
              <NuxtLink
                class="flex items-center text-sm font-medium text-sky-500"
                :to="article._path"
              >
                <span
                  class="absolute -inset-x-4 -inset-y-2.5 sm:rounded-2xl md:-inset-x-6 md:-inset-y-4"
                ></span>
                <span class="relative">
                  Read more
                  <span class="sr-only">, {{ article.title }}</span>
                </span>
              </NuxtLink>
            </article>
          </div>
        </ContentList> -->
      </div>
    </div>
  </section>
</template>

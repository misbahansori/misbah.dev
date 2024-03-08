<script setup lang="ts">
useHead({
  title: "My Blog",
});
useSeoMeta({
  title: "My Blog",
  description:
    "Just some random thoughts of mine. A place where I share my thoughts and experiences",
  ogTitle: "My Blog",
  ogDescription:
    "Just some random thoughts of mine. A place where I share my thoughts and experiences",
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
        <ContentList
          path="/blog"
          :query="{
            order: '-createdAt',
          }"
        >
          <template #default="{ list }">
            <div v-for="article in list" :key="article._path" class="md:py-6">
              <ArticleItem :article="article" />
            </div>
          </template>
          <template #not-found>
            <div class="flex flex-col items-center justify-center gap-4">
              <div>
                <SvgoBlogEmpty
                  class="mx-auto mt-8 w-40 animate-hover text-muted-foreground"
                  :font-controlled="false"
                />
                <SvgoEmptyShadow
                  class="mx-auto w-40 animate-hover-shadow text-muted-foreground"
                  :font-controlled="false"
                />
              </div>

              <p class="max-w-sm text-center italic leading-loose">
                Just an empty page for now. Hopefully I can write something here
                soon.
              </p>
            </div>
          </template>
        </ContentList>
      </div>
    </div>
  </section>
</template>

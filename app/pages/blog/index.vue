<script setup lang="ts">
useSeoMeta({
  title: "My Blog",
  description:
    "Just some random thoughts of mine. A place where I share my thoughts and experiences",
  ogTitle: "My Blog",
  ogDescription:
    "Just some random thoughts of mine. A place where I share my thoughts and experiences",
  twitterTitle: "My Blog",
  twitterDescription:
    "Just some random thoughts of mine. A place where I share my thoughts and experiences",
  twitterCard: "summary_large_image",
});

const { data: blog } = await useAsyncData("blog", () =>
  queryCollection("blog").order("createdAt", "DESC").all(),
);
</script>

<template>
  <section>
    <div class="min-h-screen-min relative mx-auto max-w-3xl px-4">
      <BorderX />
      <div class="flex flex-col gap-4 py-6 lg:py-8">
        <h1 class="text-xl font-bold">My Blog</h1>
        <p class="text-muted-foreground">
          A place where I share my thoughts and experiences
        </p>
        <div>
          <div v-if="blog?.length" v-for="article in blog" :key="article.path">
            <ArticleItem :article="article" />
          </div>
          <div v-else class="flex flex-col items-center justify-center gap-4">
            <div>
              <Icon
                name="my-icon:task-empty"
                mode="svg"
                class="animate-hover text-muted-foreground mx-auto mt-8 size-40"
                :font-controlled="false"
              />
              <Icon
                name="my-icon:empty-shadow"
                mode="svg"
                class="animate-hover-shadow text-muted-foreground mx-auto h-12 w-40"
                :font-controlled="false"
              />
            </div>
            <p class="max-w-sm text-center leading-loose italic">
              Just an empty page for now. Hopefully I can write something here
              soon.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

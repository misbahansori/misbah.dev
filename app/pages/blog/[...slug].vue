<script setup lang="ts">
const route = useRoute();

const { data: article } = await useAsyncData("article", () =>
  queryCollection("blog").path(route.path).first(),
);

if (!article.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Article not found",
  });
}

useSeoMeta({
  title: article.value.title,
  description: article.value.description,
  ogTitle: article.value.title,
  ogDescription: article.value.description,
  ogImage: "https://misbah.dev/img/og.jpg",
  ogUrl: route.fullPath,
  ogType: "article",
  twitterTitle: article.value.title,
  twitterDescription: article.value.description,
  twitterCard: "summary_large_image",
  twitterImage: "https://misbah.dev/img/og.jpg",
});
</script>
<template>
  <section class="mx-auto max-w-3xl px-4">
    <div class="flex flex-col gap-4 py-6 lg:py-8">
      <div
        class="prose dark:prose-invert prose-pre:bg-muted prose-pre:p-4 prose-hr:my-8"
      >
        <ContentRenderer v-if="article" :value="article" />
      </div>
    </div>
  </section>
</template>

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
</script>
<template>
  <section class="mx-auto max-w-3xl px-4">
    <div class="flex flex-col gap-4 py-6 lg:py-8">
      <div
        class="prose-sm dark:prose-invert md:prose prose-pre:bg-muted prose-pre:p-4 prose-hr:my-8"
      >
        <ContentRenderer v-if="article" :value="article" />
      </div>
    </div>
  </section>
</template>

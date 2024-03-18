<script setup lang="ts">
const { toc } = useContent();
</script>
<template>
  <section class="mx-auto max-w-3xl px-4">
    <div class="flex flex-col gap-4 py-6 lg:py-8">
      <div class="prose dark:prose-invert prose-pre:bg-muted prose-pre:p-4">
        <ContentDoc />
      </div>
    </div>
  </section>
</template>

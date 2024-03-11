<script setup lang="ts">
const colorMode = useColorMode();

useHead({
  meta: [
    {
      name: "theme-color",
      content: colorMode.value === "dark" ? "#020817" : "#ffffff",
    },
  ],
});
</script>

<template>
  <div class="relative flex min-h-screen min-w-0 flex-col">
    <div
      aria-hidden="true"
      class="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:linear-gradient(to_bottom,white_15%,transparent_50%)]"
    />

    <div>
      <Navbar />
    </div>
    <main class="flex-1">
      <section class="mx-auto max-w-3xl px-4">
        <div class="flex flex-col gap-4 py-6 lg:py-8">
          <div
            class="prose dark:prose-invert prose-pre:bg-muted prose-pre:py-6"
          >
            <ContentDoc />
          </div>
        </div>
        <PrevNextPosts />
      </section>
    </main>
    <div>
      <Footer />
    </div>
  </div>
</template>

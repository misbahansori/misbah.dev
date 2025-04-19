<script setup lang="ts">
const colorMode = useColorMode();

useHead({
  meta: [
    {
      name: "theme-color",
      content: colorMode.preference === "dark" ? "#020817" : "#ffffff",
    },
  ],
});
</script>

<template>
  <div
    class="relative flex min-h-screen min-w-0 flex-col font-sans antialiased [--navbar-height:5rem]"
  >
    <div>
      <Navbar />
    </div>
    <main class="flex-1">
      <slot />
    </main>
    <div>
      <Footer />
    </div>
  </div>
</template>

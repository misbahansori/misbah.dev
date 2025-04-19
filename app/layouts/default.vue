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
    class="relative flex min-h-screen min-w-0 flex-col font-sans antialiased [--navbar-height:3rem] md:[--navbar-height:5rem]"
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
  <DevOnly>
    <div class="fixed bottom-0 left-0 z-50">
      <div
        class="bg-primary text-primary-foreground tesm rounded-tr-sm p-2 font-medium"
      >
        <div class="sm:hidden">BASE</div>
        <div class="hidden sm:block md:hidden">SM</div>
        <div class="hidden md:block lg:hidden">MD</div>
        <div class="hidden lg:block xl:hidden">LG</div>
        <div class="hidden xl:block 2xl:hidden">XL</div>
        <div class="hidden 2xl:block">2XL</div>
      </div>
    </div>
  </DevOnly>
</template>

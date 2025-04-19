<script setup lang="ts">
const colorMode = useColorMode();
const { links } = useNavigation();

const footerLinks = computed(() => [{ name: "Home", path: "/" }, ...links]);
</script>

<template>
  <section class="border-t">
    <div class="relative mx-auto max-w-3xl px-4">
      <BorderX />
      <footer
        class="relative flex h-(--navbar-height) flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between"
      >
        <AnimatedTabs :links="footerLinks" />
      </footer>
    </div>
  </section>
</template>

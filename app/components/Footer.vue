<script setup lang="ts">
const colorMode = useColorMode();
const { links } = useNavigation();

const footerLinks = computed(() => [{ name: "Home", path: "/" }, ...links]);
</script>

<template>
  <section class="mx-auto max-w-3xl px-4">
    <footer
      class="flex flex-col items-center justify-between gap-8 py-4 sm:flex-row md:py-8"
    >
      <AnimatedTabs :links="footerLinks" />
      <div>
        <Button
          variant="ghost"
          @click="
            colorMode.preference =
              colorMode.preference === 'dark' ? 'light' : 'dark'
          "
          class="h-auto p-2"
        >
          <ColorScheme>
            <Icon
              name="tabler:moon"
              v-if="colorMode.preference === 'dark'"
              class="h-5 w-5"
            />

            <Icon name="tabler:sun" v-else class="h-5 w-5" />
          </ColorScheme>
        </Button>
      </div>
    </footer>
  </section>
</template>

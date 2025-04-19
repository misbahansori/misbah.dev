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
        class="relative flex h-(--navbar-height) flex-col items-center justify-between gap-8 sm:flex-row"
      >
        <AnimatedTabs :links="footerLinks" />
        <div>
          <Button
            variant="ghost"
            @click="
              colorMode.preference =
                colorMode.preference === 'dark' ? 'light' : 'dark'
            "
            class="h-auto px-2 py-2"
          >
            <Icon
              name="tabler:moon"
              v-if="colorMode.preference === 'dark'"
              class="size-5"
            />
            <Icon name="tabler:sun" v-else class="size-5" />
          </Button>
        </div>
      </footer>
    </div>
  </section>
</template>

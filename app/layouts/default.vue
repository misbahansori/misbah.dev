<template>
  <div class="flex min-h-dvh flex-col font-sans antialiased">
    <AppHeader />
    <main class="mx-auto w-full max-w-4xl flex-1 px-5 pb-24 sm:px-8">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

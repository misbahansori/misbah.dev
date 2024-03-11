<template>
  <h1 class="text-xl font-bold">
    <slot />
  </h1>
  <p v-if="$slots.description" class="text-muted-foreground">
    <slot name="description" />
  </p>
</template>

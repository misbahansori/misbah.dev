<template>
  <section class="mx-auto max-w-3xl px-4">
    <div class="flex flex-col gap-4 py-6 lg:py-8">
      <h1 class="text-xl font-bold">My Blog</h1>
      <p class="text-muted-foreground">Just some random thoughts of mine</p>
      <div class="pt-12">
        <ContentList path="/blog" v-slot="{ list }">
          <NuxtLink
            v-for="article in list"
            :key="article._path"
            :to="article._path"
          >
            <h2>{{ article.title }}</h2>
          </NuxtLink>
        </ContentList>
      </div>
    </div>
  </section>
</template>

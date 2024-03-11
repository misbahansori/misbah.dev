<template>
  <div class="pt-8">
    <ContentList
      path="/blog"
      :query="{
        where: [
          {
            _path: {
              $ne: '/blog',
            },
          },
        ],
        order: '-createdAt',
      }"
    >
      <template #default="{ list }">
        <div v-for="article in list" :key="article._path" class="md:py-6">
          <ArticleItem :article="article" />
        </div>
      </template>
      <template #not-found>
        <div class="flex flex-col items-center justify-center gap-4">
          <div>
            <SvgoBlogEmpty
              class="mx-auto mt-8 w-40 animate-hover text-muted-foreground"
              :font-controlled="false"
            />
            <SvgoEmptyShadow
              class="mx-auto w-40 animate-hover-shadow text-muted-foreground"
              :font-controlled="false"
            />
          </div>

          <p class="max-w-sm text-center italic leading-loose">
            Just an empty page for now. Hopefully I can write something here
            soon.
          </p>
        </div>
      </template>
    </ContentList>
  </div>
</template>

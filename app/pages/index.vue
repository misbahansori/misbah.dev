<script setup lang="ts">
// defineOgImageComponent("HomePage", {
//   title: "Hi, I'm Misbah Ansori",
//   headline: "Fullstack Developer",
//   description:
//     "I love to build something that can help people and make life easier",
//   image: "/img/misbah.jpg",
// });

useSeoMeta({
  title: "Hi, I'm Misbah Ansori - Fullstack Developer",
  description:
    "I love to build something that can help people and make life easier",
  ogTitle: "Hi, I'm Misbah Ansori - Fullstack Developer",
  ogDescription:
    "I love to build something that can help people and make life easier",
  ogUrl: "https://misbah.dev",
  twitterTitle: "Hi, I'm Misbah Ansori - Fullstack Developer",
  twitterDescription:
    "I love to build something that can help people and make life easier",
  twitterCard: "summary_large_image",
  twitterSite: "@MisbahAnsori24",
  twitterCreator: "@MisbahAnsori24",
});

const { data: blog } = await useAsyncData("blog", () =>
  queryCollection("blog").order("createdAt", "DESC").all(),
);
</script>
<template>
  <SectionProfile />
  <!-- <SectionSkills />
  <SectionWorkExperience /> -->
  <!-- <section class="mx-auto max-w-3xl px-4">
    <div class="flex flex-col py-6 lg:py-8">
      <h1 class="text-xl font-bold">My Blog</h1>

      <div>
        <div v-if="blog?.length" v-for="article in blog" :key="article.path">
          <ArticleItem :article="article" />
        </div>

        <div v-else class="flex flex-col items-center justify-center gap-4">
          <div>
            <Icon
              name="my-icon:task-empty"
              mode="svg"
              class="animate-hover text-muted-foreground mx-auto mt-8 size-40"
              :font-controlled="false"
            />

            <Icon
              name="my-icon:empty-shadow"
              mode="svg"
              class="animate-hover-shadow text-muted-foreground mx-auto h-12 w-40"
              :font-controlled="false"
            />
          </div>

          <p class="max-w-sm text-center leading-loose italic">
            Just an empty page for now. Hopefully I can write something here
            soon.
          </p>
        </div>
      </div>
    </div>
  </section> -->
</template>

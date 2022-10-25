<template>
  <section class="text-gray-600 body-font overflow-hidden">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-12" v-if="posts">
        <news-latest-card
          v-for="(post, index) in posts"
          :title="post.title"
          :section="post.section"
          :text="post.description"
          :link="`/neuigkeiten/${post.slug}`"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "NewsLatest",
  props: {
    posts: {
      type: Array,
      default: [],
    },
  }
}
</script>
<template>
  <main>
    <section class="text-gray-600 body-font py-24" v-if="post">
      <div class="container px-5 mx-auto flex flex-wrap">
        <div class="md:w-3/5 mx-auto">
          <article>
            <h5
              v-if="post.createdAt"
              class="inline-block py-1 my-2 bg-gray text-gray-400 text-sm font-medium rounded-sm whitespace-no-wrap"
            >
              {{ post.createdAt | formateDate }}
            </h5>
            <div class="flex flex-row justify-between">
              <h1 class="text-2xl font-medium text-gray-900 title-font mb-2">
                {{ post.title }}
              </h1>
              <div>
                <span
                  v-if="post.section"
                  class="inline-block py-1 px-2 rounded bg-red-100 text-red-500 text-xs font-medium tracking-widest"
                >
                  {{ post.section }}</span
                >
              </div>
            </div>
            <p class="mt-1 mb-8">
              {{ post.description }}
            </p>
            <nuxt-content :document="post" />
          </article>
          <nuxt-link
            to="/neuigkeiten"
            class="inline-flex items-center bg-red-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-red-700 rounded text-base mt-8"
          >
            Neuigkeiten
          </nuxt-link>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let post;
    try {
      post = await $content("blog", params.blog).where({ visible: true }).fetch();
    } catch (e) {
      error({ message: "Neuigkeit nicht gefunden" });
    }
    post = post.slice(0, 1).shift();
    return { post };
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString(process.env.lang) || "";
    },
  },
};
</script>

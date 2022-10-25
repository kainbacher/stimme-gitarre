<template>
  <div v-if="posts.length > 0" class="divide-y-2 divide-gray-100">
    <div v-for="(post, index) in posts" :key="index">
      <nuxt-link
        :to="`/jobs/${post.slug}`"
        class="
        py-8 flex flex-wrap lg:flex-nowrap border border-gray-300 rounded-md p-8 mb-8
        hover:bg-red-50 hover:border-red-200
        "
      >
        <div class="lg:flex-grow pr-4">
          <div class="flex flex-row justify-between">
            <h1 class="text-2xl font-medium text-gray-900 title-font mb-2">
              {{ post.title }}
            </h1>
            <div>
              <span
                v-if="post.section"
                class="inline-block py-1 px-2 rounded bg-red-100 text-red-500 text-xs font-medium tracking-widest"
              >
                {{ post.section }}
              </span>
            </div>
          </div>
          <p class="leading-relaxed">{{ post.description }}</p>
        </div>
      </nuxt-link>
    </div>
  </div>
  <div v-else-if="loading" class="cards">
    <div v-for="placeholder in placeholderClasses" :key="placeholder.id" class="card">
      <content-placeholders :rounded="true" :class="placeholder">
        <content-placeholders-heading />
      </content-placeholders>
    </div>
  </div>
  <div v-else class="max-w-5xl mx-auto">
    <p class="mb-8">
      Aktuell sind keine Stellenangebote verfügbar. Gerne können Sie uns Ihre
      Initiativbewerbung per E-Mail zusenden.
    </p>
    <a
      href="mailto:dispo@branner.at?subject=Initiativbewerbung%20an%20die%20Branner%20Gruppe"
      class="inline-flex items-center bg-red-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-red-700 rounded text-base mt-4 md:mt-0"
      title="E-Mail an Branner Gruppe GmbH"
    >
      Initiativbewerbung senden
    </a>
  </div>
</template>

<script>
export default {
  name: "Jobs",
  data() {
    return {
      posts: [],
      loading: true,
    };
  },
  computed: {
    placeholderClasses() {
      const classes = ["w-full", "w-2/3", "w-5/6"];
      return [
        ...Array.from({ length: this.amount }, (v, i) => classes[i % classes.length]),
      ]; // repeats classes after one another
    },
  },
  async mounted() {
    this.loading = true;
    this.posts = await this.fetchPosts();
    this.loading = false;
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString(process.env.lang) || "";
    },
    async fetchPosts() {
      return (
        this.$content("jobs")
          .where({ visible: true })
          // .sortBy(sortBy.key, sortBy.direction)
          .fetch()
          .catch((err) => console.error(err) || [])
      );
    },
  },
};
</script>

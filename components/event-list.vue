<template>
  <section class="text-gray-600 body-font overflow-hidden">
    <div class="container px-5 py-12 mx-auto">
      <div class="-my-8 divide-y-2 divide-gray-100">
        <div v-if="posts.length > 0" class="divide-y-2 divide-gray-100">
          <div v-for="(post, index) in posts" :key="index">
            <div class="py-8 flex flex-wrap md:flex-nowrap">
              <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span class="mt-1 text-gray-500 text-sm">{{ post.date | formateDate }}</span>
              </div>
              <div class="md:flex-grow">
                <h2 class="text-xl font-medium text-gray-900 title-font mb-2">
                  {{ post.title }}
                </h2>
                <p class="leading-relaxed">
                  {{ post.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div v-else-if="loading" class="cards">
          <div
            v-for="placeholder in placeholderClasses"
            :key="placeholder.id"
            class="card"
          >
            <content-placeholders :rounded="true" :class="placeholder">
              <content-placeholders-heading />
            </content-placeholders>
          </div>
        </div>
        <p v-else class="max-w-5xl mx-auto">Keine Zukünftigen Auftrite geplant.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "EventList",
  props: {
    postType: {
      type: String,
      default: "events",
      validator: (val) => ["events"].includes(val),
    },
    amount: {
      // ? https://content.nuxtjs.org/fetching#limitn
      type: Number,
      default: 10,
      validator: (val) => val >= 0 && val < 100,
    },
    sortBy: {
      // ? https://content.nuxtjs.org/fetching#sortbykey-direction
      type: Object,
      default: () => ({
        key: "slug",
        direction: "desc", // you probably want 'asc' here
      }),
      validator: (obj) =>
        typeof obj.key === "string" && typeof obj.direction === "string",
    },
  },
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
    async fetchPosts(
      postType = this.postType,
      amount = this.amount,
      sortBy = this.sortBy
    ) {
      return this.$content(postType)
        .where({ visible: true })
        .sortBy(sortBy.key, sortBy.direction)
        .limit(amount)
        .fetch()
        .catch((err) => console.error(err) || []);
    },
  },
};
</script>

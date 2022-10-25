<template>
  <main>
    <section
      v-if="jobs"
      class="text-gray-600 body-font overflow-hidden py-24 max-w-6xl ml-auto mr-auto"
    >
      <div class="container px-5 mb-16 border-b-b p4-4 pb-8 md:w-3/5 mx-auto">
        <h1 class="sm:text-3xl text-3xl font-medium title-font text-gray-900 mb-8">
          Jobs
        </h1>
        <jobs-list :amount="10" />
      </div>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    let jobs;
    try {
      jobs = await $content("jobs").fetch();
    } catch (e) {
      error({ message: "Keine Jobs gefunden" });
    }
    return { jobs };
  },
};
</script>

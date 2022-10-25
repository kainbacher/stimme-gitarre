<template>
  <div
    class="flex flex-col bg-white border border-gray-100 rounded-lg overflow-hidden hover:shadow-md transition duration-300 ease-in-out"
  >
    <a
      :href="url"
      :title="name"
      class="group h-32 md:h-40 block bg-gray-100 overflow-hidden relative"
      target="_blank"
    >
      <img
        :src="image"
        loading="lazy"
        :alt="name"
        class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
      />
    </a>

    <div class="flex flex-col justify-between flex-1 p-4 sm:p-6">
      <div>
        <h2 class="text-red-800 text-base font-semibold mb-2">
          <a
            :href="url"
            target="_blank"
            class="text-red-500 hover:text-red-700 transition duration-100"
            >{{ name }}</a
          >
        </h2>
        <div class="content">
          <slot></slot>
        </div>
      </div>
      <a
        :href="url"
        class="bg-gray-50 border-gray-300 text-red-500 border rounded-md flex justify-center items-center py-1 hover:bg-red-50 hover:text-red-700 hover:border-red-300 transition duration-300"
        >weiter -></a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  props: {
    name: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
    url: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      posts: [],
      loading: true,
    };
  },
};
</script>

<style>
.content a {
  @apply hover:text-gray-800;
}
</style>
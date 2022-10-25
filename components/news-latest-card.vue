<template>
  <nuxt-link
    :to="link"
    class="p-12 md:w-1/2 flex flex-col items-start border-b-2 border-gray-100 hover:border-red-500"
  >
    <span
      class="inline-block py-1 px-2 rounded bg-red-100 text-red-500 text-xs font-medium tracking-widest"
      >{{ section }}</span
    >
    <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
      {{ title }}
    </h2>
    <p class="leading-relaxed mb-8">
      {{ text }}
    </p>
    <div
      class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full"
    >
      <span class="text-red-500 inline-flex items-center"
        >weiterlesen
        <svg
          class="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M5 12h14"></path>
          <path d="M12 5l7 7-7 7"></path>
        </svg>
      </span>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: "Contact",
  props: {
    title: {
      type: String,
      default: "",
    },
    section: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
    link: {
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

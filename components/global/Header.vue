<template>
  <header class="text-gray-600 body-font">
    <div
      class="container mx-auto flex flex-wrap p-5 py-8 flex-col md:flex-row md:justify-between items-center"
    >
      <nuxt-link
        to="/"
        class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
      >
        <Logo />
      </nuxt-link>
      <div class="flex md:flex-row">
        <button
          class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
        >
          0664 / 4378373
        </button>
        <button
          class="inline-flex items-center text-white bg-cyan-500 border-0 py-1 px-3 focus:outline-none hover:bg-cyan-600 rounded text-base mt-4 md:mt-0 md:ml-4"
        >
          E-Mail
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  methods: {
    mailto(email) {
      window.location.href = "mailto:" + email + "@gmx.at";
    },
  },
};
</script>
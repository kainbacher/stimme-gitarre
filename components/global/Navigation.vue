<template>
  <div class="text-gray-600 body-font bg-cyan-600">
    <div class="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
      <nav
        class="md:mr-auto md:ml-4 md:pl-4 flex flex-wrap items-center text-base justify-center"
      >
        <nuxt-link to="/termine" class="p-5 text-white hover:text-cyan-100 hover:bg-cyan-700">
          Termine
        </nuxt-link>
        <nuxt-link to="/biografie" class="p-5 text-white hover:text-cyan-100 hover:bg-cyan-700">
          Biografie
        </nuxt-link>
        <nuxt-link
          to="/fotos-und-hoerbeispiele"
          class="p-5 text-white hover:text-cyan-100 hover:bg-cyan-700"
        >
          Fotos & Hörbeispiele
        </nuxt-link>
        <nuxt-link to="/kontakt" class="p-5 text-white hover:text-cyan-100 hover:bg-cyan-700">
          Kontakt
        </nuxt-link>
      </nav>
    </div>
  </div>
</template>

<style scoped>
a.nuxt-link-active {
  background-color: #06b6d4;
}
</style>

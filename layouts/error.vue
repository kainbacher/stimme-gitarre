<template>
  <main>
    <section class="flex flex-col items-center">
      <div class="py-48 text-center">
        <template v-if="error.statusCode === 404">
          <h1 class="text-xl">{{ error.message || "Seite nicht gefunden" }}</h1>
          <h2 class="text-8xl text-gray-600 font-bold py-2">404</h2>
          <p class="mb-4">
            Diese URL existiert leider nicht.
          </p>
        </template>
        <template v-else>
          <h1 class="title">Hoppala, ein Fehler ist aufgetreten.</h1>
          <p class="mb-4">
            Diese URL existiert leider nicht.
          </p>
        </template>
        <nav class="mt-12" aria-label="zurück">
          <router-back to="/" class="block" />
        </nav>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "error",
  props: ["error"],
};
</script>

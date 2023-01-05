<script>
export default {
  head: {
    title: 'Kontakt - Melanie Schuchter - Stimme Gitarre',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Lassen Sie uns gemeinsam ihre Hochzeit unvergesslich machen, ihre Agape, den Sektempfang, ein gemütliches Dinner zu etwas ganz Besonderen gestalten oder auch den Vortragsabend musikalisch umranden.'
      }
    ],
  }
}
</script>
<template>
  <main>
    <section class="text-gray-600 body-font relative">
      <div class="absolute inset-0 bg-gray-300">
        <img
          alt="gallery"
          class="w-full h-full object-cover object-center block"
          src="/images/melanie-05.jpg"
        />
      </div>
      <div class="container px-5 py-24 mx-auto flex">
        <div
          class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md"
        >
          <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Kontakt</h2>
          <p class="leading-relaxed mb-5 text-gray-600">
              Melanie Schuchter<br />
              Eichenweg 10<br />
              6774 Tschagguns<br />
              Österreich
          </p>
          <a
            href="tel:+436644378373"
            class="text-cyan-600 text-center border border-gray-200 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 hover:border-gray-300 rounded text-lg mb-4"
          >0664 / 4378373</a>
          <a
            class="text-white text-center bg-cyan-500 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-600 rounded text-lg"
          >
            E-Mail
          </a>
        </div>
      </div>
    </section>
  </main>
</template>


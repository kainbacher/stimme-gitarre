<script>
export default {
  head: {
    title: 'Stimme und Gitarre für Ihre Hochzeit, Agape, Sektempfang - Melanie Schuchter',
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
    <section class="text-gray-600 body-font">
      <div class="container px-5 pt-8 pb-24 mx-auto flex flex-col">
          <div class="rounded-lg h-96 overflow-hidden">
            <img
              alt="content"
              class="object-cover object-center h-full w-full"
              src="/images/melanie-05.jpg"
            />
          </div>
        <div class="lg:w-4/6 mx-auto">
          <div class="flex flex-col sm:flex-row mt-10">
            <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div
                class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400"
              >
              <img
                alt="gallery"
                class="w-full h-full object-cover object-center block rounded-full"
                src="/images/melanie-03.jpg"
              />
              </div>
              <div class="flex flex-col items-center text-center justify-center">
                <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">
                  Melanie Schuchter
                </h2>
                <div class="w-12 h-1 bg-cyan-600 rounded mt-2 mb-4"></div>
                <p class="text-base">
                  Musik ist mehr als nur ein Gefühl. Musik ist ein Ort der Begegnung.
                </p>
              </div>
            </div>
            <div
              class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left"
            >
              <p class="leading-relaxed text-lg mb-4">
                Gerne umrahme ich Ihren besonderen Anlass mit meiner Stimme. Lassen Sie
                uns gemeinsam ihre <strong>Hochzeit</strong> unvergesslich machen, ihre <strong>Agape</strong>, den
                <strong>Sektempfang</strong>, ein gemütliches Dinner zu etwas ganz Besonderen gestalten
                oder auch den Vortragsabend musikalisch umranden. Lassen Sie mich mit
                “Stimme & Gitarre” ihr Herz verzaubern und gemeinsam unvergessliche
                Momente schaffen. Ich freue mich von Ihnen zu hören.
              </p>
              <nuxt-link
                to="/biografie"
                class="text-cyan-500 hover:text-cyan-600 inline-flex items-center"
              >
                Zur Biografie
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <event-list />
  </main>
</template>

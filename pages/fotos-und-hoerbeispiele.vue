<script>
export default {
  head: {
    title: "Fotos und Hörbeispiele - Melanie Schuchter - Stimme Gitarre",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Lassen Sie uns gemeinsam ihre Hochzeit unvergesslich machen, ihre Agape, den Sektempfang, ein gemütliches Dinner zu etwas ganz Besonderen gestalten oder auch den Vortragsabend musikalisch umranden.",
      },
    ],
  },
};
</script>

<template>
  <main>
    <section class="text-gray-600 body-font">
      <div class="container px-5 pt-24 pb-4 mx-auto flex flex-wrap">
        <div class="flex w-full py-20 flex-wrap">
          <h1
            class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4"
          >
            Fotos & Hörbeispiele
          </h1>
          <!--
          <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify,
            subway tile poke farm-to-table. Franzen you probably haven't heard of them man
            bun deep jianbing selfies heirloom.
          </p>
          -->
        </div>
        <div class="flex flex-wrap md:-m-2 -m-1">
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src="/images/melanie-01.jpg"
              />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src="/images/melanie-02.jpg"
              />
            </div>
            <div class="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                class="w-full h-full object-cover object-center block"
                src="/images/melanie-03.jpg"
              />
            </div>
          </div>
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                class="w-full h-full object-cover object-center block"
                src="/images/melanie-04.jpg"
              />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src="/images/melanie-05.jpg"
              />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src="/images/melanie-06.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container px-5 pb-24 mx-auto flex flex-wrap">
        <div class="flex w-full mb-20 flex-wrap">
          <div
            class="relative h-0 overflow-hidden max-w-full w-full"
            style="padding-bottom: 56.25%"
          >
            <iframe
              src="https://www.youtube.com/embed/bvYSRDIN5rU"
              frameborder="0"
              allowfullscreen
              class="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

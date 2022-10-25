<template>
  <main>
    <section class="text-gray-600 body-font">
      <div class="container px-5 pt-8 pb-24 mx-auto flex flex-col">
          <div class="rounded-lg h-96 overflow-hidden">
            <img
              alt="content"
              class="object-cover object-center h-full w-full"
              src="https://dummyimage.com/1200x800"
            />
          </div>
        <div class="lg:w-4/6 mx-auto">
          <div class="flex flex-col sm:flex-row mt-10">
            <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div
                class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
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
              <a class="text-cyan-500 inline-flex items-center">
                Zur Biografie
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <news-latest :posts="posts" v-if="posts" />
  </main>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    let posts;
    try {
      posts = await $content("blog").where({ visible: true }).limit(2).fetch();
    } catch (e) {
      error({ message: "Keine Neuigkeiten vorhanden." });
    }
    return { posts };
  },
};
</script>

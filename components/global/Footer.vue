<template>
  <footer class="text-gray-600 body-font">
    <div class="bg-cyan-500">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap md:text-left text-center order-first">
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-cyan-300 tracking-widest text-sm mb-3">
              Adresse
            </h2>
            <p class="text-cyan-50">
              Melanie Schuchter<br />
              Eichenweg 10<br />
              6774 Tschagguns<br />
              Österreich
            </p>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-cyan-300 tracking-widest text-sm mb-3">
              Kontakt
            </h2>
            <p>
              <a href="tel:+436644378373" class="text-cyan-50"> 0664 / 4378373</a><br />
              <a href="mailto:stimme-gitarre@gmx.at" class="text-cyan-50">
                stimme-gitarre@gmx.at</a
              >
            </p>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-cyan-300 tracking-widest text-sm mb-3">
              Links
            </h2>
            <p>
              <nuxt-link to="/impressum" class="text-cyan-50">Impressum</nuxt-link><br />
              <nuxt-link to="/datenschutz" class="text-cyan-50">
                Datenschutz</nuxt-link>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-cyan-600">
      <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
        <p class="text-sm text-cyan-200 sm:ml-6 sm:mt-0 mt-4">© 2022 Melanie Schuchter</p>
        <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a class="text-cyan-200">
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
              ></path>
            </svg>
          </a>
          <a class="ml-3 text-cyan-200">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
        </span>
      </div>
    </div>
  </footer>
</template>

<template>
  <div class="pb-6 sm:pb-8 lg:pb-12">
    <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        <contact-card
          name="Branner Mobility"
          image="/branner-mobility.jpg"
          url="http://www.branner-autohaus.at/"
        >
          <div>
            <p class="text-gray-500 text-sm 2xl:text-base mb-4">
              <button @click="mailto('patrick')" title="E-Mail an Branner Mobility">
                E-Mail
              </button>
              <br />
              <br />
              <a href="tel:+43552357200" title="Bei Branner Mobility anrufen"
                >+43 5523 57 200</a
              >
              <br />
              <a
                href="https://www.google.com/maps/place/Branner+Mobility+GmbH+Standort+Klaus/@47.3085264,9.6239093,17z/data=!3m1!4b1!4m5!3m4!1s0x479b3e92c4436403:0xfd97f9a8b8f7617c!8m2!3d47.3084803!4d9.6260712"
                rel="nofollow"
                title="Google Maps"
                target="_blank"
              >
                Treietstraße 2<br />
                6833 Klaus
              </a>
            </p>
            <hr class="mb-4" />
            <p class="text-gray-500 text-sm 2xl:text-base mb-4">
              <a href="tel:+43555262387" title="Bei Branner Mobility anrufen"
                >+43 5552 62 387</a
              >
              <br />
              <a
                href="https://www.google.com/maps/place/Branner+Mobility+GmbH+Standort+N%C3%BCziders/@47.175221,9.7827723,17z/data=!3m1!4b1!4m5!3m4!1s0x479b4f69268b2f53:0xb32fef2d957f08f2!8m2!3d47.175221!4d9.784961"
                rel="nofollow"
                title="Google Maps"
                target="_blank"
              >
                Walgaustraße 83<br />
                6714 Nüziders
              </a>
            </p>
            <hr />
            <hr />
            <div class="flex flex-row justify-between mb-4">
              <a href="http://www.branner-autohaus.at/" target="_blank" title="Nissan">
                <img
                  src="/nissan.png"
                  alt="Nissan"
                  class="h-24 w-24"
                  height="100"
                  width="100"
                />
              </a>
              <a href="https://www.hofele.com/" target="_blank" title="Hofele">
                <img
                  src="/hofele.png"
                  alt="Hofele"
                  class="h-24 w-24"
                  height="100"
                  width="100"
                />
              </a>
            </div>
          </div>
        </contact-card>
        <contact-card
          name="Branner Fitness"
          image="/branner-fitness.jpg"
          url="https://www.branner-fitness.at/"
        >
          <p class="text-gray-500 text-sm 2xl:text-base mb-4">
            <button @click="mailto('fitness')" title="E-Mail an Branner Fitness">
              E-Mail
            </button>
            <br />
            <br />
            <a href="tel:+43552246118" title="Bei Branner Fitness anrufen"
              >+43 5522 46 118</a
            ><br />
            <a
              href="https://www.google.com/maps/place/Fitness+Wellness+Physiotherapie+Branner/@47.2750636,9.6494067,17z/data=!3m1!4b1!4m5!3m4!1s0x479b38d26711115d:0xfd06fb4bd6983a56!8m2!3d47.2750636!4d9.6515954"
              rel="nofollow"
              title="Google Maps"
              target="_blank"
            >
              Alemannenstraße 2<br />
              6830 Rankweil
            </a>
          </p>
          <hr class="mb-4" />
          <p class="text-gray-500 text-sm 2xl:text-base mb-8">
            <a href="tel:+43552277241" title="Bei Branner Fitness anrufen"
              >+43 5522 77 241</a
            ><br />
            <a
              href="https://www.google.com/maps/place/Fitness+Branner+Feldkirch+(ehem.+Life)/@47.2596282,9.6051854,17z/data=!3m2!4b1!5s0x479b396a5491ddc7:0xe016e6435538fcb3!4m5!3m4!1s0x479b396a550f361b:0x8be8b9ff8ee41b46!8m2!3d47.2596282!4d9.6073741"
              rel="nofollow"
              title="Google Maps"
              target="_blank"
            >
              Grenzweg 10<br />
              6800 Feldkirch
            </a>
          </p>
        </contact-card>
        <contact-card
          name="Branner Erdenwerk"
          image="/branner-erdenwerk.jpg"
          url="https://www.branner-erdenwerk.at/"
        >
          <p class="text-gray-500 text-sm 2xl:text-base mb-8">
            <button @click="mailto('erdenwerk')" title="E-Mail an Branner Erdenwerk">
              E-Mail
            </button>
            <br />
            <br />
            <a href="tel:+43552236644" title="Bei Branner ERdenwerk anrufen"
              >+43 5522 366 44</a
            >
            <br />
            <a
              href="https://www.google.com/maps/place/Branner+GmbH+Erdenwerk/@47.2952745,9.6194815,17z/data=!4m5!3m4!1s0x479b3eb8b2e1c21b:0xcc0af55f177a8e54!8m2!3d47.2952763!4d9.6216701"
              rel="nofollow"
              title="Google Maps"
              target="_blank"
            >
              Bundesstraße 120 2<br />
              6830 Rankweil
            </a>
          </p>
        </contact-card>
        <contact-card
          name="Branner Entsorgung"
          image="/branner-entsorgung.jpg"
          url="https://www.branner-entsorgung.at/"
        >
          <p class="text-gray-500 text-sm 2xl:text-base mb-8">
            <button @click="mailto('dispo')" title="E-Mail an Branner Entsorgung">
              E-Mail
            </button>
            <br />
            <br />
            <a href="tel:+43552351141" title="Bei Branner Entsorgung anrufen"
              >+43 5523 511 41</a
            ><br />
            <a
              href="https://www.google.com/maps/place/Branner+GmbH/@47.308887,9.6224894,17z/data=!3m2!4b1!5s0x479b3efcaaa4017b:0xdbf2444c70fe87a0!4m5!3m4!1s0x479b3e92c77687bf:0x9f8fc5e010ebf4c2!8m2!3d47.308887!4d9.6246781"
              rel="nofollow"
              title="Google Maps"
              target="_blank"
            >
              Treietstraße 2<br />
              6833 Klaus
            </a>
          </p>
        </contact-card>
        <contact-card
          name="Branner Oberflächenbehandlung"
          image="/branner-oberflaechen.jpg"
          url="https://www.branner-oberflaechen.at/"
        >
          <p class="text-gray-500 text-sm 2xl:text-base mb-8">
            <button
              @click="mailto('dominik.pircher')"
              title="E-Mail an Branner Oberflächen"
            >
              E-Mail
            </button>
            <br />
            <br />
            <a href="tel:+436602336065" title="Bei Branner Oberflächen anrufen"
              >+43 660 233 60 65</a
            ><br />
            <a
              href="https://www.google.com/maps/place/Branner+GmbH/@47.308887,9.6224894,17z/data=!3m2!4b1!5s0x479b3efcaaa4017b:0xdbf2444c70fe87a0!4m5!3m4!1s0x479b3e92c77687bf:0x9f8fc5e010ebf4c2!8m2!3d47.308887!4d9.6246781"
              rel="nofollow"
              title="Google Maps"
              target="_blank"
            >
              Treietstraße 2<br />
              6833 Klaus
            </a>
          </p>
        </contact-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactList",
  methods: {
    mailto(email) {
      window.location.href = "mailto:" + email + "@branner.at";
    },
  },
};
</script>

<style scoped>
button {
  @apply hover:text-gray-800;
}
</style>

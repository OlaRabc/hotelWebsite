<template>
  <div>
    <h2 class="mb-24 text-center font-bold text-3xl">
      Zapytaj w recepcji o zniżkę na wymienione poniżej atrakcje.
    </h2>

    <div
      class="flex justify-between items-center md:items-start max-md:flex-col gap-16 mx-16 mb-32"
    >
      <a
        v-for="item in attractions"
        :key="item.title"
        :href="item.to"
        target="_blank"
        class="relative rounded-xl overflow-hidden cursor-pointer outline-offset-4 max-h-[390px] flex-auto"
      >
        <img
          :src="item.img"
          class="w-full h-auto object-cover"
          width="200"
          height="200"
          :alt="item.title"
        />

        <h3
          class="absolute top-0 left-0 w-[100%] py-2 bg-gold-500 text-white text-center text-xl font-bold z-10"
        >
          {{ item.title }}
        </h3>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
const attractions = [
  {
    title: "Park Linowy Bluszcz",
    to: "https://www.parklinowybluszcz.pl",
    img: "/images/attractions/bluszcz.png",
  },
  {
    title: "Muzeum Rybołówstwa Morskiego",
    to: "https://mrm.swinoujscie.pl",
    img: "/images/attractions/museum.png",
  },
  {
    title: "Rejsy statkiem",
    to: "https://www.facebook.com/RejsySwinoujscie/?locale=pl_PL",
    img: "/images/attractions/cruises.png",
  },
];
</script>

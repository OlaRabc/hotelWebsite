<template>
  <main>
    <FrBanner img="attractions/attraction.jpeg">ATRAKCJE</FrBanner>
    <div class="mx-8">
      <h2 class="my-24 text-center font-bold text-3xl">
        Zapytaj w recepcji o zniżkę na wymienione poniżej atrakcje.
      </h2>

      <div
        class="flex justify-between items-center md:items-start max-md:flex-col"
      >
        <div
          v-for="item in attractions"
          :key="item.title"
          class="relative max-w-[80%] md:max-w-[30%] mb-24 border rounded-xl overflow-hidden group"
        >
          <img
            :src="`/images/attractions/${item.img}`"
            class="w-full h-auto object-cover"
            width="200"
            height="200"
            :alt="item.title"
          />

          <h3
            class="absolute top-0 left-0 w-[100%] py-2 bg-gold-500 bg-opacity-80 text-white text-center text-xl font-bold z-10"
          >
            {{ item.title }}
          </h3>
          <div
            class="absolute top-0 md:-translate-y-[200%] md:group-hover:translate-y-0 left-0 w-full h-[100%] py-8 px-4 bg-black bg-opacity-80 text-white text-md leading-loose overflow-auto transition-all duration-300 delay-100 z-20"
          >
            {{ item.description }}
          </div>
        </div>
      </div>
      <p class="text-xl text-center mb-24 text-gold-700 font-semibold">
        Masz pytania już teraz? Zadzwoń:
        <a
          href="tel:+48652346981"
          class="font-bold underline hover:no-underline"
          >+48 652 346 981</a
        >
      </p>
    </div>
  </main>
</template>

<script setup lang="ts">
const attractions = [
  {
    title: "Oceanarium w Świnoujściu",
    description:
      "Oceanarium w Świnoujściu to fascynujące miejsce, które pozwala na bliskie spotkanie z podwodnym światem. Znajdziesz tu różnorodne gatunki ryb, koralowce i inne morskie stworzenia, które można podziwiać w specjalnie przygotowanych zbiornikach. To idealne miejsce na rodzinny wypad, gdzie zarówno dzieci, jak i dorośli mogą uczyć się i cieszyć się widokiem egzotycznych zwierząt.",
    img: "oceanarium.jpeg",
  },
  {
    title: "Muzeum Rybołówstwa Morskiego",
    description:
      "Muzeum Rybołówstwa Morskiego to obowiązkowy punkt dla wszystkich miłośników morza i historii. Znajduje się w zabytkowym budynku, który kiedyś pełnił funkcję ratusza. Muzeum oferuje bogate zbiory związane z historią rybołówstwa, modelami statków, a także eksponatami fauny i flory Bałtyku. Wizyta w muzeum to fascynująca podróż w czasie, która przybliża kulturę i tradycje rybackie regionu.",
    img: "museum.jpeg",
  },
  {
    title: "Rejsy statkiem",
    description:
      "Świnoujście oferuje szeroką gamę rejsów turystycznych po Bałtyku i Zalewie Szczecińskim. Można wybierać spośród różnych tras, w tym rejsów panoramicznych, które oferują widoki na miasto, port oraz okoliczne wyspy. Niektóre rejsy obejmują także wizyty na wyspach Wolin i Uznam, a nawet wycieczki do niemieckich miast nadbałtyckich. To doskonała okazja, aby zobaczyć region z innej perspektywy i cieszyć się morską bryzą",
    img: "cruises.jpg",
  },
];
</script>

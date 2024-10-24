<template>
  <div>
    <h2 class="mb-24 text-center font-bold text-3xl">
      Zapytaj w recepcji o zniżkę na wymienione poniżej atrakcje.
    </h2>

    <div
      class="flex justify-between items-center md:items-start max-md:flex-col"
    >
      <FrCard
        v-for="item in attractions"
        :key="item.title"
        :data="item"
        class="max-w-[80%] md:max-w-[30%] mb-24"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const attractions = [
  {
    title: "Oceanarium w Świnoujściu",
    description:
      "Oceanarium w Świnoujściu to fascynujące miejsce, które pozwala na bliskie spotkanie z podwodnym światem. Znajdziesz tu różnorodne gatunki ryb, koralowce i inne morskie stworzenia, które można podziwiać w specjalnie przygotowanych zbiornikach. To idealne miejsce na rodzinny wypad, gdzie zarówno dzieci, jak i dorośli mogą uczyć się i cieszyć się widokiem egzotycznych zwierząt.",
    img: "/images/attractions/oceanarium.jpeg",
  },
  {
    title: "Muzeum Rybołówstwa Morskiego",
    description:
      "Muzeum Rybołówstwa Morskiego to obowiązkowy punkt dla wszystkich miłośników morza i historii. Znajduje się w zabytkowym budynku, który kiedyś pełnił funkcję ratusza. Muzeum oferuje bogate zbiory związane z historią rybołówstwa, modelami statków, a także eksponatami fauny i flory Bałtyku. Wizyta w muzeum to fascynująca podróż w czasie, która przybliża kulturę i tradycje rybackie regionu.",
    img: "/images/attractions/museum.jpeg",
  },
  {
    title: "Rejsy statkiem",
    description:
      "Świnoujście oferuje szeroką gamę rejsów turystycznych po Bałtyku i Zalewie Szczecińskim. Można wybierać spośród różnych tras, w tym rejsów panoramicznych, które oferują widoki na miasto, port oraz okoliczne wyspy. Niektóre rejsy obejmują także wizyty na wyspach Wolin i Uznam, a nawet wycieczki do niemieckich miast nadbałtyckich. To doskonała okazja, aby zobaczyć region z innej perspektywy i cieszyć się morską bryzą",
    img: "/images/attractions/cruises.jpg",
  },
];
</script>

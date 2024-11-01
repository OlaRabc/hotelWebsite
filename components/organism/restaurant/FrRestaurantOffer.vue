<template>
  <FrBox class="mb-16">
    <h3 class="font-semibold text-3xl mb-8">Oferta</h3>

    <div class="flex justify-around gap-4 flex-wrap">
      <div
        tabindex="0"
        class="relative text-center mb-12 w-[300px] h-[300px] flex-auto cursor-pointer overflow-hidden rounded-2xl bg-red-700 outline-2 outline-offset-4"
        @click="openModal('breakfast')"
        @keydown.enter="openModal('breakfast')"
        @keydown.space.prevent="openModal('breakfast')"
      >
        <img
          :src="`/images/restaurant/breakfast.jpeg`"
          class="w-full object-cover h-full rounded-2xl"
        />
        <p
          class="absolute top-0 left-0 w-full bg-gold-600 font-bold text-white text-xl rounded-b-"
        >
          Śniadania
        </p>
      </div>
      <div
        tabindex="0"
        class="relative text-center mb-12 w-[300px] h-[300px] flex-auto cursor-pointer overflow-hidden rounded-2xl bg-red-700 outline-2 outline-offset-4"
        @click="openModal('lunch')"
        @keydown.enter="openModal('lunch')"
        @keydown.space.prevent="openModal('lunch')"
      >
        <img
          :src="`/images/restaurant/lunch.jpeg`"
          class="w-full object-cover h-full rounded-2xl"
        />
        <p
          class="absolute top-0 left-0 w-full bg-gold-600 font-bold text-white text-xl rounded-b-"
        >
          Obiady
        </p>
      </div>
      <div
        tabindex="0"
        class="relative text-center mb-12 w-[300px] h-[300px] flex-auto cursor-pointer overflow-hidden rounded-2xl bg-red-700 outline-2 outline-offset-4"
        @click="openModal('dinner')"
        @keydown.enter="openModal('dinner')"
        @keydown.space.prevent="openModal('dinner')"
      >
        <img
          :src="`/images/restaurant/dinner.jpeg`"
          class="w-full object-cover h-full rounded-2xl"
        />
        <p
          class="absolute top-0 left-0 w-full bg-gold-600 font-bold text-white text-xl rounded-b-"
        >
          Kolacje
        </p>
      </div>
    </div>
  </FrBox>

  <FrModal
    :isOpen="isBreakfastOfferOpen"
    @onClose="isBreakfastOfferOpen = false"
  >
    <h2 class="font-bold text-center text-2xl mb-8">Oferta śniadaniowa</h2>

    <div v-for="item in breakfastOffer" class="flex justify-between mb-2">
      <div class="mb-6 font-semibold">
        {{ item.title }}
        <div class="text-sm font-light">{{ item.subtitle }}</div>
      </div>
      <div class="my-auto text-nowrap">{{ item.prices }} zł</div>
    </div>
    <div class="font-bold text-xl text-center">
      Zapraszamy do skosztowania naszych śniadań, które są serwowane codziennie
      od 7:00 do 10:30.
    </div>
  </FrModal>

  <FrModal :isOpen="isLunchOfferOpen" @onClose="isLunchOfferOpen = false">
    <h2 class="font-bold text-center text-2xl mb-8">Oferta obiadowa</h2>

    <div v-for="item in lunchOffer" class="flex justify-between mb-2">
      <div class="mb-6 font-semibold">
        {{ item.title }}
        <div class="text-sm font-light">{{ item.subtitle }}</div>
      </div>
      <div class="my-auto text-nowrap">{{ item.prices }} zł</div>
    </div>
    <div class="font-bold text-xl text-center">
      Zapraszamy do skosztowania naszych pysznych obiadów, które są serwowane
      codziennie od 11:00 do 15:30.
    </div>
  </FrModal>

  <FrModal :isOpen="isDinnerOfferOpen" @onClose="isDinnerOfferOpen = false">
    <h2 class="font-bold text-center text-2xl mb-8">Kolacja</h2>

    <div v-for="item in dinnerOffer" class="flex justify-between m-2">
      <div class="mb-6 font-semibold">
        {{ item.title }}
        <div class="text-sm font-light">{{ item.subtitle }}</div>
      </div>
      <div class="my-auto text-nowrap">{{ item.prices }} zł</div>
    </div>
    <div class="font-bold text-xl text-center">
      Zapraszamy do skosztowania naszych pysznych posiłków, które są serwowane
      codziennie od 16:00 do 20:00.
    </div>
  </FrModal>
</template>

<script lang="ts" setup>
import { gtagEvent } from "@/assets/js/main";

const isBreakfastOfferOpen = ref(false);
const isLunchOfferOpen = ref(false);
const isDinnerOfferOpen = ref(false);

const openModal = (modalId: string) => {
  switch (modalId) {
    case "breakfast":
      isBreakfastOfferOpen.value = true;
      break;
    case "lunch":
      isLunchOfferOpen.value = true;
      break;
    case "dinner":
      isDinnerOfferOpen.value = true;
      break;
  }

  gtagEvent(
    "event",
    "expanding_information",
    "button",
    `modal_${modalId}_opened`
  );
};

const breakfastOffer = [
  {
    title: "Tradycyjne Polskie Śniadanie",
    subtitle:
      "Chleb żytni, masło, twaróg, jajka, ogórek, pomidor, kiełbasa wędzona.",
    prices: 30,
  },
  {
    title: "Śniadanie Fit",
    subtitle: " Jogurt naturalny, owoce sezonowe, musli, orzechy, miód",
    prices: 25,
  },
  {
    title: "Francuskie Śniadanie",
    subtitle:
      "Croissanty, masło, dżem (truskawkowy lub malinowy), miód, kawa lub herbata.",
    prices: 28,
  },
  {
    title: "Śniadanie Angielskie",
    subtitle:
      "Jajka, boczek, kiełbaski, fasolka w sosie pomidorowym, pieczarki, tosty",
    prices: 25,
  },
  {
    title: "Wegetariańska Talerz Śniadaniowy",
    subtitle:
      "Hummus, awokado, rukola, pomidory koktajlowe, oliwki, pieczywo pełnoziarniste",
    prices: 27,
  },
];

const lunchOffer = [
  {
    title: "Filet z Dorsza z Puree Ziemniaczanym",
    subtitle:
      "Filet z dorsza, puree ziemniaczane, sos cytrynowy, warzywa na parze (brokuły, marchew, fasolka szparagowa)",
    prices: 45,
  },
  {
    title: "Pierś z Kurczaka w Sosie Śmietanowo-Ziołowym",
    subtitle:
      "Pierś z kurczaka, sos śmietanowo-ziołowy, pieczone ziemniaki, sałatka z mixu sałat, pomidory, ogórek, czerwona cebula",
    prices: 40,
  },
  {
    title: "Makaron Tagliatelle z Krewetkami",
    subtitle:
      "Makaron tagliatelle, krewetki, czosnek, oliwa z oliwek, pomidory koktajlowe, natka pietruszki, parmezan",
    prices: 50,
  },
  {
    title: "Kotlet Schabowy z Ziemniakami i Mizerią",
    subtitle:
      "Kotlet schabowy, ziemniaki z koperkiem, mizeria (ogórki, śmietana, koperek, sól, pieprz)",
    prices: 35,
  },
  {
    title: "Risotto z Grzybami Leśnymi",
    subtitle:
      "Ryż arborio, grzyby leśne, cebula, czosnek, białe wino, parmezan, masło, natka pietruszki",
    prices: 48,
  },
];

const dinnerOffer = [
  {
    title: "Grillowana Polędwica Wołowa z Sałatką",
    subtitle:
      "Polędwica wołowa, sałatka z rukoli, pomidory koktajlowe, parmezan, sos balsamiczny",
    prices: 70,
  },
  {
    title: "Łosoś w Sosie Teriyaki z Ryżem Jaśminowym",
    subtitle:
      "Łosoś, sos teriyaki, ryż jaśminowy, sezam, warzywa stir-fry (papryka, cukinia, marchew)",
    prices: 65,
  },
  {
    title: "Sałatka Cezar z Kurczakiem",
    subtitle:
      "Filet z kurczaka, sałata rzymska, grzanki, parmezan, sos Cezar (majonez, anchois, czosnek, cytryna, musztarda)",
    prices: 40,
  },
  {
    title: "Krem z Dyni z Chrupiącymi Pestkami",
    subtitle:
      "Dynia, cebula, czosnek, bulion warzywny, śmietana, pestki dyni, natka pietruszki",
    rices: 30,
  },
  {
    title: "Spaghetti Aglio e Olio z Krewetkami",
    subtitle:
      "Makaron spaghetti, krewetki, czosnek, oliwa z oliwek, papryczka chili, natka pietruszki, parmezan",
    prices: 55,
  },
];
</script>

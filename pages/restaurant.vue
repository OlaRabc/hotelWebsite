<template>
  <main>
    <FrBanner img="restaurant/restaurantImg.jpeg" class="mb-16">
      RESTAURACJA
    </FrBanner>

    <div class="mx-8">
      <div class="flex justify-around max-lg:flex-col gap-8">
        <div class="w-full mb-8 flex flex-col justify-between">
          <h3 class="font-semibold text-5xl mb-8">Restauracja</h3>
          <div class="border shadow rounded-xl px-12 py-8 bg-white">
            <div class="my-4">
              Restauracja czynna w godzinach od 12:30 do 22:30
            </div>

            <div class="my-4">Śniadania: 7:00-11:30</div>

            <div class="my-4">Rezerwacje: +48 876 437 098</div>
          </div>
        </div>

        <div class="border rounded-xl bg-white w-full px-12 py-8 mb-8">
          <h1 class="font-semibold text-2xl">Menu dnia (w każdą niedzielę)</h1>
          <div v-for="item in menuDay" class="flex justify-between m-2">
            <div class="my-4">
              {{ item.title }}
              <div class="text-sm">{{ item.subtitle }}</div>
            </div>
            <div class="my-auto">{{ item.prices }} zł</div>
          </div>
        </div>
      </div>

      <div class="border rounded-xl bg-white py-8 px-12 mb-16">
        <h3 class="font-semibold text-3xl">Oferta</h3>

        <div class="flex justify-around gap-4 flex-wrap">
          <div class="text-center m-4 w-[300px] flex-auto" @click="openModal('breakfast')">
            <img
              :src="`/images/restaurant/breakfast.jpeg `"
              class="w-full object-cover h-[200px] rounded"
            />
            <p>Śniadania</p>
          </div>
          <div
            class="text-center m-4 w-[300px] flex-auto"
            @click="openModal('lunch')"
          >
            <img
              :src="`/images/restaurant/lunch.jpeg`"
              class="w-full object-cover h-[200px] rounded"
            />
            <p>Obiady</p>
          </div>
          <div
            class="text-center m-4 w-[300px] flex-auto"
            @click="openModal('dinner')"
          >
            <img
              :src="`/images/restaurant/dinner.jpeg`"
              class="w-full object-cover h-[200px] rounded"
            />
            <p>Kolacje</p>
          </div>
        </div>
      </div>
    </div>
    <FrModal
      :isOpen="isBreakfastOfferOpen"
      :center="true"
      @onClose="isBreakfastOfferOpen = false"
    >
      <h1 class="font-bold text-center text-2xl">Oferta śniadaniowa</h1>

      <div v-for="item in breakfastOffer" class="flex justify-between m-2">
        <div class="my-4">
          {{ item.title }}
          <div class="text-sm">{{ item.subtitle }}</div>
        </div>
        <div class="my-auto">{{ item.prices }} zł</div>
      </div>
      <div class="font-bold text-xl text-center">
        Zapraszamy do skosztowania naszych śniadań, które są serwowane
        codziennie od 7:00 do 10:30.
      </div>
    </FrModal>

    <FrModal
      :isOpen="isLunchOfferOpen"
      :center="true"
      @onClose="isLunchOfferOpen = false"
    >
      <h1 class="font-bold text-center text-2xl">Oferta obiadowa</h1>

      <div v-for="item in lunchOffer" class="flex justify-between m-2">
        <div class="my-4">
          {{ item.title }}
          <div class="text-sm">{{ item.subtitle }}</div>
        </div>
        <div class="my-auto">{{ item.prices }} zł</div>
      </div>
      <div class="font-bold text-xl text-center">
        Zapraszamy do skosztowania naszych pysznych obiadów, które są serwowane
        codziennie od 12:00 do 16:00.
      </div>
    </FrModal>

    <FrModal
      :isOpen="isDinnerOfferOpen"
      :center="true"
      @onClose="isDinnerOfferOpen = false"
    >
      <h1 class="font-bold text-center text-2xl">Kolacja</h1>

      <div v-for="item in dinnerOffer" class="flex justify-between m-2">
        <div class="my-4">
          {{ item.title }}
          <div class="text-sm">{{ item.subtitle }}</div>
        </div>
        <div class="my-auto">{{ item.prices }} zł</div>
      </div>
      <div class="font-bold text-xl text-center">
        Zapraszamy do skosztowania naszych pysznych posiłków, które są serwowane
        codziennie od 18:00 do 21:00.
      </div>
    </FrModal>
  </main>
</template>

<script lang="ts" setup>
import { gtagEvent } from "@/assets/js/main";

const isBreakfastOfferOpen = ref(false);
const isLunchOfferOpen = ref(false);
const isDinnerOfferOpen = ref(false);

const openModal = (modalId) => {
  switch (modalId) {
    case "breakfast":
      isBreakfastOfferOpen.value = true;
      break;
    case "lunch":
      isLunchOfferOpen.value = true;
      break;
    case "dinner":
      isBreakfastOfferOpen.value = true;
      break;
  }

  gtagEvent("event", "expanding_information", "button", `modal_${modalId}_opened`);
};
const menuDay = [
  {
    title: "Rosół z kaczki",
    subtitle: "",
    prices: 15,
  },
  {
    title: "Sznycel z indyka ",
    subtitle: "z frytkami/ziemniakami i surówką z marchewki",
    prices: 30,
  },
  {
    title: "Szarlotka na ciepło",
    subtitle: "z sosem czekoladowym, lodami i bitą śmietaną",
    prices: 60,
  },
];

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

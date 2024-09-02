<template>
  <main>
    <FrBanner img="spa/spaImg.png" class="mb-16">STREFA RELAKSU </FrBanner>

    <div class="mx-8">
      <div class="flex justify-around gap-8 max-lg:flex-col">
        <div class="w-full flex flex-col justify-between">
          <h2 class="font-semibold text-5xl">Strefa Relaksu</h2>
          <div class="border shadow rounded-xl px-10 py-8 bg-white">
            Nasi wykwalifikowani specjaliści od masażu i zabiegów zadbają o to,
            abyś opuszczając nasz hotel, czuł się o 20 lat młodszy. Wypróbuj
            nasze najnowsze oferty:
            <ul class="list-disc ml-12">
              <li class="mt-4" @click="gtagEvent('event', 'expanding_information_try', 'button', 'click_in_cleansing_treatments')">zabiegi oczyszczające</li>
              <li class="mt-2" @click="gtagEvent('event', 'expanding_information_try', 'button', 'click_in_regenerative_treatments')">zabiegi regenerujące</li>
            </ul>
          </div>
        </div>

        <div class="border rounded-xl bg-white w-full px-10 py-8">
          <h1 class="font-semibold text-2xl">Cennik:</h1>
          <div v-for="item in priceList" class="flex justify-between m-2">
            <div>{{ item.name }}</div>
            <div>{{ item.prices }} zł</div>
          </div>
        </div>
      </div>

      <div class="border rounded-xl bg-white py-4 px-8 my-12">
        <h3 class="font-semibold text-3xl">Dostępne obiekty:</h3>

        <div class="flex justify-around gap-8 flex-wrap">
          <div
            v-for="item in serviceList"
            class="text-center m-4 w-[300px] flex-auto"
            @click="gtagEvent('event', 'expanding_information_try', 'button', `click_in_${item.name}`)"
          >
            <img
              :src="`/images/${item.img}`"
              class="w-full object-cover h-[200px] rounded"
            />
            <p>{{ item.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { gtagEvent } from "@/assets/js/main";

const priceList = [
  {
    name: "Zabieg oczyszczający",
    prices: 90,
  },
  {
    name: "Zabieg regenerujący",
    prices: 115,
  },
  {
    name: "Masaż twarzy",
    prices: 60,
  },
  {
    name: "Masaż twarzy z maską algową",
    prices: 85,
  },
  {
    name: "Peeling kawitacyjny",
    prices: 200,
  },
  {
    name: "Pakiet zabiegów dla 2 osób",
    prices: 400,
  },
];
const serviceList = [
  {
    name: "Prywatne jacuzzi",
    img: "spa/jacuzzi.jpeg",
  },
  {
    name: "Basen wewnętrzny",
    img: "spa/swimming-pool.jpeg",
  },
  {
    name: "Pokój do masażu",
    img: "spa/massage.jpeg",
  },
  {
    name: "Pokój do masażu dla 2 osób z jacuzzi",
    img: "spa/massageAndJauzzi.png",
  },
];
</script>

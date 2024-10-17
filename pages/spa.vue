<template>
  <main>
    <FrBanner img="spa/spa.jpeg">STREFA RELAKSU </FrBanner>

    <div class="mx-8">
      <div class="flex justify-around gap-8 max-lg:flex-col mb-12">
        <div class="w-full flex flex-col justify-between">
          <h2 class="font-semibold text-5xl mb-16">Strefa Relaksu</h2>
          <FrBox>
            Nasi wykwalifikowani specjaliści od masażu i zabiegów zadbają o to,
            abyś opuszczając nasz hotel, czuł się o 20 lat młodszy. Wypróbuj
            nasze najnowsze oferty:
            <ul class="list-disc ml-12">
              <li
                class="mt-4"
                @click="
                  gtagEvent(
                    'event',
                    'expanding_information_try',
                    'button',
                    'click_in_cleansing_treatments'
                  )
                "
              >
                zabiegi oczyszczające
              </li>
              <li
                class="mt-2"
                @click="
                  gtagEvent(
                    'event',
                    'expanding_information_try',
                    'button',
                    'click_in_regenerative_treatments'
                  )
                "
              >
                zabiegi regenerujące
              </li>
            </ul>
          </FrBox>
        </div>

        <FrBox class="w-full">
          <h3 class="font-bold text-2xl mb-4">Cennik:</h3>
          <div
            v-for="item in priceList"
            class="flex justify-between flex-wrap mb-2"
          >
            <div class="">
              {{ item.name }}:
              <div class="inline font-semibold md:hidden ml-2 text-nowrap">
                {{ item.prices }} zł
              </div>
            </div>
            <div class="hidden md:block">{{ item.prices }} zł</div>
          </div>
        </FrBox>
      </div>

      <FrBox class="mb-32">
        <h3 class="font-semibold text-3xl mb-12">Dostępne obiekty:</h3>

        <div class="flex justify-around gap-8 flex-wrap">
          <div
            v-for="item in serviceList"
            class="text-center w-[300px] flex-auto mb-8"
            @click="
              gtagEvent(
                'event',
                'expanding_information_try',
                'button',
                `click_in_${item.name}`
              )
            "
          >
            <img
              :src="`/images/spa/${item.img}`"
              class="w-full object-cover h-[200px] rounded"
            />
            <p>{{ item.name }}</p>
          </div>
        </div>
      </FrBox>
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
    img: "jacuzzi.jpeg",
  },
  {
    name: "Basen wewnętrzny",
    img: "swimming-pool.jpeg",
  },
  {
    name: "Pokój do masażu",
    img: "massage.jpeg",
  },
  {
    name: "Pokój do masażu dla 2 osób z jacuzzi",
    img: "massage-for-2.jpeg",
  },
];
</script>

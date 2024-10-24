<template>
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

</template>

<script setup lang="ts">
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

</script>
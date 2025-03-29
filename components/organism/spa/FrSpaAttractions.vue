<template>
  <FrBox class="mb-32">
    <h3 class="font-semibold text-3xl mb-12 text-center md:text-left">
      Dostępne obiekty:
    </h3>

    <div class="flex justify-around gap-8 flex-wrap">
      <FrCard
        v-for="item in serviceList"
        :data="item"
        class="max-w-[80%] md:max-w-[40%] lg:max-w-[20%]"
        @click="
          gtagEvent(
            'event',
            'expanding_information_try',
            'button',
            `click_in_spa_${item.name}`
          )
        "
      />
    </div>
  </FrBox>
</template>

<script setup lang="ts">
import { gtagEvent } from "@/assets/js/main";

const serviceList = [
  {
    title: "Prywatne jacuzzi",
    img: "/images/spa/jacuzzi.jpeg",
  },
  {
    title: "Basen wewnętrzny",
    img: "/images/spa/swimming-pool.jpeg",
  },
  {
    title: "Pokój do masażu",
    img: "/images/spa/massage.jpeg",
  },
  {
    title: "Pokój do masażu dla 2 osób z jacuzzi",
    img: "/images/spa/massage-for-2.jpeg",
  },
];
</script>

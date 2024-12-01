<template>
  <FrBox class="px-8 mb-24">
    <h3 class="font-semibold text-3xl mb-12">Pokoje:</h3>

    <div class="flex gap-4 justify-around flex-wrap">
      <FrCardRoom
        v-for="item in rooms"
        :key="item.roomKindId"
        :data="item"
        class="md:max-w-[30%] flex-auto mb-4"
        @mouseover="
          gtagEvent(
            'event',
            'contact',
            'button',
            `more_info_about_roomKindId_room`
          )
        "
      />
    </div>
  </FrBox>
</template>

<script setup lang="ts">
import { gtagEvent } from "@/assets/js/main";

const config = useRuntimeConfig();
const apiUrl = config.public.apiBaseUrl;

const rooms = [
  {
    roomKindId: 1,
    title: "Przytulny pokój jednoosobowy z widokiem na morze",
    description:
      "Jednoosobowy pokój idealny dla osób podróżujących samotnie. Oferuje piękny widok na morze, co sprzyja relaksowi i wyciszeniu.",
    price: 300,
    amount: 5,
    maxGuests: 1,
    amenities: "wifi snowflake bath shower tv",
    img: "single-room.jpeg",
  },
  {
    roomKindId: 2,
    title: "Rodzinny apartament z dwoma sypialniami i aneksem kuchennym",
    description:
      "Przestronny apartament rodzinny z dwiema sypialniami oraz w pełni wyposażonym aneksem kuchennym. Doskonały dla rodzin z dziećmi, zapewnia komfort i prywatność.",
    price: 600,
    amount: 3,
    maxGuests: 4,
    amenities: "wifi snowflake bath tv",
    img: "family-apartment.jpeg",
  },
  {
    roomKindId: 3,
    title: "Luksusowy apartament z tarasem i widokiem na morze",
    description:
      "Ekskluzywny apartament z przestronnym tarasem, z którego roztacza się widok na morze. Wykończony w wysokim standardzie, idealny na romantyczny pobyt.",
    price: 1200,
    amount: 2,
    maxGuests: 2,
    amenities: "wifi snowflake hot-tub-person shower bath tv",
    img: "apartment-with-terrace.jpeg",
  },
  {
    roomKindId: 4,
    title: "Komfortowy pokój dwuosobowy z balkonem",
    description:
      "Komfortowy pokój dla dwóch osób, wyposażony w balkon, który pozwala na relaks na świeżym powietrzu. Doskonały wybór dla par.",
    price: 500,
    amount: 4,
    maxGuests: 2,
    amenities: "wifi snowflake bath tv",
    img: "double-room.jpeg",
  },
  {
    roomKindId: 5,
    title: "Komfortowy pokój z łóżkiem małżeńskim",
    description:
      "Przytulny pokój z wygodnym łóżkiem małżeńskim. Stworzony z myślą o parach szukających komfortowego wypoczynku.",
    price: 500,
    amount: 3,
    maxGuests: 3,
    amenities: "wifi snowflake shower tv",
    img: "double-bed.jpeg",
  },
];
</script>

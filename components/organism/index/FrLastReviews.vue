<template>
  <div class="mx-12 mb-32">
    <h2 class="text-3xl font-bold italic mb-16 ml-8">Nasze ostatnie opinie:</h2>
    <p v-if="error">Wstąpił błąd</p>
    <div
      v-else
      class="flex flex-col md:flex-row items-center md:items-stretch justify-center md:justify-between flex-wrap"
    >
      <FrReview
        v-for="item in data"
        :key="item.reviewId"
        :data="item"
        @click="gtagEvent('event', 'contact', 'button', 'rewiew_click')"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { gtagEvent } from "@/assets/js/main";

const config = useRuntimeConfig();
const apiUrl = config.public.apiBaseUrl;

const data = [
  {
    reviewId: 20,
    userFullName: "Justyna Król",
    reviewDate: "2023-10-22",
    rating: 4,
    reviewText: "Hotel OK, ale mogliby poprawić wystrój wnętrz.",
  },
  {
    reviewId: 19,
    userFullName: "Marcin Kowalczyk",
    reviewDate: "2023-10-21",
    rating: 4,
    reviewText: "Hotel spełnił moje oczekiwania, ale brakuje strefy wellness.",
  },
  {
    reviewId: 18,
    userFullName: "Agnieszka Wysocka",
    reviewDate: "2023-10-20",
    rating: 5,
    reviewText: "Wyjątkowe doświadczenie, hotel wart każdej złotówki.",
  },
  {
    reviewId: 17,
    userFullName: "Andrzej Michalski",
    reviewDate: "2023-10-18",
    rating: 4,
    reviewText: "Dobry hotel, ale klimatyzacja nie działała prawidłowo.",
  },
  {
    reviewId: 16,
    userFullName: "Maria Pawlak",
    reviewDate: "2023-10-16",
    rating: 4,
    reviewText: "W porządku, ale przydałyby się lepsze opcje posiłków.",
  },
  {
    reviewId: 15,
    userFullName: "Rafał Piotrowski",
    reviewDate: "2023-10-14",
    rating: 5,
    reviewText: "Doskonała jakość za te pieniądze, polecam.",
  },
];
</script>

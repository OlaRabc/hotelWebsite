<template>
  <div class="mx-12 mb-32">
    <h2 class="text-3xl font-bold italic mb-16 ml-8">Nasze ostatnie opinie:</h2>
    <p v-if="error">Wstąpił błąd</p>
    <div
      v-else
      class="flex flex-col md:flex-row items-center md:items-stretch justify-center md:justify-between flex-wrap"
    >
      <FrReview v-for="item in data" :key="item.reviewId" :data="item" @click="gtagEvent('event', 'contact', 'button', 'rewiew_click')"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gtagEvent } from "@/assets/js/main";

const config = useRuntimeConfig()
const apiUrl = config.public.apiBaseUrl

const { data, error } = await useFetch(`${apiUrl}/last-reviews`);
</script>

<template>
  <div>
    <div
      class="flex flex-wrap max-lg:flex-col justify-center md:justify-end items-center mb-12 md:mr-8"
    >
      <div class="text-center mb-4 md:mr-4">
        <label class="text-xl" for="arrivalDate"> Data zameldowania </label>
        <input
          id="arrivalDate"
          class="border rounded px-4 py-2 cursor-pointer"
          type="date"
          :min="minDate"
          v-model="arrivalDate"
          @change="
            gtagEvent(
              'event',
              'form',
              'date_selection_reservation',
              'selected_departure_date',
              arrivalDate
            )
          "
        />
      </div>

      <div class="text-center mb-4 md:mr-8">
        <label class="text-xl inlin mx-auto" for="departureDate">
          Data wymeldowania
        </label>
        <input
          id="departureDate"
          class="border rounded px-4 py-2 cursor-pointer"
          type="date"
          :min="minDate"
          v-model="departureDate"
          @change="
            gtagEvent(
              'event',
              'form',
              'date_selection_reservation',
              'selected_departure_date',
              departureDate
            )
          "
        />
      </div>

      <FrButton class="mb-4" @on-click="validData"> Szukaj </FrButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

import { gtagEvent } from "@/assets/js/main";

const minDate = new Date().toISOString().split("T")[0];

const arrivalDate = ref();
const departureDate = ref();

onMounted(() => {
  const date = new Date();

  if (route.params.arrivalDate) {
    arrivalDate.value = route.params.arrivalDate;
  } else {
    arrivalDate.value = date.toISOString().split("T")[0];
  }

  if (route.params.departureDate) {
    departureDate.value = route.params.departureDate;
  } else {
    date.setDate(date.getDate() + 2);
    departureDate.value = date.toISOString().split("T")[0];
  }
});

const router = useRouter();
const validData = () => {
  let val: string = "";

  if (arrivalDate.value < minDate || departureDate.value < minDate) {
    val = "error";
    console.error("error");
  } else if (arrivalDate.value >= departureDate.value) {
    val = "error";
    console.error("error");
  } else {
    val = "valid";
  }

  router.push(`/cennik/${arrivalDate.value}/${departureDate.value}`);
};
</script>

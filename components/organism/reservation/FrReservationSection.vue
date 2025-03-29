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

      <div class="text-center mb-4 md:mr-8">
        <label class="text-xl" for="guestSum"> Liczba gości: </label>
        <input
          id="guestSum"
          type="number"
          :min="1"
          :max="4"
          v-model="guestSum"
          :aria-describedby="isError ? 'error-message' : ''"
          :aria-invalid="isError ? 'true' : 'false'"
          class="border rounded px-4 py-2 w-24"
          @change="
            gtagEvent(
              'event',
              'form',
              'guests_selection_reservation',
              'selected_guests',
              guestSum
            )
          "
        />
      </div>

      <FrButton class="mb-4" @on-click="validData"> Szukaj </FrButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gtagEvent } from "@/assets/js/main";

const route = useRoute();

const minDate = new Date().toISOString().split("T")[0];

const arrivalDate = ref();
const departureDate = ref();
const guestSum = ref(1);

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

  if (
    arrivalDate.value < minDate ||
    departureDate.value < minDate ||
    guestSum < 0 ||
    guestSum > 4
  ) {
    val = "error";
    console.error("error");
  } else if (arrivalDate.value >= departureDate.value) {
    val = "error";
    console.error("error");
  } else {
    val = "valid";
  }

  router.push(`/rezerwuj/${guestSum.value}/${arrivalDate.value}/${departureDate.value}`);
};
</script>

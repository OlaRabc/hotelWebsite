<template>
  <div class="bg-white p-8 rounded-2xl flex flex-col">
    <div class="text-center mb-4">
      <label class="text-xl" for="arrivalDate"> Data zameldowania </label>
      <input
        id="arrivalDate"
        type="date"
        :min="minDate"
        v-model="arrivalDate"
        :aria-describedby="isError ? 'error-message' : ''"
        :aria-invalid="isError ? 'true' : 'false'"
        class="border rounded px-4 py-2 cursor-pointer"
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

    <div class="text-center mb-4">
      <label class="text-xl inlin mx-auto" for="departureDate">
        Data wymeldowania
      </label>
      <input
        id="departureDate"
        type="date"
        :min="minDate"
        v-model="departureDate"
        :aria-describedby="isError ? 'error-message' : ''"
        :aria-invalid="isError ? 'true' : 'false'"
        class="border rounded px-4 py-2 cursor-pointer"
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
    <div class="text-center mb-4 flex justify-between">
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
    <div
      v-if="isError"
      role="alert"
      aria-live="assertive"
      id="error-message"
      class="font-bold text-lg text-red-600 text-right mb-4"
    >
      Błędnie podana data lub Liczba gości
    </div>

    <FrButton class="mr-0 self-end" @on-click="validData"> Szukaj </FrButton>
  </div>
</template>

<script setup lang="ts">
import { gtagEvent } from "@/assets/js/main";

const minDate = new Date().toISOString().split("T")[0];

const arrivalDate = ref();
const departureDate = ref();
const guestSum = ref(1);
const isError: Ref<boolean> = ref(false);

onMounted(() => {
  const date = new Date();

  arrivalDate.value = date.toISOString().split("T")[0];

  date.setDate(date.getDate() + 2);
  departureDate.value = date.toISOString().split("T")[0];
});

const router = useRouter();
const validData = () => {
  isError.value = false;
  if (
    arrivalDate.value < minDate ||
    departureDate.value < minDate ||
    guestSum.value < 0 ||
    guestSum.value > 4
  ) {
    isError.value = true;
    console.error("error");
  } else if (arrivalDate.value >= departureDate.value) {
    isError.value = true;
    console.error("error");
  } else {
    router.push(
      `rezerwuj/${guestSum.value}/${arrivalDate.value}/${departureDate.value}`
    );
  }
};
</script>

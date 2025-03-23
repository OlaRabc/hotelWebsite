<template>
  <main class="min-h-screen">
    <FrBanner img="salary/salatry.jpeg" alt="Baner Podstrony Rezerwacji">
      REZERWACJA
    </FrBanner>

    <FrContainer>
      <FrReservationSection />
      <div
        v-if="isError"
        role="alert"
        aria-live="assertive"
        class="text-center text-2xl text-red-900 font-semibold mb-12"
      >
        Błędnie wprowdzone daty
      </div>

      <div v-else class="mb-12">
        <div
          v-if="roomList.length === 0"
          role="alert"
          aria-live="assertive"
          class="text-center text-xl font-bold"
        >
          Brak wolnych pokoi w wybranym terminie
        </div>
        <div v-else>
          <FrRoomBox v-for="room in roomList" :key="room?.id" :room="room" />
        </div>
      </div>
    </FrContainer>
  </main>
</template>

<script setup lang="ts">
import { gtagEvent } from "@/assets/js/main";
import { rooms as data } from "~/assets/js/roomList";
import { useReservationData } from "~/stores/reservationData";
const reservationData = useReservationData();

const route = useRoute();

useHead({
  title: "Fun And Relax Rezerwacja",
  meta: [
    {
      name: "description",
      content:
        "Rezerwuj pobytu w hotelu Fun and Relax, gdzie komfort, styl i pełen relaks czekają na Ciebie w każdej chwili!",
    },
  ],
});

const arrivalDate = ref("");
const departureDate = ref("");

const isError = ref(false);

const config = useRuntimeConfig();
const roomList = ref([]);

onMounted(async () => {
  const date = new Date();
  arrivalDate.value = route.params.arrivalDate;
  departureDate.value = route.params.departureDate;

  const date1 = new Date(arrivalDate.value);
  const date2 = new Date(departureDate.value);

  if (date2 <= date1 || date2 < date || date2 < date) {
    isError.value = true;
  } else {
    roomList.value = data;
    reservationData.setDates(arrivalDate.value, departureDate.value);
  }
});

</script>

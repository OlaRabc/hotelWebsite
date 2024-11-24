<template>
  <main class="min-h-screen">
    <FrBanner img="salary/salatry.jpeg" alt="Baner Podstrony Cennik"
      >CENNIK</FrBanner
    >

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
          <FrRoomBox
            v-for="room in roomList"
            :key="room?.id"
            :room="room"
            @onChange="setReservationList"
          />

          <FrButton @click="openSummary"> Rezerwuj </FrButton>
        </div>
      </div>
    </FrContainer>

    <FrReservationModal
      :isOpen="isSummaryOpen"
      :reservation-list="reservationList"
      :numberOfNights="numberOfNights"
      @on-close="closeSummary"
    />
  </main>
</template>

<script setup lang="ts">
import { gtagEvent } from "@/assets/js/main";

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
const reservationList = ref([]);

const config = useRuntimeConfig();
const apiUrl = config.public.apiBaseUrl;
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
    const response = await fetch(
      `${apiUrl}/reservation/${arrivalDate.value}/${departureDate.value}`
    );
    if (!response.ok) throw new Error("Nie udało się pobrać danych");

    const result = await response.json();
    roomList.value = result;

    countNights();
  }
});

const isSummaryOpen = ref(false);
const openSummary = () => {
  isSummaryOpen.value = true;
  gtagEvent('event', 'contact', 'button', 'go_to_summary_modal')
};

const closeSummary = () => {
  isSummaryOpen.value = false;
  gtagEvent('event', 'contact', 'button', 'close_summary_modal')
};

const setReservationList = (id: string, value: string) => {
  const room = roomList.value.find((element) => element.id == id);

  const newList = reservationList.value.filter((element) => element.id != id);

  if (value == "0") {
    reservationList.value = newList;
    return;
  }

  newList.push({
    id: room.id,
    name: room.title,
    numberOfRooms: value,
    price: room.price,
  });

  reservationList.value = newList;
};

const numberOfNights = ref(0);
const countNights = () => {
  const date1 = new Date(arrivalDate.value);
  const date2 = new Date(departureDate.value);

  const differenceInTime = date2 - date1;

  numberOfNights.value = differenceInTime / (1000 * 60 * 60 * 24);
};
</script>

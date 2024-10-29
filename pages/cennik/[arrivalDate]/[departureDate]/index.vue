<template>
  <main class="min-h-screen">
    <FrBanner img="salary/salatry.jpeg">CENNIK</FrBanner>

    <FrContainer>
      <FrReservationSection />
      <div
        v-if="isError"
        class="text-center text-2xl text-red-900 font-semibold mb-12"
      >
        Błędnie wprowdzone daty
      </div>

      <div v-else class="mb-12">
        <div v-if="roomList.length === 0">
          Brak wolnych pokoi w wybranym terminie
        </div>
        <div v-else>
          <FrRoomBox
            v-for="room in roomList"
            :key="room?.id"
            :room="room"
            @onChange="setReservationList"
          />
        </div>
        <FrButton @click="openSummary"> Rezerwuj </FrButton>
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

const arrivalDate = ref("");
const departureDate = ref("");

const validState = ref("");

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
  if (date2 <= date1 || date1 < date || date2 < date) {
    isError.value = true;
  } else {
    const response = await fetch(
      `${apiUrl}/reservation/${arrivalDate.value}/${departureDate.value}`
    );
    if (!response.ok) throw new Error("Nie udało się pobrać danych");

    const result = await response.json();
    roomList.value = result;
  }
});

const isSummaryOpen = ref(false);
const openSummary = () => {
  isSummaryOpen.value = true;
};

const closeSummary = () => {
  isSummaryOpen.value = false;
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
    name: room.description,
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

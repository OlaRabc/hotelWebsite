<template>
  <main class="min-h-screen">
    <FrBanner img="salary/salatry.jpeg">CENNIK</FrBanner>

    <div class="mx-16">
      <FrReservationSection @onChange="loadData" />

      <div
        v-if="validState == 'error'"
        class="text-center text-2xl text-red-900 font-semibold mb-12"
      >
        Błędnie wprowdzone daty
      </div>
      <div v-else-if="validState == 'valid'" class="mb-12">
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
    </div>

    <FrReservationModal
      :isOpen="isSummaryOpen"
      :reservation-list="reservationList"
      @on-close="closeSummary"
    />
  </main>
</template>

<script setup lang="ts">
import { gtagEvent } from "@/assets/js/main";

const arrivalDate = ref("");
const departureDate = ref("");

const validState = ref("");
const roomList = ref([]);
const reservationList = ref([]);

const loadData = (state: string, arrival, departure) => {
  validState.value = state;

  if (state === "error") {
    roomList.value = [];
  } else {
    arrivalDate.value = arrival;
    departureDate.value = departure;

    getRooms();
  }
};

const getRooms = async () => {
  const { data, error } = await useFetch(
    `http://localhost:8080/reservation/${arrivalDate.value}/${departureDate.value}`
  );

  roomList.value = data.value;
  clearReservationList();
  countNights();
};

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

// const setReservationList = (event) => {
//   const room = roomList.value.find(
//     (element) => element.roomKindId == event.target.id
//   );

//   const newList = reservationList.value.filter(
//     (element) => element.roomKindId != event.target.id
//   );

//   newList.push({
//     roomKindId: room.roomKindId,
//     name: room.description,
//     numberOfRooms: event.target.value,
//     price: room.price,
//   });
//   reservationList.value = newList;

//   console.log(countCostOfRooms());
// };

const clearReservationList = () => {
  reservationList.value = [];
};

const numberOfNights = ref(0);

const countNights = () => {
  const date1 = new Date(arrivalDate.value);
  const date2 = new Date(departureDate.value);

  const differenceInTime = date2 - date1;

  numberOfNights.value = differenceInTime / (1000 * 60 * 60 * 24);
};
</script>

<template>
  <main class="min-h-screen">
    <FrBanner img="salary/salatry.jpeg" class="mb-16">CENNIK</FrBanner>

    <div class="mx-12">
      <div
        class="flex flex-wrap max-lg:flex-col justify-center md:justify-end items-center"
      >
        <div class="text-center mb-4 md:mr-4">
          <label class="text-xl" for="arrivalDate"> Data zameldowania </label>
          <input
            id="arrivalDate"
            class="border rounded px-4 py-2 cursor-pointer"
            type="date"
            v-model="arrivalDate"
            @change="
              gtagEvent(
                'event',
                'form',
                'date_selection__reservation',
                'selected_arriave_date',
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

        <button
          class="bg-[#C4B976] py-2 px-6 rounded-3xl font-bold text-white text-xl mb-4"
          @click="loadData"
        >
          Szukaj
        </button>
      </div>
      <div v-if="error" class="text-center text-2xl text-red-900 font-semibold">
        Wystapił błąd, spróbuj ponownie później
      </div>
      <div v-else-if="roomList.length !== 0" class="md:mx-8">
        <div
          v-for="room in roomList"
          :key="room?.roomKindId"
          class="bg-white rounded-xl py-8 md:px-12 mb-12"
        >
          <h2 class="font-bold mb-8 text-xl px-4 text-center md:hidden">
            {{ room?.description }}
          </h2>

          <div class="flex flex-col md:flex-row items-center">
            <div class="w-[100%] md:w-[50%] flex-auto max-md:mb-8 md:mr-8">
              <img
                :src="`/images/rooms/${room?.img}`"
                class="w-full object-cover max-h-[150px] md:rounded-xl md:max-h-[200px]"
              />
            </div>

            <div class="md:w-full self-start mx-8">
              <h2 class="font-bold mb-6 text-xl max-md:hidden">
                {{ room?.description }}
              </h2>
              <div class="md:flex md:justify-between">
                <p class="mb-4 md:mb-6">
                  Maksymalna liczba gości: {{ room?.maxGuests }}
                </p>

                <p class="text-[#C4B976] font-bold text-lg mb-4 md:mb-6">
                  Cena za noc:
                  <span class="text-xl inline-block">
                    {{ room?.price }} zł
                  </span>
                </p>
              </div>

              <p class="mb-4 md:mb-6">{{ room?.amenities }}</p>
              <div class="mb-4 md:mb-6">
                <label for="cars">
                  Ilośc zarezerwowanych przez ciebie pokoi:
                </label>

                <select
                  name="numberOfRooms"
                  :id="room?.roomKindId"
                  @change="setReservationList"
                >
                  <option :value="0" selected="selected">0</option>
                  <option :value="n" v-for="n in room?.freeRooms">
                    {{ n }}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <button
          class="bg-[#C4B976] py-2 px-6 rounded-3xl font-bold text-white text-xl float-end mb-8"
          @click="openSummary"
        >
          Rezerwuj
        </button>
      </div>
      <div v-else class="text-center text-2xl">
        Wybierz termin zameldowania oraz wymeldowania
      </div>
    </div>
    <FrModal :is-open="isSummaryOpen" @onClose="isSummaryOpen = false">
      <div v-if="reservationList.length !== 0">
        <h2 class="font-bold text-center text-2xl mb-8">
          Podsumowanie rezerwacji
        </h2>
        <p class="mb-4">
          Data przyjazdu: <span class="font-semibold">{{ arrivalDate }}</span
          >, data odjazdu:
          <span class="font-semibold">{{ departureDate }}</span>
        </p>

        <div class="mb-12">
          <h3 class="font-bold text-xl mb-4">Zarezerwowane pokoje:</h3>
          <div
            v-for="item in reservationList"
            :key="item.roomKindId"
            class="mb-4"
          >
            <span class="font-semibold"> {{ item.name }}</span>
            , ilość pokoi {{ item.numberOfRooms }}, cena za jeden pokój
            <span class="font-semibold">{{ item.price }} zł</span>
          </div>
        </div>

        <div class="text-right">
          <input
            class="cursor-pointer"
            type="checkbox"
            v-model="parkingReservation"
            @click="toggleParkingReservation"
          />

          <label> Zarezerwój miejsce parkingowe (10 zł za dobę) </label>
        </div>
        <h3 class="font-bold text-2xl">
          Suma kosztów:
          <span class="text-nowrap">
            {{
              numberOfNights * (costOfRooms + 10 * Number(parkingReservation))
            }}
            zł
          </span>
        </h3>

        <button
          class="bg-[#C4B976] py-2 px-6 rounded-3xl font-bold text-white text-xl float-end"
          @click="openSummary"
        >
          Rezerwuj
        </button>
      </div>
      <div v-else>
        <h3 class="font-bold text-xl mb-4 text-center">
          Nie wybrano pokoi do rezerwacji
        </h3>
      </div>
    </FrModal>
  </main>
</template>

<script setup lang="ts">
import { gtagEvent } from "@/assets/js/main";

const arrivalDate = ref("");
const departureDate = ref("");

const roomList = ref([]);
const reservationList = ref([]);
const loadData = async () => {
  const { data, error } = await useFetch(
    `http://localhost:8080/reservation/${arrivalDate.value}/${departureDate.value}`
  );
  roomList.value = data.value;

  clearReservationList();
  countNights();
};

const clearReservationList = () => {
  reservationList.value = [];
};

const isSummaryOpen = ref(false);
const openSummary = async () => {
  isSummaryOpen.value = true;
};

const setReservationList = (event) => {
  const room = roomList.value.find(
    (element) => element.roomKindId == event.target.id
  );

  const newList = reservationList.value.filter(
    (element) => element.roomKindId != event.target.id
  );

  newList.push({
    roomKindId: room.roomKindId,
    name: room.description,
    numberOfRooms: event.target.value,
    price: room.price,
  });
  reservationList.value = newList;

  console.log(countCostOfRooms());
};

const parkingReservation: Ref<boolean> = ref(false);
const toggleParkingReservation = () => {
  parkingReservation.value = !parkingReservation.value;
};

const costOfRooms = ref(0);
const countCostOfRooms = () => {
  let cost = 0;
  reservationList.value.map((element) => {
    cost += element.numberOfRooms * element.price;
  });
  costOfRooms.value = cost;
};

const numberOfNights = ref(0);

const countNights = () => {
  const date1 = new Date(arrivalDate.value);
  const date2 = new Date(departureDate.value);

  const differenceInTime = date2 - date1;

  numberOfNights.value = differenceInTime / (1000 * 60 * 60 * 24);
};
</script>

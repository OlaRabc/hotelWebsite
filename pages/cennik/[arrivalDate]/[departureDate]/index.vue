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
const data = [
  {
    id: 1,
    title: "Przytulny pokój jednoosobowy z widokiem na morze",
    description:
      "Jednoosobowy pokój idealny dla osób podróżujących samotnie. Oferuje piękny widok na morze, co sprzyja relaksowi i wyciszeniu.",
    price: 300,
    priceBefore: 0,
    freeRooms: 5,
    maxGuests: 1,
    amenities: "wifi snowflake bath shower tv",
    img: "single-room.jpeg",
  },
  {
    id: 2,
    title: "Rodzinny apartament z dwoma sypialniami i aneksem kuchennym",
    description:
      "Przestronny apartament rodzinny z dwiema sypialniami oraz w pełni wyposażonym aneksem kuchennym. Doskonały dla rodzin z dziećmi, zapewnia komfort i prywatność.",
    price: 600,
    priceBefore: 0,
    freeRooms: 3,
    maxGuests: 4,
    amenities: "wifi snowflake bath tv",
    img: "family-apartment.jpeg",
  },
  {
    id: 3,
    title: "Luksusowy apartament z tarasem i widokiem na morze",
    description:
      "Ekskluzywny apartament z przestronnym tarasem, z którego roztacza się widok na morze. Wykończony w wysokim standardzie, idealny na romantyczny pobyt.",
    price: 1200,
    priceBefore: 2000,
    freeRooms: 2,
    maxGuests: 2,
    amenities: "wifi snowflake hot-tub-person shower bath tv",
    img: "apartment-with-terrace.jpeg",
  },
  {
    id: 4,
    title: "Komfortowy pokój dwuosobowy z balkonem",
    description:
      "Komfortowy pokój dla dwóch osób, wyposażony w balkon, który pozwala na relaks na świeżym powietrzu. Doskonały wybór dla par.",
    price: 500,
    priceBefore: 0,
    freeRooms: 4,
    maxGuests: 2,
    amenities: "wifi snowflake bath tv",
    img: "double-room.jpeg",
  },
  {
    id: 5,
    title: "Komfortowy pokój z łóżkiem małżeńskim",
    description:
      "Przytulny pokój z wygodnym łóżkiem małżeńskim. Stworzony z myślą o parach szukających komfortowego wypoczynku.",
    price: 500,
    priceBefore: 0,
    freeRooms: 3,
    maxGuests: 3,
    amenities: "wifi snowflake shower tv",
    img: "double-bed.jpeg",
  },
];

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
    roomList.value = data;

    countNights();
  }
});

const isSummaryOpen = ref(false);
const openSummary = () => {
  isSummaryOpen.value = true;
  gtagEvent("event", "contact", "button", "go_to_summary_modal");
};

const closeSummary = () => {
  isSummaryOpen.value = false;
  gtagEvent("event", "contact", "button", "close_summary_modal");
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

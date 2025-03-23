<template>
  <div class="mx-8">
    <div class="-mx-20 sticky top-[90%] z-20 flex justify-between">
      <FrFollowButton type="left" @click="router.back()">
        Cofnij
      </FrFollowButton>

      <FrFollowButton @click="makeReservation"> Rezerwuj </FrFollowButton>
    </div>

    <h2
      class="text-4xl font-bold pb-12 mb-32 border-b-2 border-gold-500 text-center text-gold-500"
    >
      Podsumowanie:
    </h2>

    <FrSelectedRoom />

    <div class="border-b border-black mb-32 pb-8">
      <h3 class="text-3xl font-bold mb-8 text-gold-500 pb-4">Termin:</h3>
      <div class="text-center md:text-left md:flex md:justify-around mb-8">
        <div class="text-xl max-md:mb-8">
          Data przyjazdu:
          <span class="italic">{{ reservationData.arrivalDate }}</span>
        </div>
        <div class="text-xl">
          Data odjazdu:
          <span class="italic">{{ reservationData.departureDate }}</span>
        </div>
      </div>

      <div class="text-center text-2xl">
        Cena za pobyt:
        <span class="italic font-bold">
          {{ countNights() * reservationData.reservationRoom.price }} zł
        </span>
      </div>
    </div>

    <div class="border-b border-black mb-32 pb-8">
      <h3 class="text-3xl font-bold mb-8 text-gold-500 pb-4">
        Wybrane dodatkowe usługi:
      </h3>

      <div v-if="reservationData.selectedServicesList.length" class="md:mx-16">
        <div
          v-for="item in reservationData.selectedServicesList"
          class="text-xl md:flex md:justify-between mb-4 pb-2 border-b"
        >
          <div>
            {{ item.name }}
          </div>
          <div class="italic">
            rezem: {{ countPrice(item.cost, item.quantity) }} zł
          </div>
        </div>
      </div>
      <div v-else>Brak wybranych usług</div>
    </div>

    <div class="border-b border-black mb-32 pb-8">
      <h3 class="text-3xl font-bold mb-8 text-gold-500 pb-4">
        Dane do rezerwacji:
      </h3>

      <div class="ml-4">
        <div class="text-xl mb-8">
          Imię i nazwisko:
          <span class="italic">
            {{ reservationData.contractDetails?.name }}
          </span>
        </div>
        <div class="text-xl mb-8">
          Adres email:
          <span class="italic">
            {{ reservationData.contractDetails?.email }}
          </span>
        </div>

        <div class="text-xl mb-8">
          Rodzaj płatności:
          <span class="italic">
            {{
              reservationData.contractDetails?.paymentMethod === "GOOGLE_PAY"
                ? "Google Pay"
                : ""
            }}
            {{
              reservationData.contractDetails?.paymentMethod === "TRADITIONAL"
                ? "Karta płatnicza "
                : "BLIK"
            }}
          </span>
        </div>

        <div class="text-xl mb-8">
          Uwagi do rezerwacji:
          <span class="italic">
            {{ reservationData.contractDetails?.reservationDetails || "BRAK" }}
          </span>
        </div>

        <div
          v-if="reservationData.contractDetails?.vatInvoice"
          class="text-xl mb-8 italic"
        >
          Faktura
        </div>
      </div>
    </div>

    <div class="text-4xl text-center font-bold mb-32">
      Suma: <span class="text-gold-500 italic"> {{ costSum() }} zł</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useReservationData } from "~/stores/reservationData";
const reservationData = useReservationData();

const router = useRouter();

const costSum = () => {
  const totalServiceCost = reservationData.selectedServicesList.reduce(
    (acc, item) => {
      return (
        acc +
        (item?.quantity === "/raz" ? item?.cost : item?.cost * countNights())
      );
    },
    0
  );

  return countNights() * reservationData.reservationRoom.price +totalServiceCost;
};

const makeReservation = () => {
  window.location.href = "https://forms.gle/Q6UAbZG6EdtG6aT3A";
};

const numberOfNights = ref(0);
const countNights = () => {
  let date1 = new Date(reservationData.arrivalDate);
  let date2 = new Date(reservationData.departureDate);

  let diffInTime = date1 - date2;
  return diffInTime / (1000 * 60 * 60 * 24);
};

const countPrice = (cost, quantity) => {
  const c = quantity === "/raz" ? cost : cost * numberOfNights.value;

  return c;
};

onMounted(() => {
  if (!reservationData.reservationRoom) { router.push("/error")}
});
</script>

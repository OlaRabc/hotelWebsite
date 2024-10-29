<template>
  <FrModal :is-open="isOpen" @onClose="emitClose">
    <div v-if="reservationList.length === 0">
      <h3 class="font-bold text-xl mb-4 text-center">
        Nie wybrano pokoi do rezerwacji
      </h3>
    </div>
    <div v-else>
      <FrAdditionalServices @on-select="console.log('sdasd')" />

      {{ props.reservationList }}
    </div>
  </FrModal>

  <!-- <FrModal :is-open="isSummaryOpen" @onClose="isSummaryOpen = false">
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

        <FrButton class="float-end" @click="openSummary"> Rezerwuj </FrButton>
      </div>
      <div v-else>
        <h3 class="font-bold text-xl mb-4 text-center">
          Nie wybrano pokoi do rezerwacji
        </h3>
      </div>
    </FrModal> -->
</template>

<script setup lang="ts">
const props = defineProps({
  reservationList: { type: Object, required: true },
  isOpen: { type: Boolean, required: true },
  numberOfNights: { type: Number, required: true },
});

const emit = defineEmits(["onClose"]);
const emitClose = () => {
  emit("onClose");
};

// const parkingReservation: Ref<boolean> = ref(false);
// const toggleParkingReservation = () => {
//   parkingReservation.value = !parkingReservation.value;
// };

// const costOfRooms = ref(0);
// const countCostOfRooms = () => {
//   let cost = 0;
//   reservationList.value.map((element) => {
//     cost += element.numberOfRooms * element.price;
//   });
//   costOfRooms.value = cost;
// };
</script>

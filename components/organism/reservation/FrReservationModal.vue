<template>
  <FrModal :is-open="isOpen" @onClose="emitClose">
    <div v-if="reservationList.length === 0">
      <h3 class="font-bold text-xl mb-4 text-center">
        Nie wybrano pokoi do rezerwacji
      </h3>
    </div>
    <div v-else>
      <FrAdditionalServices
        v-if="actualState == Reservationtate.SERVICES"
        @on-accept="goToSummary"
      />
      <FrReservationSummary
        v-else-if="actualState == Reservationtate.SUMMARY"
        :serviceList="serviceList"
        :numberOfNights="numberOfNights"
        :reservationList="reservationList"
        @on-back="goToServicesy"
        @on-accept="goToForm"
      />
      <FrReservationForm
        v-else-if="actualState == Reservationtate.FORM"
        :services="serviceList"
        :reservationList="reservationList"
        @on-back="backToSummary"
      />

      <div v-else class="text-red-500 font-bold text-center text-2xl">
        Wystapił błąd.
      </div>
    </div>
  </FrModal>
</template>

<script setup lang="ts">
import type ServiceFieldsEnum from "~/enums/ServiceFieldsEnum";
import type shortRoomEnum from "~/enums/shortRoomEnum";

enum Reservationtate {
  SERVICES = "SERVICES",
  SUMMARY = "SUMMARY",
  FORM = "FORM",
}
const props = defineProps({
  reservationList: { type: Array as () => shortRoomEnum[], required: true },
  isOpen: { type: Boolean, required: true },
  numberOfNights: { type: Number, required: true },
});

const emit = defineEmits(["onClose"]);
const emitClose = () => {
  emit("onClose");
};

const actualState: Ref<Reservationtate> = ref(Reservationtate.SERVICES);

const serviceList: Ref<ServiceFieldsEnum[]> = ref([]);
const goToSummary = (list: ServiceFieldsEnum[]) => {
  serviceList.value = list;

  actualState.value = Reservationtate.SUMMARY;
};

const goToServicesy = () => {
  actualState.value = Reservationtate.SERVICES;
};

const goToForm = () => {
  actualState.value = Reservationtate.FORM;
};
const backToSummary = () => {
  actualState.value = Reservationtate.SUMMARY;
};
</script>

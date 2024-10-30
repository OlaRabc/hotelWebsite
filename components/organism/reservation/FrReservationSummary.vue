<template>
  <div>
    <h2 class="mb-8 pb-2 font-bold text-3xl border-black border-b-2">
      Podsumowanie:
    </h2>

    <div class="mb-8 pb-2 border-black border-b-2">
      <div class="mb-24">
        <h3 class="mb-8 pb-2 font-bold text-2xl">Pokoje:</h3>
        <div
          v-for="item in reservationList"
          :key="item.id"
          class="flex justify-between px-4 mb-2 border-b last:border-b-0"
        >
          <div class="text-lg font-semibold mr-4">{{ item.name }}:</div>
          <div class="text-nowrap">
            {{ item.price * numberOfNights * item.numberOfRooms }} zł
          </div>
        </div>
      </div>
      <div class="mb-24">
        <h3 class="mb-8 pb-2 font-bold text-2xl">Usługi dodatkowe:</h3>

        <div v-if="!serviceList.length">Nie wybrano żadnych usług.</div>
        <div
          v-for="item in serviceList"
          :key="item.name"
          class="flex justify-between px-4 mb-2 border-b last:border-none"
        >
          <div class="text-lg font-semibold mr-4">{{ item.name }}:</div>
          <div class="text-nowrap">
            {{
              item.quantity === "/raz" ? item.cost : item.cost * numberOfNights
            }}
            zł
          </div>
        </div>
      </div>
    </div>
    <div class="mr-8 mb-24 text-xl text-right font-semibold">
      Razem:
      <span class="text-gold-700 font-bold text-3xl">{{ costSum }}</span> zł
    </div>

    <div class="flex justify-between">
      <FrButton @on-click="onBack"> Wróć</FrButton>
      <FrButton @on-click="onAccept"> Dalej</FrButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import type ServiceFieldsEnum from "~/enums/ServiceFieldsEnum";
import type shortRoomEnum from "~/enums/shortRoomEnum";

const props = defineProps({
  reservationList: { type: Array as () => shortRoomEnum[], required: true },
  serviceList: { type: Array as () => ServiceFieldsEnum[], required: true },
  numberOfNights: { type: Number, required: true },
});

const costSum = computed(() => {
  const totalRoomCost = props.reservationList.reduce((acc, item) => {
    return acc + item.price * props.numberOfNights * item.numberOfRooms;
  }, 0);

  const totalServiceCost = props.serviceList.reduce((acc, item) => {
    return (
      acc +
      (item.quantity === "/raz" ? item.cost : item.cost * props.numberOfNights)
    );
  }, 0);

  return totalRoomCost + totalServiceCost;
});

const emit = defineEmits(["onAccept", "onBack"]);
const onAccept = () => {
  emit("onAccept");
};

const onBack = () => {
  emit("onBack");
};
</script>

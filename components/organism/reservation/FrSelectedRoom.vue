<template>
  <div class="mb-32">
    <h2 class="pb-8 text-4xl font-bold text-gold-500">Wybrany pokój:</h2>
    <div
      class="md:flex md:justify-between md:gap-12 mb-32 pb-8 border-b border-black"
    >
      <h3 class="md:hidden mb-8 px-4 font-bold text-xl text-center">
        {{ reservationData.reservationRoom?.title }}
      </h3>

      <div class="w-full">
        <h3 class="max-md:hidden mb-6 font-bold text-xl">
          {{ reservationData.reservationRoom?.title }}
        </h3>
        <div class="">
          <p class="mb-4 md:mb-6">
            Maksymalna liczba gości:
            {{ reservationData.reservationRoom?.maxGuests }}
          </p>

          <div class="mb-6 text-[#C4B976] font-bold text-lg">
            Cena za noc:
            <span class="text-3xl italic">
              {{ reservationData?.reservationRoom?.price }} zł
            </span>
          </div>
        </div>
      </div>

      <div
        class="mb-12 md:mb-0 w-full md:w-1/2 lg:w-1/3 bg-gray-100 rounded-2xl overflow-hidden shadow-lg"
      >
        <img
          :src="`/images/rooms/${reservationData.reservationRoom?.img}`"
          :alt="reservationData.reservationRoom?.title"
          class="w-full h-64 object-cover object-center"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useReservationData } from "~/stores/reservationData";

const reservationData = useReservationData();
</script>

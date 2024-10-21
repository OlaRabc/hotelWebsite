<template>
  <FrBox class="flex flex-col md:flex-row items-center mb-12">
    <h2 class="font-bold mb-8 text-xl px-4 text-center md:hidden">
      {{ room?.description }}
    </h2>
    <div class="w-[100%] md:w-[50%] flex-auto max-md:mb-8 md:mr-8">
      <img
        :src="`/images/rooms/${room.img}`"
        class="w-full object-cover max-h-[150px] md:rounded-xl md:max-h-[200px]"
      />
    </div>

    <div class="md:w-full self-start mx-2 md:mx-8">
      <h2 class="font-bold mb-6 text-xl max-md:hidden">
        {{ room?.title }}
      </h2>
      <div
        class="flex flex-col md:flex-row md:justify-between max-md:items-center"
      >
        <p class="mb-4 md:mb-6">
          Maksymalna liczba gości: {{ room.maxGuests }}
        </p>

        <div class="text-[#C4B976] font-bold text-lg mb-4 md:mb-6">
          Cena za noc:
          <div
            v-if="room.priceBefore > 0"
            class="relative mb-4 text-2xl text-center text-red-600 font-medium italic before:content-[' '] before:w-3/5 before:h-0.5 before:bg-red-600 before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:rounded-full before:rotate-12"
          >
            {{ room.priceBefore }} zł
          </div>

          <div
            class="text-center"
            :class="room.priceBefore > 0 ? 'text-4xl italic' : 'text-xl'"
          >
            {{ room.price }} zł
          </div>
        </div>
      </div>

      <div class="mb-4 md:mb-6">
        <div
          v-for="item in room.amenities.split(' ')"
          class="inline-block mr-2"
        >
          <font-awesome-icon :icon="item" class="text-xl" />
        </div>
      </div>

      <p class="mb-8 italic text-center md:text-left">
        {{ room.description }}
      </p>

      <div class="mb-4 md:mb-6">
        <label :v-for="room.id">
          Ilośc zarezerwowanych przez ciebie pokoi:
        </label>
        <select name="numberOfRooms" :id="room.id" @change="onChange">
          <option :value="0" selected>0</option>
          <option :value="n" v-for="n in room?.freeRooms">
            {{ n }}
          </option>
        </select>
      </div>
    </div>
  </FrBox>
</template>

<script setup lang="ts">
import type Room from "~/enums/roomEnum";

const props = defineProps({
  room: {
    type: Object as PropType<Room>,
    required: true,
  },
});

const emit = defineEmits(["onChange"]);

const onChange = (event) => {
  emit("onChange", event.target.id, event.target.value);
};
</script>

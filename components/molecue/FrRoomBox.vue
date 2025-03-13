<template>
  <FrBox class="md:flex md:justify-between md:gap-12 mb-32">
    <h2 class="font-bold mb-8 text-xl px-4 text-center md:hidden">
      {{ room?.title }}
    </h2>

    <div
      class="bg-gray-100 w-full md:w-1/2 lg:w-1/3 rounded-2xl overflow-hidden mb-12 md:mb-0 shadow-lg"
    >
      <img
        :src="`/images/rooms/${room.img}`"
        :alt="room.title"
        class="w-full h-64 md:h-96 object-cover object-center"
      />
    </div>

    <div class="w-full">
      <h2 class="font-bold mb-6 text-xl max-md:hidden">
        {{ room?.title }}
      </h2>
      <div class="">
        <p class="mb-4 md:mb-6">
          Maksymalna liczba gości: {{ room.maxGuests }}
        </p>

        <div
          class="mb-4 md:mb-6 flex justify-center md:justify-start gap-2 flex-wrap"
        >
          <FrAmenityIcon
            v-for="item in room.amenities"
            :icon="item.icon"
            :description="item.description"
            :key="item.id"
          />
        </div>
        <p class="italic text-center md:text-left mb-6">
          {{ room.description }}
        </p>
        <div class="text-[#C4B976] font-bold text-lg mb-6">
          Cena za noc:
          <span class="text-3xl italic"> {{ room.price }} zł </span>
        </div>
        <FrButton
          class="block mr-0 ml-auto"
          @on-click="()=>router.push(`/rezerwuj-pokoj/${room.id}`)"
        >
          Rezerwuj
        </FrButton>
      </div>
    </div>
  </FrBox>
</template>

<script setup lang="ts">
import type Room from "~/enums/roomEnum";
const router = useRouter();

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

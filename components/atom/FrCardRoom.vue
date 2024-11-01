<template>
  <div
    tabindex="0"
    class="group relative border rounded-xl overflow-hidden cursor-pointer shadow-lg outline-offset-4"
  >
    <img
      :src="`/images/rooms/${data.img}`"
      class="w-full h-auto object-cover"
      width="200"
      height="200"
      :alt="data.title"
    />

    <h3
      class="absolute bottom-0 left-0 w-[100%] py-4 bg-gold-500 text-white text-center text-xl font-bold z-10 max-md:hidden"
    >
      {{ data.title }}
    </h3>
    <div
      class="absolute top-0 md:-translate-y-[200%] left-0 w-full h-[100%] py-8 px-6 bg-black bg-opacity-80 text-white text-md leading-loose md:group-hover:translate-y-0 md:group-focus-within:translate-y-0 overflow-auto transition-all duration-300 delay-100 z-20"
    >
      <h3 class="italic text-xl font-bold mb-1">{{ data.title }}</h3>
      <div class="ml-4">
        <span class="text-md mb-8">
          Maksymalna liczba gości: {{ data.maxGuests }}
        </span>
        <p class="text-gold-300 font-bold text-xl mb-6 md:mb-8">
          Cena za noc: {{ data.price }} zł
        </p>
        <div class="mb-8">
          <div
            v-for="item in data.amenities.split(' ')"
            class="inline-block mr-4"
          >
            <client-only>
              <font-awesome-icon :icon="item" class="text-2xl" />
            </client-only>
          </div>
        </div>
      </div>

      <p class="text-center">
        {{ data.description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Room {
  roomKindId: number;
  title: string;
  description: string;
  price: number;
  amount: number;
  maxGuests: string;
  amenities: string;
  img: string;
}

const props = defineProps({
  data: {
    type: Object as PropType<Room>,
    required: true,
  },
});
</script>

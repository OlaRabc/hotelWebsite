<template>
  <div class="group relative border rounded-xl overflow-hidden cursor-pointer">
    <img
      :src="data.img"
      class="w-full h-auto object-cover"
      width="200"
      height="200"
      :alt="data.title"
    />

    <h3
      class="absolute top-0 left-0 w-[100%] py-2 bg-gold-500 bg-opacity-80 text-white text-center text-xl font-bold z-10 max-md:hidden"
    >
      {{ data.title }}
    </h3>
    <div
      class="absolute top-0 md:-translate-y-[200%] md:group-hover:translate-y-0 left-0 w-full h-[100%] py-8 px-4 bg-black bg-opacity-60 text-white text-md leading-loose overflow-auto transition-all duration-300 delay-100 z-20"
    >
      {{ data.description }}
    </div>
  </div>
</template>

<script setup lang="ts">
interface Data {
  img: string;
  title: string;
  description: string;
}

const props = defineProps({
  data: {
    type: Object as PropType<Data>,
    required: true,
  },
});
</script>

<template>
  <div
    tabindex="0"
    class="relative border rounded-xl overflow-hidden outline-offset-4"
  >
    <img
      :src="data.img"
      class="w-full h-auto object-cover"
      width="200"
      height="200"
      :alt="data.title"
    />

    <h3
      class="absolute top-0 left-0 w-[100%] py-2 bg-gold-500 bg-opacity-80 text-white text-center text-xl font-bold z-10"
    >
      {{ data.title }}
    </h3>
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

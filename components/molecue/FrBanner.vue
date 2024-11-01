<template>
  <div class="relative mb-32">
    <img :src="`/images/${props.img}`" class="w-full h-[30vw] object-cover" />
    <h1
      class="text-white font-semibold text-3xl md:text-5xl absolute bottom-2 right-2 md:bottom-8 md:right-8"
    >
      <slot />
    </h1>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  img: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
h1 {
  text-shadow: 1px 2px 10px black;
}
</style>

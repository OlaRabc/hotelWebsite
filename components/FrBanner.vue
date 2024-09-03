<template>
  <div class="relative">
    <img :src="`/images/${props.img}`" class="w-full h-[30vw] object-cover" />
    <p
      class="text-white font-semibold text-3xl md:text-5xl absolute bottom-2 right-2 md:bottom-8 md:right-8"
    >
      <slot />
    </p>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  img: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
p {
  text-shadow: 1px 2px 10px black;
}
</style>

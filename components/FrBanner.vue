<template>
  <div class="relative">
    <img :src="`/images/${props.img}`" class="w-full h-[30vw] object-cover"/>
    <p class="text-white font-semibold text-5xl absolute bottom-8 right-8">
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

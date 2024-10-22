<template>
    <div class="inline text-2xl">
      <client-only>
        <font-awesome-icon
          v-for="n in Math.floor(rate)"
          :icon="['fas', 'star']"
          class="text-[#C6930A] inline"
        />
        <font-awesome-icon
          v-for="n in 5 - Math.floor(rate)"
          :icon="['fas', 'star']"
          class="text-[#E0DDDD] inline"
        />
      </client-only>
    </div>
  </template>
  
  <script setup lang="ts">
  const props = defineProps({
    rate: {
      type: Number,
      required: true,
      default: 0,
    },
  });
  </script>
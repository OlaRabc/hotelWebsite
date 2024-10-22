<template>
    <div
      role="alert"
      aria-live="assertive"
      class="flex flex-col md:flex-row md:justify-around items-center min-h-screen max-md:text-center"
    >
      <h1
        type="h1"
        variant="h1"
        class="!text-[10rem] mt-32 md:-mt-64 max-md:mb-32 font-bold"
      >
        {{ props.error }}
      </h1>
  
      <div>
        <h2 class="mb-2 font-bold text-5xl">UPS!</h2>
  
        <slot />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const props = defineProps({
    error: {
      type: String,
      required: true,
    },
  });
  </script>
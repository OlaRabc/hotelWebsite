<template>
  <div class="inline-block mr-4 relative group">
    <client-only>
      <font-awesome-icon :icon="props.icon" class="text-2xl" />
    </client-only>
    <div
      class="-top-full left-0 bg-gold-400 text-black rounded absolute opacity-0 group-hover:opacity-100 text-nowrap z-20 font-semibold px-2 transition-opacity duration-300 invisible group-hover:visible"
    >
      {{ props.description }}
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>

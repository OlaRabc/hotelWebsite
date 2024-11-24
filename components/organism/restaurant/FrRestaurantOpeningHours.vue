<template>
  <div class="w-full md:mb-12 flex flex-col justify-between">
    <h2 class="font-semibold text-5xl mb-8">Restauracja</h2>
    <FrBox class="md:mb-0 py-12">
      <h2 class="font-bold text-2xl mb-6">Godziny otwarcia:</h2>

      <div class="mb-6">
        <span class="font-semibold">Śniadania:</span> 7:00-10:30
      </div>

      <div class="mb-6">
        <span class="font-semibold">Obiady:</span> 11:00-15:30
      </div>

      <div class="mb-6">
        <span class="font-semibold">Kolacje:</span> 16:00-20:00
      </div>
      <div>
        Możliwe rezerwacje pod numerem:
        <a
          href="tel:+48876437098"
          class="underline hover:no-underline"
          @click="gtagEvent('event', 'restaurant', 'button', 'phone_contact')"
        >
          +48 876 437 098
        </a>
      </div>
    </FrBox>
  </div>
</template>

<script lang="ts" setup>
import { gtagEvent } from "@/assets/js/main";
</script>

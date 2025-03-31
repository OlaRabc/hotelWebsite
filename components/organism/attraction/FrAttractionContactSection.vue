<template>
  <p class="text-xl text-center mb-24 text-gold-700 font-semibold">
    Masz pytania już teraz? Zadzwoń:
    <a href="tel:+48652346981" class="font-bold underline hover:no-underline" @click="gtagEvent('event', 'attractions', 'link', 'attractions_contact')">
      +48 652 346 981
    </a>
  </p>
</template>

<script setup lang="ts">
import { gtagEvent } from "@/assets/js/main";
</script>

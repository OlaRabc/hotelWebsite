<template>
  <div
    class="border bg-white lg:rounded-xl lg:w-1/2 max-lg:-mx-8 mb-8 lg:mb-0 h-[400px] lg:h-auto shadow-md"
    @click="gtagEvent('event', 'contact', 'button', 'location_map')"
  >
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7905.0064157277!2d14.37818064011855!3d53.91091109032235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47aa58cdcdae3301%3A0x1fe03a970a6e4dc8!2zxZp3aW5vdWrFm2NpZQ!5e0!3m2!1spl!2spl!4v1721043307924!5m2!1spl!2spl"
      class="w-full h-full lg:rounded-xl"
      style="border: 0"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</template>

<script setup lang="ts">
import { gtagEvent } from "@/assets/js/main";
</script>

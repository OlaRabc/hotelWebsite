<template>
  <div>
    <h2 class="font-semibold text-5xl text-center mb-16">
      Nawiąż z nami kontakt
    </h2>
    <div class="flex justify-around max-lg:flex-col gap-8 mb-12">
      <FrBox class="mb-12">
        <h3 class="font-semibold text-2xl md:text-4xl mb-4">Fun&Relax Hotel</h3>
        <p @click="gtagEvent('event', 'click', 'button', 'location')">
          ul. Jesienna 23 00-002, Kryspianowo PL
        </p>
      </FrBox>

      <FrBox class="mb-12">
        <h3 class="font-semibold text-2xl md:text-4xl mb-4">Telefon</h3>
        <p
          class="mb-4"
          @click="gtagEvent('event', 'contact', 'button', 'reception_number')"
        >
          Recepcja +48 652 346 981
        </p>
        <p
          @click="gtagEvent('event', 'contact', 'button', 'restaurant_number')"
        >
          Restauracja +48 652 567 982
        </p>
      </FrBox>

      <FrBox class="mb-12">
        <h3 class="font-semibold text-2xl md:text-4xl mb-4">Email&Fax</h3>
        <p
          class="mb-4"
          @click="gtagEvent('event', 'contact', 'button', 'email_contact')"
        >
          fandr@gmail.com
        </p>
        <p @click="gtagEvent('event', 'contact', 'button', 'fax_contact')">
          fax. +48 652 763 762
        </p>
      </FrBox>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { gtagEvent } from "@/assets/js/main";
</script>

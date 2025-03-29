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
          Recepcja
          <a
            href="tel:+48652346981"
            class="font-bold underline hover:no-underline"
          >
            +48 652 346 981
          </a>
        </p>
        <p
          @click="gtagEvent('event', 'contact', 'button', 'restaurant_number')"
        >
          Restauracja
          <a
            href="tel:+48652346981"
            class="font-bold underline hover:no-underline"
          >
            +48 652 567 982
          </a>
        </p>
      </FrBox>

      <FrBox class="mb-12">
        <h3 class="font-semibold text-2xl md:text-4xl mb-6">Email</h3>
        <p
          class=""
          @click="gtagEvent('event', 'contact', 'button', 'email_contact')"
        >
          <a href="mailto:fandr@gmail.com">fandr@gmail.com</a>
        </p>
      </FrBox>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { gtagEvent } from "@/assets/js/main";
</script>

<template>
  <main>
    <FrBanner img="contact/contact.jpeg">KONTAKT</FrBanner>

    <h2 class="font-semibold text-5xl text-center my-12 mb-16">
      Nawiąż z nami kontakt
    </h2>

    <div class="flex justify-around max-lg:flex-col max-lg:gap-8 max-lg:mx-8">
      <div class="py-4 px-12 border rounded-xl bg-white">
        <h3 class="font-semibold text-5xl">Fun&Relax Hotel</h3>
        <p
          class="mt-4"
          @click="gtagEvent('event', 'click', 'button', 'location')"
        >
          ul. Jesienna 23 00-002, Kryspianowo PL
        </p>
      </div>

      <div class="py-4 px-12 border rounded-xl bg-white">
        <h3 class="font-semibold text-5xl">Telefon</h3>
        <p
          class="mt-4"
          @click="gtagEvent('event', 'page_view', 'button', 'reception_number')"
        >
          Recepcja +48 652 346 981
        </p>
        <p
          class="mt-4"
          @click="gtagEvent('event', 'click', 'button', 'restaurant_number')"
        >
          Restauracja +48 652 567 982
        </p>
      </div>

      <div class="py-4 px-12 border rounded-xl bg-white">
        <h3 class="font-semibold text-5xl">Email&Fax</h3>
        <p class="mt-4" @click="gtagEvent('event', 'click', 'button', 'email_contact')">
          fandr@gmail.com
        </p>
        <p class="mt-4" @click="gtagEvent('event', 'click', 'button', 'fax_contact')">
          fax. +48 652 763 762
        </p>
      </div>
    </div>

    <div class="flex justify-between my-16 gap-8 mx-16 max-lg:flex-col">
      <div class="p-6 px-12 border rounded-xl bg-white w-full">
        <h3 class="font-semibold text-5xl mb-8">Napisz do nas</h3>

        <form @submit.prevent="handleSubmit">
          <div class="flex justify-between flex-wrap">
            <input
              class="border rounded px-4 py-2 mb-4"
              type="email"
              placeholder="Podaj maila"
              value=""
            />
            <input
              class="border rounded px-4 py-2 mb-4"
              type="text"
              placeholder="Podaj imię"
              value=""
            />
            <input
              class="border rounded px-4 py-2 mb-4"
              type="text"
              placeholder="Podaj telefon"
              value=""
            />
          </div>

          <textarea
            class="border rounded w-full mb-4"
            id="w3review"
            name="w3review"
            rows="4"
            cols="50"
          ></textarea>

          <button class="bg-[#C4B976] p-2 rounded font-bold text-white text-xl">
            Wyślij
          </button>
        </form>
      </div>

      <div
        class="border bg-white lg:rounded-xl lg:w-[100%] max-lg:-mx-16"
        @click="gtagEvent('event', 'click', 'button', 'location_map')"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7905.0064157277!2d14.37818064011855!3d53.91091109032235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47aa58cdcdae3301%3A0x1fe03a970a6e4dc8!2zxZp3aW5vdWrFm2NpZQ!5e0!3m2!1spl!2spl!4v1721043307924!5m2!1spl!2spl"
          class="w-full h-full lg:rounded-xl"
          style="border: 0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { gtagEvent } from "@/assets/js/main";

const handleSubmit = () => {
  gtagEvent("event", "contact_form_submit", "form", "contact_form");
};
</script>

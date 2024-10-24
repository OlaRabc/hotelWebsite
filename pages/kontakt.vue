<template>
  <main>
    <FrBanner img="contact/contact.jpeg">KONTAKT</FrBanner>

    <FrContainer>
      <h2 class="font-semibold text-5xl text-center mb-16">
        Nawiąż z nami kontakt
      </h2>

      <div class="flex justify-around max-lg:flex-col gap-8 mb-12">
        <FrBox class="mb-12">
          <h3 class="font-semibold text-2xl md:text-4xl mb-4">
            Fun&Relax Hotel
          </h3>
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
            @click="
              gtagEvent('event', 'contact', 'button', 'restaurant_number')
            "
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

      <div class="flex justify-between mb-16 gap-8 max-lg:flex-col">
        <FrBox class="w-full mb-24 lg:mb-0">
          <h3 class="font-semibold text-5xl mb-12">Napisz do nas</h3>

          <form @submit.prevent="handleSubmit">
            <div class="flex justify-between flex-wrap">
              <input
                id="mail"
                class="border rounded px-4 py-2 mb-8 w-full"
                type="email"
                placeholder="Podaj maila"
                value=""
              />
              <input
                id="name"
                class="border rounded px-4 py-2 mb-8 w-full sm:w-2/5"
                type="text"
                placeholder="Podaj imię"
                value=""
              />
              <input
                id="phone"
                class="border rounded px-4 py-2 mb-8 w-full sm:w-2/5"
                type="text"
                placeholder="Podaj telefon"
                value=""
              />
            </div>

            <textarea
              id="description"
              class="border rounded w-full mb-8"
              name="description"
              rows="4"
              cols="50"
            ></textarea>

            <FrButton> Wyślij </FrButton>
          </form>
        </FrBox>

        <div
          class="border bg-white lg:rounded-xl lg:w-[100%] max-lg:-mx-16 mb-8 lg:mb-0 h-[400px] lg:h-auto shadow-md"
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
      </div>
    </FrContainer>
  </main>
</template>

<script lang="ts" setup>
import { gtagEvent } from "@/assets/js/main";

const handleSubmit = () => {
  gtagEvent("event", "form", "form_submit", "contact_form_submit");
};
</script>

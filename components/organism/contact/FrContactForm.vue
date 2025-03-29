<template>
  <FrBox class="w-full mb-24 lg:mb-0">
    <h3 class="font-semibold text-5xl mb-12">Napisz do nas</h3>

    <form @submit.prevent="handleSubmit">
      <div class="flex justify-between flex-wrap">
        <input
          type="email"
          v-model="form.email"
          placeholder="Podaj maila"
          required
          class="border rounded px-4 py-2 mb-8 w-full"
        />
        <input
          class="border rounded px-4 py-2 mb-8 w-full sm:w-2/5"
          type="text"
          v-model="form.name"
          placeholder="Podaj imię"
          required
        />
        <input
          class="border rounded px-4 py-2 mb-8 w-full sm:w-2/5"
          type="tel"
          v-model="form.phone"
          placeholder="Podaj telefon"
        />
      </div>

      <textarea
        class="border rounded w-full mb-8 p-4"
        v-model="form.message"
        placeholder="Twoja wiadomość"
        required
      ></textarea>

      <FrButton class="mb-4" type="submit"> Wyślij </FrButton>
      <p
        v-if="responseMessage === 'SENTED'"
        class="text-center text-xl text-green-700 font-bold"
      >
        Wiadomość wysłana.
      </p>
      
    </form>
  </FrBox>
</template>

<script setup lang="ts">
import { gtagEvent } from "@/assets/js/main";

const config = useRuntimeConfig();
const apiUrl = config.public.apiBaseUrl;

const responseMessage = ref("");
const form = ref({
  email: "",
  name: "",
  phone: "",
  message: "",
});

const handleSubmit = () => {
  console.log('sd')
  gtagEvent("event", "form", "form_submit", "contact_form_submit");

  responseMessage.value = "SENTED";
  form.value = { email: "", name: "", phone: "", message: "" };
};
</script>

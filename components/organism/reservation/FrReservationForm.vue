<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="name" class="block mb-1 font-bold">Imię i nazwisko*</label>
      <input
        v-model="formData.name"
        type="text"
        id="name"
        required
        class="border rounded px-4 py-2 mb-8 w-full"
      />
    </div>

    <div>
      <label for="email" class="block mb-1 font-bold">Adres email*</label>
      <input
        v-model="formData.email"
        type="email"
        id="email"
        required
        class="border rounded px-4 py-2 mb-8 w-full"
      />
    </div>

    <div class="mb-12">
      <label>
        <input v-model="formData.vatInvoice" type="checkbox" />
        Chcę otrzymać fakturę VAT
      </label>
      <p class="font-light">
        Niezaznaczenie tej opcji uniemożliwi nam wystawienie Faktury VAT do
        wpłat dokonanych przed przyjazdem.
      </p>
    </div>

    <div class="mb-12">
      <label>
        <input v-model="formData.reservationNotes" type="checkbox" />
        Mam uwagi do rezerwacji (np. godzina przyjazdu, życzenia)
      </label>

      <textarea
        v-if="formData.reservationNotes"
        v-model="formData.reservationDetails"
        placeholder="Wpisz swoje uwagi do rezerwacji"
        class="border rounded w-full mb-8 p-4"
      ></textarea>
    </div>

    <div class="mb-12">
      <label class="block mb-12 font-bold">Wybierz formę płatności*</label>

      <div class="flex justify-around">
        <label
          v-for="item in paymentMethodList"
          :key="item.name"
          class="form-checkbox block relative w-52 h-24 border overflow-hidden rounded-2xl shadow-[0_2px_5px_0px_rgba(0,0,0,0.40)] cursor-pointer hover:border-gold-700 hover:shadow-[0_2px_15px_0px_rgba(137,129,82,0.50)] focus-within:border-gold-700 focus-within:shadow-[0_2px_15px_0px_rgba(137,129,82,0.50)] has-[:checked]:border-gold-600 has-[:checked]:border-2 has-[:checked]:shadow-none"
        >
          <img
            :src="`/images/payments/${item.img}`"
            :alt="item.name"
            width="200"
            height="130"
            :class="[
              { 'bg-[#030303]': item.name === 'blik' },
              'object-contain object-center w-52 h-24',
            ]"
          />
          <input
            class="absolute top-0 left-0 opacity-0"
            type="radio"
            v-model="formData.paymentMethod"
            :value="item.value"
            required
          />
        </label>
      </div>
    </div>

    <div class="mb-12">
      <label>
        <input v-model="formData.acceptTerms" type="checkbox" required />
        Oświadczam, że przeczytałam/em i akceptuję warunki: regulamin
        rezerwacji, warunki anulacji. Oświadczam, że zapoznałem się z
        regulaminem i obowiązkiem informacyjnym serwisu płatnosciowego.
      </label>
    </div>

    <div class="mb-12">
      <label>
        <input v-model="formData.agreePromotions" type="checkbox" />
        Wyrażam zgodę na otrzymywanie informacji o aktualnych wydarzeniach i
        promocjach.
      </label>
    </div>
    <div class="flex justify-between">
      <FrButton @on-click="onBack"> Wróć</FrButton>
      <FrButton type="submit">Rezerwuj</FrButton>
    </div>
  </form>
</template>

<script setup lang="ts">
import { reactive } from "vue";

interface FormData {
  name: string;
  email: string;
  vatInvoice: boolean;
  reservationNotes: boolean;
  reservationDetails: string;
  guestInfoDifferent: boolean;
  acceptTerms: boolean;
  agreePromotions: boolean;
  paymentMethod: string;
}

const formData = reactive<FormData>({
  name: "",
  email: "",
  vatInvoice: false,
  reservationNotes: false,
  reservationDetails: "",
  guestInfoDifferent: false,
  acceptTerms: false,
  agreePromotions: false,
  paymentMethod: "",
});
const paymentMethodList = [
  {
    img: "przelewy24.webp",
    name: "Karta płatnicza",
    value: "traditional",
  },
  {
    img: "visa.jpg",
    name: "googlePay",
    value: "googlePay",
  },
  {
    img: "blik_logo.jpg",
    name: "blik",
    value: "blik",
  },
];
const submitForm = () => {
  console.log("Form data:", formData);
};

const emit = defineEmits(["onBack"]);
const onBack = () => {
  emit("onBack");
};
</script>

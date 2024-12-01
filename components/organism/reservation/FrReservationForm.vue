<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="name" class="block mb-1 font-bold">Imię i nazwisko*</label>
      <input
        v-model="formData.name"
        type="text"
        id="name"
        required
        :class="[
          { 'border-red-500': errors.name },
          'border rounded px-4 py-2 mb-8 w-full',
        ]"
        @click="errors.name = false"
      />
    </div>

    <div>
      <label for="email" class="block mb-1 font-bold">Adres email*</label>
      <input
        v-model="formData.email"
        type="email"
        id="email"
        required
        class=""
        :class="[
          { 'border-red-500': errors.mail },
          'border rounded px-4 py-2 mb-8 w-full',
        ]"
        @click="errors.mail = false"
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
      <label
        :class="[{ 'text-red-500': errors.payment }, 'block mb-12 font-bold']"
      >
        Wybierz formę płatności*
      </label>

      <div
        class="flex flex-col md:flex-row gap-8 items-center md:justify-around"
      >
        <label
          v-for="item in paymentMethodList"
          :key="item.name"
          tabindex="0"
          class="form-checkbox block relative w-52 h-24 border overflow-hidden rounded-2xl shadow-[0_2px_5px_0px_rgba(0,0,0,0.40)] cursor-pointer hover:border-gold-700 hover:shadow-[0_2px_15px_0px_rgba(137,129,82,0.50)] focus-within:border-gold-700 focus-within:shadow-[0_2px_15px_0px_rgba(137,129,82,0.50)] has-[:checked]:border-gold-600 has-[:checked]:border-2 has-[:checked]:shadow-none"
          @click="errors.payment = false"
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
            tabindex="-1"
            v-model="formData.paymentMethod"
            :value="item.value"
            required
          />
        </label>
      </div>
    </div>

    <div class="mb-12">
      <label :class="[{ 'text-red-500': errors.regulations }]">
        <input
          v-model="formData.acceptTerms"
          type="checkbox"
          required
          @click="errors.regulations = false"
        />
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
    <div>
      <div v-if="errors.name" class="ml-4 mb-4 text-xl text-red-500">
        Pole <span class="font-bold italic">Imię i nazwisko</span> nie może być
        puste.
      </div>
      <div v-if="errors.mail" class="ml-4 mb-4 text-xl text-red-500">
        Pole <span class="font-bold italic">Adres email</span> nie może być
        puste.
      </div>
      <div v-if="errors.payment" class="ml-4 mb-4 text-xl text-red-500">
        Musisz wybrać sposób płatności
      </div>
      <div v-if="errors.regulations" class="ml-4 mb-4 text-xl text-red-500">
        Musisz zaakceptować warunki świiadczenia usługi
      </div>
    </div>
    <div class="flex justify-between">
      <FrButton @on-click="onBack"> Wróć</FrButton>
      <FrButton type="submit" @click.prevent="handleSubmit">Rezerwuj</FrButton>
    </div>
  </form>
</template>

<script setup lang="ts">
import type ServiceFieldsEnum from "~/enums/ServiceFieldsEnum";
import type shortRoomEnum from "~/enums/shortRoomEnum";

const config = useRuntimeConfig();
const apiUrl = config.public.apiBaseUrl;
const route = useRoute();

interface Room {
  id: number;
  roomCount: number;
}

interface SubmitData {
  name: string;
  email: string;
  arrivalDate: any;
  departureDate: any;
  vatInvoice: boolean;
  reservationDetails: string;
  agreePromotions: boolean;
  paymentMethod: string;
  serviceList: string[];
  roomList: Room[];
}

interface FormData {
  name: string;
  email: string;
  vatInvoice: boolean;
  reservationNotes: boolean;
  reservationDetails: string;
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
  acceptTerms: false,
  agreePromotions: false,
  paymentMethod: "",
});

const paymentMethodList = [
  {
    img: "przelewy24.webp",
    name: "Karta płatnicza",
    value: "TRADITIONAL",
  },
  {
    img: "visa.jpg",
    name: "googlePay",
    value: "GOOGLE_PAY",
  },
  {
    img: "blik_logo.jpg",
    name: "blik",
    value: "BLIK",
  },
];

const emit = defineEmits(["onBack"]);
const onBack = () => {
  emit("onBack");
};

const props = defineProps({
  reservationList: { type: Array as () => shortRoomEnum[], required: true },
  services: { type: Array as () => ServiceFieldsEnum[], required: true },
});

const errors = ref({
  mail: false,
  name: false,
  payment: false,
  regulations: false,
});

const handleSubmit = () => {
  resetErrors();

  if (!isDataValid()) return;

  const data = prepareDataToSend();

  submitForm(data);

  goToPayments();
};

const resetErrors = () => {
  errors.value.mail = false;
  errors.value.name = false;
  errors.value.payment = false;
  errors.value.regulations = false;
};

const isDataValid = () => {
  let isValid: Boolean = true;
  if (!formData.name) {
    errors.value.name = true;
    isValid = false;
  }
  if (!formData.email) {
    errors.value.mail = true;
    isValid = false;
  }
  if (!formData.paymentMethod) {
    errors.value.payment = true;
    isValid = false;
  }
  if (!formData.acceptTerms) {
    errors.value.regulations = true;
    isValid = false;
  }
  return isValid;
};

const submitForm = async (data: SubmitData) => {
  // try {
  //   await $fetch(apiUrl + "/make-reservation", {
  //     method: "POST",
  //     body: data,
  //   });
  // } catch (error) {
  //   console.error(error);
  // }
};

const prepareDataToSend = () => {
  const data: SubmitData = {
    name: formData.name,
    email: formData.email,
    arrivalDate: route.params.arrivalDate,
    departureDate: route.params.departureDate,
    vatInvoice: formData.vatInvoice,
    reservationDetails: formData.reservationDetails,
    agreePromotions: formData.agreePromotions,
    paymentMethod: formData.paymentMethod,
    serviceList: setServiceList(),
    roomList: setRoomList(),
  };
  return data;
};

const setServiceList = () => {
  const newArray = props.services.map((el) => {
    return el.tag;
  });
  return newArray;
};
const setRoomList = () => {
  return props.reservationList.map((el) => {
    return {
      id: el.id,
      roomCount: el.numberOfRooms,
    };
  });
};

const goToPayments = () => {
  window.location.href = "https://forms.gle/vy5axhmSEDGQpS2XA";
};
</script>

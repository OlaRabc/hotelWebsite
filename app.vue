<template>
    <FrNav />
    <NuxtPage />
    <FrFooter />

    <FrModal :isOpen="isModalOpen" :closeBtn="false">
      <h2 class="font-bold text-center text-xl mb-8">
        Niniejsza strona jest wykorzystywana do badania zachowania użytkowników
        w ramach pracy magisterskiej.
      </h2>
      <p class="mb-4">
        W ramach badania aplikacja zapisuje dane na temat elementów, w jakie
        klikają użytkownicy.
      </p>
      <p class="mb-12">
        Jeśli nie chcesz brać udziału w tym badaniu, prosimy o opuszczenie
        strony. Twoja prywatność jest dla nas ważna, a Twoja decyzja o udziale
        jest całkowicie dobrowolna. Dziękujemy za zrozumienie!
      </p>
      <div class="flex justify-around flex-wrap">
        <button
          class="bg-red-500 p-2 rounded font-bold text-white text-xl mb-4"
          @click="goToGoogle"
        >
          Wyjdź
        </button>
        <button
          class="bg-green-500 p-2 rounded font-bold text-white text-xl mb-4"
          @click="setCookie"
        >
          Zgoda
        </button>
      </div>
    </FrModal>
</template>

<script setup lang="ts">
import { v4 as uuidv4 } from "uuid";
import { gtagSetUid } from "@/assets/js/main";
import { useBodyOverflow } from "~/stores/bodyOverflow.js";

const bodyOverflow = useBodyOverflow();

watch(
  () => bodyOverflow.isOverflowHidden,
  (newValue) => {
    document.body.style.overflow = newValue ? "hidden" : "auto";
  }
);
const setCookie = () => {
  const uId = uuidv4();
  const uIdCookie = useCookie("uId");
  uIdCookie.value = uId;

  isModalOpen.value = false;
  gtagSetUid(uId);
};

const isModalOpen = ref(false);

onMounted(() => {
  const cookie = useCookie("uId").value;
  isModalOpen.value = !cookie;

  if (cookie) {
    gtagSetUid(cookie);
  }
});

const goToGoogle = () => {
  window.location.href = "https://www.google.com";
};
</script>
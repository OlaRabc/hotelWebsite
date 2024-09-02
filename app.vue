<template>
  <div>
    <FrNav />
    <NuxtPage />
    <FrFooter />

    <FrModal :isOpen="isModalOpen">
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
      <div class="flex justify-around">
        <button
          class="bg-red-500 p-2 rounded font-bold text-white text-xl mb-4"
          @click="router.back"
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
  </div>
</template>

<script setup lang="ts">
import { v4 as uuidv4 } from "uuid";

const setCookie = () => {
  console.log(uuidv4())
  const uIdCookie = useCookie("uId");
  uIdCookie.value = uuidv4();
  isModalOpen.value = !uuidv4;
};

const router = useRouter();

const isModalOpen = ref(!useCookie("uId").value);

</script>

<style scoped>
body {
  background-color: rgb(244, 243, 238);
}
</style>

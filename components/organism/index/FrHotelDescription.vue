<template>
  <FrBox class="max-w-4xl mx-8 md:mx-auto mb-32 !px-12 !py-16">
    <h2 class="font-bold text-2xl text-center mb-10">
      {{ title }}
    </h2>
    <div class="leading-relaxed">
      <p v-for="item in content" class="mb-6">{{ item }}</p>
      <p class="mb-6"></p>
      <p v-html="footer"></p>
    </div>
  </FrBox>
</template>

<script setup lang="ts">
const title = "Witaj w Hotelu Fun&Relax nad Morzem Bałtyckim w Świnoujściu!";

const content = [
  "Zanurz się w wyjątkowym świecie luksusu i relaksu, gdzie wypoczynek staje się prawdziwą przyjemnością. Nasz hotel to idealne miejsce na wyjątkowe wakacje nad polskim morzem, oferujący bogaty wachlarz udogodnień, które spełnią oczekiwania nawet najbardziej wymagających",
  "Nie zwlekaj i zarezerwuj już teraz pobyt w Hotelu Fun&Relax. Oferujemy nie tylko wyjątkowe warunki pobytu, ale także niezapomniane doznania, które sprawią, że Twój urlop stanie się wyjątkowym przeżyciem. Zapraszamy do odkrywania naszych usług i zapewniamy, że nasz profesjonalny personel zrobi wszystko, by spełnić Twoje oczekiwania.",
];

const footer =
  "Życzymy miłego pobytu w Hotelu Fun&Relax w Świnoujściu -<span class='italic font-light text-lg'> Twoim azylu spokoju nad morzem!</span>";
</script>

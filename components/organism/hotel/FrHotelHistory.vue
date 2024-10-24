<template>
  <div class="lg:mr-8 w-full flex flex-col justify-between max-h-[400px] mb-24">
    <h2 class="font-semibold text-5xl mb-8">Historia</h2>
    <FrBox class="p-12 overflow-y-hidden text-lg cursor-pointer" @click="openModal">
      Hotel Fun&Relax ma swoje korzenie w pięknej, nadmorskiej miejscowości
      Świnoujście, gdzie od lat przyciąga turystów wyjątkową atmosferą i
      niezapomnianymi widokami. Historia naszego hotelu sięga początku XX wieku,
      kiedy to na miejscu dzisiejszego luksusowego kompleksu stał skromny
      pensjonat, prowadzony przez rodzinę Kozłowskich. Ich mały, przytulny dom
      gościnny szybko zyskał popularność wśród letników szukających spokoju i
      bliskości natury.
    </FrBox>

    <FrModal
      :isOpen="isHistoryOpen"
      @onClose="isHistoryOpen = false"
    >
      <p v-for="item in historySections" class="mb-8 last:mb-4 text-lg">{{ item }}</p>
    </FrModal>
  </div>
</template>

<script setup lang="ts">
import { gtagEvent } from "@/assets/js/main";
const isHistoryOpen = ref(false);

const openModal = () => {
  isHistoryOpen.value = true;
  gtagEvent(
    "event",
    "expanding_information",
    "button",
    "modal_hotel_description_opened"
  );
};

const historySections = [
  " Hotel Fun&Relax ma swoje korzenie w pięknej, nadmorskiej miejscowości Świnoujście, gdzie od lat przyciąga turystów wyjątkową atmosferą i niezapomnianymi widokami. Historia naszego hotelu sięga początku XX wieku, kiedy to na miejscu dzisiejszego luksusowego kompleksu stał skromny pensjonat, prowadzony przez rodzinę Kozłowskich. Ich mały, przytulny dom gościnny szybko zyskał popularność wśród letników szukających spokoju i bliskości natury.",
  "W latach 60. XX wieku, kiedy Świnoujście zaczęło się rozwijać jako popularna destynacja turystyczna, pensjonat przeszedł pierwszą dużą modernizację. Rozbudowano go o nowe pokoje i udogodnienia, a także otwarto małą restaurację serwującą lokalne specjały. To właśnie wtedy pojawiła się nazwa Fun&Relax, oddająca filozofię łączenia aktywnego wypoczynku z relaksem i spokojem.",
  "Przełomowym momentem w historii hotelu był rok 2000, kiedy to rodzina Kozłowskich, chcąc sprostać rosnącym wymaganiom gości, podjęła decyzję o gruntownej przebudowie obiektu. Projekt architektoniczny nowego hotelu połączył nowoczesność z tradycją, tworząc przestrzenie, które są jednocześnie eleganckie i przytulne. W 2005 roku hotel został otwarty na nowo, oferując gościom luksusowe pokoje, nowoczesne spa oraz restaurację z widokiem na morze.",
  "Dziś Hotel Fun&Relax jest jednym z najważniejszych punktów na mapie turystycznej Świnoujścia. Od ponad wieku gościmy turystów z Polski i zagranicy, zapewniając im nie tylko komfortowy pobyt, ale także niezapomniane wspomnienia. Nasze zaangażowanie w ciągłe doskonalenie usług oraz dbałość o każdy detal sprawiają, że każdy gość czuje się u nas wyjątkowo.",
  "Zapraszamy do odkrycia historii Hotelu Fun&Relax na własne oczy i dołączenia do grona naszych zadowolonych gości, którzy rokrocznie wracają, by cieszyć się magią Bałtyku i gościnnością Świnoujścia.",
];
</script>

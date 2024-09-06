<template>
  <main>
    <FrBanner img="hotel/hotel.jpeg" class="mb-12">HOTEL</FrBanner>
    <div class="mx-8">
      <div class="flex justify-around gap-8 max-lg:flex-col">
        <div class="lg:mr-8 w-full flex flex-col justify-between max-h-[400px]">
          <h3 class="font-semibold text-5xl mb-8">Historia</h3>
          <div
            class="border shadow rounded-xl p-12 pt-12 bg-white overflow-y-hidden text-lg"
            @click="openModal"
          >
            Hotel Fun&Relax ma swoje korzenie w pięknej, nadmorskiej
            miejscowości Świnoujście, gdzie od lat przyciąga turystów wyjątkową
            atmosferą i niezapomnianymi widokami. Historia naszego hotelu sięga
            początku XX wieku, kiedy to na miejscu dzisiejszego luksusowego
            kompleksu stał skromny pensjonat, prowadzony przez rodzinę
            Kozłowskich. Ich mały, przytulny dom gościnny szybko zyskał
            popularność wśród letników szukających spokoju i bliskości natury.
          </div>
        </div>

        <div
          class="border rounded-xl bg-white p-4 w-full flex flex-col justify-around"
        >
          <h2 class="font-semibold text-2xl ml-4">Galeria:</h2>

          <div class="max-h-[300px] overflow-y-scroll">
            <div v-for="item in gallery" class="m-2 my-12 last:mb-0">
              <img
                :src="`/images/gallery/${item?.img}`"
                class="w-full object-cover max-h-[280px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="border rounded-xl bg-white py-8 px-8 my-12">
        <h3 class="font-semibold text-3xl mb-4">Pokoje:</h3>

        <div class="flex gap-4 justify-around flex-wrap">
          <div v-for="item in rooms" class="max-w-[250px] flex-auto mb-4">
            <img
              :src="`/images/rooms/${item.img}`"
              class="w-full max-h-[150px] object-cover rounded"
            />
            <h2 class="text-center">{{ item?.description }}</h2>
          </div>
        </div>
      </div>

      <FrModal :isOpen="isHistoryOpen" @onClose="isHistoryOpen = false">
        <p class="mb-4">
          Hotel Fun&Relax ma swoje korzenie w pięknej, nadmorskiej miejscowości
          Świnoujście, gdzie od lat przyciąga turystów wyjątkową atmosferą i
          niezapomnianymi widokami. Historia naszego hotelu sięga początku XX
          wieku, kiedy to na miejscu dzisiejszego luksusowego kompleksu stał
          skromny pensjonat, prowadzony przez rodzinę Kozłowskich. Ich mały,
          przytulny dom gościnny szybko zyskał popularność wśród letników
          szukających spokoju i bliskości natury.
        </p>
        <p class="mb-4">
          W latach 60. XX wieku, kiedy Świnoujście zaczęło się rozwijać jako
          popularna destynacja turystyczna, pensjonat przeszedł pierwszą dużą
          modernizację. Rozbudowano go o nowe pokoje i udogodnienia, a także
          otwarto małą restaurację serwującą lokalne specjały. To właśnie wtedy
          pojawiła się nazwa Fun&Relax, oddająca filozofię łączenia aktywnego
          wypoczynku z relaksem i spokojem.
        </p>
        <p class="mb-4">
          Przełomowym momentem w historii hotelu był rok 2000, kiedy to rodzina
          Kozłowskich, chcąc sprostać rosnącym wymaganiom gości, podjęła decyzję
          o gruntownej przebudowie obiektu. Projekt architektoniczny nowego
          hotelu połączył nowoczesność z tradycją, tworząc przestrzenie, które
          są jednocześnie eleganckie i przytulne. W 2005 roku hotel został
          otwarty na nowo, oferując gościom luksusowe pokoje, nowoczesne spa
          oraz restaurację z widokiem na morze.
        </p>
        <p class="mb-4">
          Dziś Hotel Fun&Relax jest jednym z najważniejszych punktów na mapie
          turystycznej Świnoujścia. Od ponad wieku gościmy turystów z Polski i
          zagranicy, zapewniając im nie tylko komfortowy pobyt, ale także
          niezapomniane wspomnienia. Nasze zaangażowanie w ciągłe doskonalenie
          usług oraz dbałość o każdy detal sprawiają, że każdy gość czuje się u
          nas wyjątkowo.
        </p>
        <p class="mb-4">
          Zapraszamy do odkrycia historii Hotelu Fun&Relax na własne oczy i
          dołączenia do grona naszych zadowolonych gości, którzy rokrocznie
          wracają, by cieszyć się magią Bałtyku i gościnnością Świnoujścia.
        </p>
      </FrModal>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { gtagEvent } from "@/assets/js/main";

const openModal = () => {
  isHistoryOpen.value = true;
  gtagEvent(
    "event",
    "expanding_information",
    "button",
    "modal_hotel_description_opened"
  );
};

const isHistoryOpen = ref(false);

const config = useRuntimeConfig()
const apiUrl = config.public.apiBaseUrl

const { data:rooms } = await useFetch(apiUrl+"/room-kind");
const { data: gallery } = await useFetch(apiUrl+"/gallery");
</script>

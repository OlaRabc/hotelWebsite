<template>
  <div class="sticky top-0 left-0 shadow-lg bg-white z-[200]">
    <nav class="relative w-full pt-4 flex justify-between">
      <div class="link w-20 h-full ml-4 mb-4">
        <NuxtLink to="/" @click="navigateTo" class="cursor-pointer">
          <img
            src="/public/images/logo.png"
            class="w-full h-full"
            alt="Przejście do strony głównej"
          />
        </NuxtLink>
      </div>

      <div class="hidden md:block">
        <ul class="flex justify-between text-lg font-bold mt-2">
          <NuxtLink
            v-for="item in pageList"
            :key="item.name"
            :to="item.src"
            class="relative px-4 my-4 text-center text-nowrap cursor-pointer hover:text-gold-600 before:content-[' '] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-[80%] before:h-[2px] before:rounded-full before:bg-gold-600 before:opacity-0 transition-colors delay-75 duration-150 hover:before:opacity-100 before:transition-opacity before:delay-75 before:duration-150"
            active-class="text-gold-600"
            @click="navigateTo"
          >
            <li>
              {{ item.name }}
            </li>
          </NuxtLink>
        </ul>
      </div>

      <button
        aria-label="Przycisk Otwietania Menu"
        class="block md:hidden text-4xl mr-8 -mt-2 hover:text-gold-700 focus-within:text-gold-700"
        @click="openNav"
      >
        <ClientOnly><font-awesome-icon icon="bars" /></ClientOnly>
      </button>
      <div
        class="absolute md:hidden top-0 flex flex-col h-screen w-full z-[100] bg-white transition-all delay-75 duration-300 overflow-y-auto"
        :class="isNavOpen ? ' right-0 md:-right-full' : '-right-full'"
      >
        <button
          aria-label="Przycisk Zamykania Menu"
          class="text-4xl self-end mr-8 mt-8 mb-6 p-1 hover:text-gold-700 focus-within:text-gold-700"
          @click="closeNav"
        >
          <ClientOnly>
            <font-awesome-icon icon="xmark" />
          </ClientOnly>
        </button>

        <ul class="w-full text-lg sm:text-2xl items-end mb-4 font-bold">
          <NuxtLink
            v-for="item in pageList"
            :to="item.src"
            class="px-4 sm:px-8 py-4 w-full text-center text-nowrap cursor-pointer hover:text-gold-600"
            active-class="text-gold-600"
            @click="navigateTo"
          >
            <li>
              {{ item.name }}
            </li>
          </NuxtLink>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script lang="ts" setup>
import { gtagEvent } from "@/assets/js/main";

const navigateTo = () => {
  closeNav();
  // gtagEvent("event", "page_view", "navigation", "Hotel description");
};

const pageList = [
  {
    name: "Hotel",
    src: "/hotel",
  },
  {
    name: "Kontakt",
    src: "/kontakt",
  },
  {
    name: "Strefa Relaksu",
    src: "/spa",
  },
  {
    name: "Atrakcje",
    src: "/atrakcje",
  },
  {
    name: "Restauracja",
    src: "/restauracja",
  },
  {
    name: "Rezerwuj",
    src: "/rezerwuj",
  },
];

const isNavOpen: boolean = ref(false);
const openNav = () => (isNavOpen.value = true);
const closeNav = () => (isNavOpen.value = false);
</script>

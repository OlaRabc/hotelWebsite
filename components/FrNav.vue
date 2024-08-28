<template>
  <div>
    <nav
      class="bg-white w-full pt-4 flex flex-col items-center sm:flex-row sm:justify-between"
    >
      <div class="link w-20 h-full ml-4 mb-4">
        <NuxtLink to="/">
          <img src="/public/images/logo.png" class="w-full h-full" />
        </NuxtLink>
      </div>

      <ul
        class="flex justify-around sm:justify-end flex-wrap w-full text-lg sm:text-xl items-end mb-2"
      >
        <li
          v-for="item in pageList"
          class="py-2 hover:text-[#C4B976] self-center"
        >
          <NuxtLink :to="item.scr" class="px-4 sm:px-8 text-center text-nowrap">
            {{ item.name }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts" setup>
const pageList = [
  {
    name: "Cennik",
    scr: "salary",
  },
  {
    name: "Restauracja",
    scr: "restaurant",
  },
  {
    name: "Strefa Relaksu",
    scr: "spa",
  },
  {
    name: "Atrakcje",
    scr: "attractions",
  },
  {
    name: "Kontakt",
    scr: "contact",
  },
  {
    name: "Hotel",
    scr: "hotel",
  },
];
</script>

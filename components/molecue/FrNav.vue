<template>
  <div>
    <nav
      class="bg-white w-full pt-4 flex flex-col items-center sm:flex-row sm:justify-between bg-[#C4B976]"
    >
      <div class="link w-20 h-full ml-4 mb-4">
        <NuxtLink @click="navigateTo(`/`)" class="cursor-pointer">
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
          <NuxtLink @click="navigateTo(item.scr)" class="px-4 sm:px-8 text-center text-nowrap cursor-pointer">
            {{ item.name }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts" setup>
import { gtagEvent } from "@/assets/js/main";
const router = useRouter();

const navigateTo = (to: string) => {
  router.push(to);
  // gtagEvent("event", "page_view", "navigation", "Hotel description");
};

const pageList = [
  {
    name: "Cennik",
    scr: "cennik",
  },
  {
    name: "Restauracja",
    scr: "restauracja",
  },
  {
    name: "Strefa Relaksu",
    scr: "spa",
  },
  {
    name: "Atrakcje",
    scr: "atrakcje",
  },
  {
    name: "Kontakt",
    scr: "kontakt",
  },
  {
    name: "Hotel",
    scr: "hotel",
  }
];
</script>

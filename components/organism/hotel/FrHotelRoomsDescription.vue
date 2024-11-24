<template>
  <FrBox class="px-8 mb-24">
    <h3 class="font-semibold text-3xl mb-12">Pokoje:</h3>

    <div class="flex gap-4 justify-around flex-wrap">
      <FrCardRoom
        v-for="item in rooms"
        :key="item.roomKindId"
        :data="item"
        class="md:max-w-[30%] flex-auto mb-4"
        @mouseover="gtagEvent('event', 'contact', 'button', `more_info_about_roomKindId_room`)"
      />
    </div>
  </FrBox>
</template>

<script setup lang="ts">
import { gtagEvent } from "@/assets/js/main";

const config = useRuntimeConfig();
const apiUrl = config.public.apiBaseUrl;

const { data: rooms } = await useFetch(apiUrl + "/room-kind");
</script>

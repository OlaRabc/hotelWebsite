<template>
    <h3 class="font-semibold text-3xl mb-12">Pokoje w naszej ofercie:</h3>

    <FrCardRoom
      v-for="item in rooms"
      :key="item.id"
      :room="item"
      class="flex-auto mb-16"
      @mouseover="
        gtagEvent(
          'event',
          'contact',
          'button',
          `more_info_about_roomKindId_room`
        )
      "
    />
</template>

<script setup lang="ts">
import { gtagEvent } from "@/assets/js/main";
import { rooms } from "~/assets/js/roomList.js";

const config = useRuntimeConfig();
const apiUrl = config.public.apiBaseUrl;
</script>

<template>
  <FrBox class="w-full flex flex-col justify-around mb-24">
    <h3 class="font-semibold text-2xl ml-4 mb-4">Galeria:</h3>

    <div v-if="error" class="text-center text-red-700 font-bold text-3xl">
      Wystapił błąd. Spróbuj ponownie później
    </div>
    <div v-else class="relative max-h-[300px]">
      <button
        class="text-3xl absolute top-1/2 left-2 text-white"
        @click="previousImg"
      >
        <ClientOnly>
          <font-awesome-icon
            icon="circle-chevron-left"
            class="rounded-full shadow-[0_0_5px_1px_rgba(0,0,0,0.5)]"
          />
        </ClientOnly>
      </button>

      <div>
        <img
          :src="`/images/gallery/${gallery[actualImg]?.img}`"
          class="w-full object-cover max-h-[280px] rounded-3xl shadow-[0_5px_10px_0px_rgba(0,0,0,0.3)]"
        />
      </div>

      <button
        class="text-3xl absolute top-1/2 right-2 text-white"
        @click="nextImg"
      >
        <ClientOnly>
          <font-awesome-icon
            icon="circle-chevron-right"
            class="rounded-full shadow-[0_0_5px_1px_rgba(0,0,0,0.5)]"
          />
        </ClientOnly>
      </button>
    </div>
  </FrBox>
</template>
<script setup lang="ts">
const config = useRuntimeConfig();
const apiUrl = config.public.apiBaseUrl;

const { data: gallery, error } = await useFetch(apiUrl + "/gallery");
const actualImg = ref(0);

const previousImg = () => {
  if (actualImg.value === 0) return;

  actualImg.value -= 1;
};
const nextImg = () => {
  if (actualImg.value === gallery.value.length - 1) return;

  actualImg.value += 1;
};
</script>

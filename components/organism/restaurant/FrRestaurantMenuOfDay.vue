<template>
  <FrBox class="w-full mb-12">
    <h3 class="font-bold text-2xl mb-8">Menu dnia (w każdą niedzielę)</h3>
    <div v-for="item in menuDay" class="flex justify-between m-2">
      <div class="my-4">
        {{ item.title }}
        <div class="text-sm">{{ item.subtitle }}</div>
      </div>
      <div class="my-auto">{{ item.prices }} zł</div>
    </div>
  </FrBox>
</template>

<script setup lang="ts">
const menuDay = [
  {
    title: "Rosół z kaczki",
    subtitle: "",
    prices: 15,
  },
  {
    title: "Sznycel z indyka ",
    subtitle: "z frytkami/ziemniakami i surówką z marchewki",
    prices: 30,
  },
  {
    title: "Szarlotka na ciepło",
    subtitle: "z sosem czekoladowym, lodami i bitą śmietaną",
    prices: 60,
  },
];
</script>

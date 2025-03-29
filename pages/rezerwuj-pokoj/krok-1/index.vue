<template>
  <main class="min-h-screen mx-12 mt-12">
    <FrSelectedRoom />

    <FrAdditionalServices/>
  </main>
</template>

<script lang="ts" setup>
useHead({
  title: "Fun And Relax Rezerwowanie Pokoju",
  meta: [
    {
      name: "description",
      content: "Zarezerwój pobyt w naszym hotelu",
    },
  ],
});
</script>

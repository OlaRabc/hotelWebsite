<template>
  <main>
    <FrBanner img="attractions/attraction.jpeg" alt="Baner Podstrony Atrakcje"
      >ATRAKCJE</FrBanner
    >
    <FrContainer>
      <FrAttractionList />

      <FrAttractionContactSection />
    </FrContainer>
  </main>
</template>
<script lang="ts" setup>
useHead({
  title: "Fun And Relax Atrakcje",
  meta: [
    {
      name: "description",
      content: "Zyskaj niezapomniane chwile i zniżki na atrakcje w Świnoujściu",
    },
  ],
});
</script>

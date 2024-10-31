<template>
  <main>
    <FrBanner img="spa/spa.jpeg">STREFA RELAKSU </FrBanner>

    <FrContainer>
      <FrSpaDescription />

      <FrSpaAttractions />
    </FrContainer>
  </main>
</template>

<script lang="ts" setup>
useHead({
  title: "Fun And Relax Strefa Relaksu",
  meta: [{ name: "description", content: "Nasi wykwalifikowani specjaliści od masażu i zabiegów zadbają o to, abyś opuszczając nasz hotel, czuł się o 20 lat młodszy." }],
});
</script>

<template>
  <main>
    <FrBanner img="contact/contact.jpeg">KONTAKT</FrBanner>

    <FrContainer>
      <FrContactData />

      <div class="flex justify-between mb-16 gap-8 max-lg:flex-col">
        <FrContactForm />
        <FrContactMap />
      </div>
    </FrContainer>
  </main>
</template>

<script lang="ts" setup>
useHead({
  title: "Fun And Relax Kontakt",
  meta: [
    {
      name: "description",
      content:
        "Napisz jeśli masz jakieś pytania związane z pobutem w hotelu Fun And Relax",
    },
  ],
});
</script>

<template>
  <main class="min-h-screen">
    <FrBanner img="salary/salatry.jpeg" alt="Baner Podstrony Cennik">
      CENNIK
    </FrBanner>

    <FrContainer>
      <FrReservationSection />
    </FrContainer>
  </main>
</template>

<script lang="ts" setup>
useHead({
  title: "Fun And Relax Rezerwacja",
  meta: [
    {
      name: "description",
      content:
        "Rezerwuj pobytu w hotelu Fun and Relax, gdzie komfort, styl i pełen relaks czekają na Ciebie w każdej chwili!",
    },
  ],
});
</script>

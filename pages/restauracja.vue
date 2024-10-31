<template>
  <main>
    <FrBanner img="restaurant/restaurant.jpeg"> RESTAURACJA </FrBanner>

    <FrContainer>
      <div class="flex justify-around max-lg:flex-col gap-8">
        <FrRestaurantOpeningHours />

        <FrRestaurantMenuOfDay />
      </div>

      <FrRestaurantOffer />
    </FrContainer>
  </main>
</template>

<script lang="ts" setup>
useHead({
  title: "Fun And Relax Restauracja",
  meta: [
    {
      name: "description",
      content:
        "Zapraszamy do wyjątkowej restauracji Fun and Relax, gdzie smak, atmosfera i relaks tworzą idealne połączenie! Zlokalizowana w naszym hotelu, nasza restauracja oferuje kulinarne doznania, które zadowolą nawet najbardziej wymagających gości. Przygotowujemy potrawy z najwyższej jakości składników, łącząc tradycyjne smaki z nowoczesnymi trendami kulinarnymi. ",
    },
  ],
});
</script>

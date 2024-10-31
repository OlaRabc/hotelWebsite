<template>
  <main>
    <FrBanner img="hotel/hotel.jpeg">HOTEL</FrBanner>

    <FrContainer>
      <div class="flex justify-around gap-8 max-lg:flex-col">
        <FrHotelHistory />

        <FrHotelGallery />
      </div>

      <FrHotelRoomsDescription />
    </FrContainer>
  </main>
</template>

<script lang="ts" setup>
useHead({
  title: "Fun And Relax O Hotel",
  meta: [
    {
      name: "description",
      content:
        "Hotel Fun&Relax ma swoje korzenie w pięknej, nadmorskiej miejscowości Świnoujście, gdzie od lat przyciąga turystów wyjątkową atmosferą i niezapomnianymi widokami. Historia naszego hotelu sięga początku XX wieku, kiedy to na miejscu dzisiejszego luksusowego kompleksu stał skromny pensjonat, prowadzony przez rodzinę Kozłowskich. Ich mały, przytulny dom gościnny szybko zyskał popularność wśród letników szukających spokoju i bliskości natury.",
    },
  ],
});
</script>

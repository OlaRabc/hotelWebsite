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

<script lang="ts" setup></script>

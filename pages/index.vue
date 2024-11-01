<template>
  <main class="min-h-screen">
    <div class="relative">
      <FrBanner img="home-page/home.jpeg" alt="Baner Podstrony Głównej" />
      <FrReservationOnMain
        class="hidden lg:inline-flex lg:absolute lg:right-12 lg:bottom-12"
      />
    </div>
    <FrHotelDescription />

    <FrLastReviews />
  </main>
</template>

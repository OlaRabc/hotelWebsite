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

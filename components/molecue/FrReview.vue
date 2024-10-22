<template>
  <FrBox class="w-full md:w-[30%] mb-24">
    <div class="flex justify-between flex-wrap">
      <h3 class="text-2xl font-bold">
        {{ data.userFullName }}
      </h3>
      <FrStarRate :rate="data.rating" />
    </div>

    <div class="font-light mb-4">
      {{ data.reviewDate }}
    </div>
    <p>
      {{ data.reviewText }}
    </p>
  </FrBox>
</template>

<script setup lang="ts">
import type Review from "~/enums/reviewEnum";

const props = defineProps({
  data: {
    type: Object as PropType<Review>,
    required: true,
  },
});
</script>

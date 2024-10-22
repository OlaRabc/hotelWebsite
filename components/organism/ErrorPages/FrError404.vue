<template>
  <FrError error="404">
    <div role="alert">
      <p class="font-bold text-xl mb-8">Ta strona nie istnieje!</p>

      <FrButton class="mb-32 font-bold text-xl" @click="router.push('/')">
        Strona główna
      </FrButton>
    </div>
  </FrError>
</template>

<script setup lang="ts">
const router = useRouter();
</script>

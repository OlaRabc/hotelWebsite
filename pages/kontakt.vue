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

<script lang="ts" setup></script>

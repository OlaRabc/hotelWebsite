<template>
  <main class="min-h-screen">
    <div id="WelcomeTab">
        <img
          src="https://k10.targeo.pl/i/cache/vcard/14/05/02/_TGV4499-seoheader.jpg"
          alt="OurHotel"
          width="100%"
          height="100%"
        />
        <button @click="handleClick">Kliknij mnie</button>
      <div>
        <div
          class="mx-auto mt-12 w-fit bg-white border rounded-xl px-8 py-16 shadow max-w-4xl"
        >
          <h4 class="font-bold">Witaj w Hotelu Fun&Relax nad Morzem Bałtyckim w Świnoujściu!!</h4>
          <p class="mb-2">
            Zanurz się w wyjątkowym świecie luksusu i relaksu, gdzie wypoczynek
            staje się prawdziwą przyjemnością. Nasz hotel to idealne miejsce na
            wyjątkowe wakacje nad polskim morzem, oferujący bogaty wachlarz
            udogodnień, które spełnią oczekiwania nawet najbardziej wymagających
          </p>
          <p class="mb-2">
            Nie zwlekaj i zarezerwuj już teraz pobyt w Hotelu Fun&Relax.
            Oferujemy nie tylko wyjątkowe warunki pobytu, ale także
            niezapomniane doznania, które sprawią, że Twój urlop stanie się
            wyjątkowym przeżyciem. Zapraszamy do odkrywania naszych usług i
            zapewniamy, że nasz profesjonalny personel zrobi wszystko, by
            spełnić Twoje oczekiwania.
          </p>
          <p >
            Życzymy miłego pobytu w Hotelu Fun&Relax w Świnoujściu - Twoim azylu
            spokoju nad morzem! gości.
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
function handleClick() {
  // Tutaj dodasz kod do wysyłania zdarzenia do Google Analytics
  trackButtonClick();
}

function trackButtonClick() {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'click', {
      event_category: 'Button',    // Kategoria zdarzenia, np. "Button"
      event_label: 'Kliknij mnie', // Etykieta zdarzenia, np. nazwa przycisku
      value: 1                     // Opcjonalnie: wartość zdarzenia, np. liczba kliknięć
    });
  } else {
    console.warn('Google Analytics gtag is not loaded.');
  }
}
</script>
<template>
  <FrBox class="mb-32 !px-0">
    <h3 class="font-semibold text-3xl mb-12 text-center md:text-left">
      Dostępne obiekty:
    </h3>

    <div class="flex justify-around gap-8 flex-wrap">
      <FrCard
        v-for="item in serviceList"
        :data="item"
        class="max-w-[80%] md:max-w-[40%] lg:max-w-[20%] mb-24"
        @click="
          gtagEvent(
            'event',
            'expanding_information_try',
            'button',
            `click_in_${item.name}`
          )
        "
      />
    </div>
  </FrBox>
</template>

<script setup lang="ts">
import { gtagEvent } from "@/assets/js/main";

const serviceList = [
  {
    title: "Prywatne jacuzzi",
    description:
      "Prywatne jacuzzi stworzone z myślą o osobach, które pragnącą pełnego relaksu i intymnej atmosfery.  Zanurz się w ciepłych, kojących bąbelkach, otoczony eleganckim wystrojem i nastrojowym oświetleniem. Dodatkowo możesz zamówić szampana oraz przekąski, by uczynić ten moment jeszcze bardziej wyjątkowym.",
    img: "/images/spa/jacuzzi.jpeg",
  },
  {
    title: "Basen wewnętrzny",
    description:
      "Basen wewnętrzny to oaza relaksu i odprężenia, dostępna przez cały rok, niezależnie od pogody. Elegancka przestrzeń basenowa, z komfortowymi leżakami i nastrojowym oświetleniem, sprzyja zarówno aktywnemu wypoczynkowi, jak i spokojnemu relaksowi.",
    img: "/images/spa/swimming-pool.jpeg",
  },
  {
    title: "Pokój do masażu",
    description:
      "Pokój do masażu to przestrzeń zaprojektowana z myślą o pełnym relaksie i regeneracji. Przytulna atmosfera, delikatne oświetlenie i zapach naturalnych olejków tworzą idealne warunki do odprężenia podczas zabiegów wykonywanych przez wykwalifikowanych terapeutów. W ofercie znajdziesz szeroki wybór masaży, dostosowanych do indywidualnych potrzeb, od relaksacyjnych po lecznicze.",
    img: "/images/spa/massage.jpeg",
  },
  {
    title: "Pokój do masażu dla 2 osób z jacuzzi",
    description:
      "Pokój do masażu dla 2 osób z jacuzzi  to luksusowe miejsce, gdzie można wspólnie z bliską osobą zanurzyć się w pełnym relaksie. Prywatna strefa z podwójnym łóżkiem do masażu oraz jacuzzi oferuje idealną harmonię między kojącym masażem a relaksującą kąpielą w ciepłych bąbelkach. Nastrojowe oświetlenie, aromatyczne olejki i możliwość zamówienia szampana sprawiają, że jest to wyjątkowa przestrzeń do odprężenia i romantycznego wypoczynku.",
    img: "/images/spa/massage-for-2.jpeg",
  },
];
</script>

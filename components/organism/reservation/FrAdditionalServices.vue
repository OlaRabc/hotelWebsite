<template>
  <div>
    <h3 class="mb-4 text-2xl md:text-3xl font-bold text-gold-500">
      Uczyń swój wyjazd bardziej wyjątkowym i dobierz usługi dodatkowe:
    </h3>
    <div class="sticky top-[90%] flex justify-between -mx-12 z-20">
      <FrFollowButton type="left" @click="router.back()">
        Anuluj
      </FrFollowButton>

      <FrFollowButton @click="goNextStep"> Dalej </FrFollowButton>
    </div>
    <label
      v-for="item in servicesList"
      :key="item.value"
      role="checkbox"
      :aria-checked="item.selected"
      tabindex="1"
      class="group relative flex justify-between w-full mb-12 pb-4 border-b last:border-b-0 border-b-black cursor-pointer"
      @click.prevent="handleClick(item.name)"
      @keydown.enter="handleClick(item.name)"
      @keydown.space.prevent="handleClick(item.name)"
    >
      <div class="w-2/3">
        <div class="flex gap-2">
          <div
            class="mb-1 font-bold text-xl transition-all delay-150"
            :class="[
              item.selected
                ? 'text-green-500 md:group-hover:text-red-300'
                : 'md:group-hover:text-green-300',
            ]"
          >
            {{ item.name }}
          </div>
        </div>

        <div class="ml-4 mb-6">{{ item.cost }} zł {{ item.quantity }}</div>

        <input
          type="checkbox"
          v-model="item.selected"
          class="absolute top-0 left-0 opacity-0"
        />
      </div>
      <div
        class="relative w-[200px] h-[150px] rounded-xl overflow-hidden border shadow-lg"
      >
        <img
          :src="item.img"
          :alt="item.name"
          width="200"
          height="200"
          class="object-cover w-full h-full"
        />
      </div>
    </label>
  </div>
</template>

<script setup lang="ts">
import { useReservationData } from "~/stores/reservationData";
const reservationData = useReservationData();

const router = useRouter();

interface serviceEnum {
  img: string;
  name: string;
  tag: string;
  cost: number;
  quantity: String;
  selected: boolean;
}

const servicesList = ref<serviceEnum[]>([
  {
    img: "/images/salary/flowers.jpeg",
    name: "Kwiaty na powitanie",
    tag: "FLOWERS",
    cost: 100,
    quantity: "/raz",
    selected: false,
  },
  {
    img: "/images/salary/prosecco.jpeg",
    name: "Włoskie Prosecco 'Perla Bianca' 75cl - tylko online",
    tag: "PROSECCO",
    cost: 110,
    quantity: "/raz",
    selected: false,
  },
  {
    img: "/images/salary/underground-garage.jpeg",
    name: "Stanowisko postojowe w garażu podziemnym",
    tag: "UNDERGROUND",
    cost: 50,
    quantity: "/noc",
    selected: false,
  },
  {
    img: "/images/salary/unguarded-parking.jpeg",
    name: "Parking niestrzeżony",
    tag: "PARKING",
    cost: 40,
    quantity: "/noc",
    selected: false,
  },
  {
    img: "/images/salary/baby-bed.jpeg",
    name: "Łóżko dla dziecka",
    tag: "BABY",
    cost: 25,
    quantity: "/noc",
    selected: false,
  },
  {
    img: "/images/salary/extra-room.jpeg",
    name: "Dostawka",
    tag: "EXTRA-ROOM",
    cost: 30,
    quantity: "/noc",
    selected: false,
  },
]);

onMounted(() => {
  if (!reservationData.reservationRoom) {
    router.push("/error");
  }
  if (reservationData.selectedServicesList.length) {
    reservationData.selectedServicesList.map((el1) => {
      servicesList.value.map((el2) => {
        if (el1.tag === el2.tag) el2.selected = true;
      });
    });
  }
});

const handleClick = (name: String): void => {
  servicesList.value.forEach((service) => {
    if (service.name === name) {
      service.selected = !service.selected;
    }
  });
};

const goNextStep = (): void => {
  const selectedServicesList = servicesList.value
    .filter((service) => service.selected)
    .map((service) => ({
      name: service.name,
      tag: service.tag,
      cost: service.cost,
      quantity: service.quantity,
    }));

  reservationData.setSelectedServicesList(selectedServicesList);
  router.push(`/rezerwuj-pokoj/krok-2`);
};
</script>

<template>
  <div>
    <div class="">
      <label
        v-for="item in services"
        :key="item.value"
        tabindex="1"
        class="relative w-full mb-12 flex justify-between border-b border-b-black pb-4"
        @click.prevent="handleClick(item.name, item.cost)"
      >
        <div class="w-2/3">
          <div class="font-bold text-xl mb-1">{{ item.name }}</div>
          <div class="ml-4 mb-6">{{ item.cost }} zł {{ item.quantity }}</div>
          <input type="checkbox" class="" />
        </div>
        <div class="w-[100px] h-[100px] rounded-full overflow-hidden">
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
    {{ selectedServicesList }}
    <FrButton @on-click="returnValues"> Dalej</FrButton>
  </div>
</template>

<!-- TODO: END THIS ELEMENT -->
<script setup lang="ts">
interface serviceEnum {
  img: string;
  name: string;
  cost: number;
  quantity: String;
  selected: boolean;
}
const servicesList = ref<serviceEnum[]>([
  {
    img: "/images/restaurant/breakfast.jpeg",
    name: "Oferta Śniadaniowa",
    cost: 50,
    quantity: "/os/noc",
    selected: false,
  },
  {
    img: "/images/restaurant/dinner.jpeg",
    name: "Oferta Obiadowa",
    cost: 50,
    quantity: "/os/noc",

    selected: false,
  },
  {
    img: "/images/restaurant/lunch.jpeg",
    name: "Oferta Kolacyjna",
    cost: 50,
    quantity: "/os/noc",
    selected: false,
  },
  {
    img: "/images/attractions/cruises.jpg",
    name: "Kwiaty Na Powitanie",
    cost: 100,
    quantity: "/raz",
    selected: false,
  },
  {
    img: "/images/attractions/cruises.jpg",
    name: "Włoskie Prosecco 'Perla Bianca' 75cl - tylko online",
    cost: 110,
    quantity: "/raz",
    selected: false,
  },
  {
    img: "/images/attractions/cruises.jpg",
    name: "Stanowisko postojowe w garażu podziemnym",
    cost: 50,
    quantity: "/noc",
    selected: false,
  },
  {
    img: "/images/attractions/cruises.jpg",
    name: "Parking niestrzeżony",
    cost: 40,
    quantity: "/noc",
    selected: false,
  },
  {
    img: "/images/attractions/cruises.jpg",
    name: "Łóżko dla dziecka",
    cost: 25,
    quantity: "/noc",
    selected: false,
  },
]);

const handleClick = (name: String, cost: Number) => {};

const emit = defineEmits(["onSelect"]);
const returnValues = () => {
  emit("onSelect", selectedServicesList);
};
</script>

<template>
  <div>
    <div class="">
      <label
        v-for="item in servicesList"
        :key="item.value"
        role="checkbox"
        :aria-checked="item.selected"
        tabindex="1"
        class="group relative w-full mb-12 flex justify-between border-b border-b-black b-4 cursor-pointer"
        @click.prevent="handleClick(item.name)"
        @keydown.enter="handleClick(item.name)"
        @keydown.space.prevent="handleClick(item.name)"
      >
        <div class="w-2/3">
          <div class="font-bold text-xl mb-1">{{ item.name }}</div>
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
          <div
            class="absolute top-2 right-2 bg-gold-700 text-white rounded-full px-2.5 py-1 shadow-[0_0_15px_5px_rgba(0,0,0,0.75)] group-hover:shadow-[0_0_15px_5px_rgba(250,250,250,0.75)]"
          >
            <font-awesome-icon v-if="item.selected" icon="plus" />
            <font-awesome-icon v-else icon="trash" />
          </div>
          <img
            :src="item.img"
            :alt="item.name"
            width="200"
            height="200"
            class="object-cover w-full h-full"
          />
        </div>
      </label>

      <FrButton @on-click="returnValues" tabindex="1">Dalej</FrButton>
    </div>
  </div>
</template>

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
    img: "/images/salary/flowers.jpeg",
    name: "Kwiaty Na Powitanie",
    cost: 100,
    quantity: "/raz",
    selected: false,
  },
  {
    img: "/images/salary/prosecco.jpeg",
    name: "Włoskie Prosecco 'Perla Bianca' 75cl - tylko online",
    cost: 110,
    quantity: "/raz",
    selected: false,
  },
  {
    img: "/images/salary/underground-garage.jpeg",
    name: "Stanowisko postojowe w garażu podziemnym",
    cost: 50,
    quantity: "/noc",
    selected: false,
  },
  {
    img: "/images/salary/unguarded-parking.jpeg",
    name: "Parking niestrzeżony",
    cost: 40,
    quantity: "/noc",
    selected: false,
  },
  {
    img: "/images/salary/baby-bed.jpeg",
    name: "Łóżko dla dziecka",
    cost: 25,
    quantity: "/noc",
    selected: false,
  },
]);

const handleClick = (name: String) => {
  servicesList.value.forEach((service) => {
    if (service.name === name) {
      service.selected = !service.selected;
    }
  });
};

const emit = defineEmits(["onAccept"]);
const returnValues = () => {
  const selectedServicesList = servicesList.value
    .filter((service) => service.selected)
    .map((service) => ({
      name: service.name,
      cost: service.cost,
      quantity: service.quantity,
    }));

  emit("onAccept", selectedServicesList);
};
</script>

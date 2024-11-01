<template>
  <Transition>
    <div v-if="props.isOpen" class="fixed top-0 left-0 w-full h-full z-[300]">
      <div
        class="absolute top-0 left-0 w-full h-full overflow-hidden bg-black bg-opacity-80"
      />
      <div
        class="flex justify-center absolute top-0 left-0 w-full h-full py-8 overflow-y-auto"
        :class="{ 'items-center': props.center }"
        @click="$emit('onClose')"
      >
        <div
          class="relative w-11/12 md:w-2/3 h-max px-12 py-14 bg-white rounded-2xl"
          @click.stop
        >
          <div
            v-if="props.closeBtn"
            tabindex="1"
            class="absolute top-8 right-8 text-2xl cursor-pointer"
            @click="$emit('onClose')"
          >
            <font-awesome-icon :icon="['fas', 'xmark']" />
          </div>
          <slot />
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const props = defineProps({
  center: {
    type: Boolean,
    required: false,
    default: false,
  },
  isOpen: {
    type: Boolean,
    required: true,
    default: false,
  },
  closeBtn: {
    type: Boolean,
    required: false,
    default: true,
  },
});

import { useBodyOverflow } from "~/stores/bodyOverflow.js";

const bodyOverflow = useBodyOverflow();

watch(
  () => props.isOpen,
  (newValue: Boolean) => {
    bodyOverflow.setIsOverflowHidden(newValue);
  }
);
const emit = defineEmits(["onClose"]);

const handleKeydown = (event) => {
  if (event.key === "Escape") {
    emit("onClose");
  }
};

onMounted(() => {
  window.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeydown);
});
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

<template>
  <Transition>
    <div
      class="fixed top-0 left-0 w-full h-[200vh] bg-black bg-opacity-80 z-[300]"
      v-if="props.isOpen"
    >
      <div
        class="flex justify-center absolute top-0 left-0 w-full h-full py-16 overflow-y-auto"
        :class="{ 'items-center': props.center }"
        @click="$emit('onClose')"
      >
        <div
          class="relative w-11/12 md:w-2/3 h-max px-12 py-14 bg-white rounded-2xl"
          @click.stop
        >
          <div v-if="props.closeBtn" class="absolute top-8 right-8 text-2xl cursor-pointer" @click=" $emit('onClose')">
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

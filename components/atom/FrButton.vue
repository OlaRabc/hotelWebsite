<template>
  <button
    :disabled="props.disabled"
    :tabindex="props.disabled ? -1 : 0"
    :type="type"
    class="bg-gold-500 py-2 px-6 rounded-3xl font-bold text-white text-xl shadow-[0px_5px_10px_0px_rgba(0,0,0,0.25),inset_-2px_2px_3px_-1px_rgba(98,92,59,0.25)] hover:bg-gold-600 hover:shadow-[0px_5px_10px_0px_rgba(0,0,0,0.25)] focus-within:bg-gold-600 focus-within:shadow-[0px_5px_10px_0px_rgba(0,0,0,0.25)] active:scale-95 transition-all duration-200"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
enum TYPE {
  BUTTON = "button",
  SUBMIT = "submit",
  RESET = "reset",
  UNDEFINED = "undefined",
}
const props = defineProps({
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
  type: {
    type: String,
    required: false,
    default: TYPE.BUTTON,
  },
});

const emit = defineEmits(["onClick"]);

const onClick = () => !props.disabled && emit("onClick");
</script>

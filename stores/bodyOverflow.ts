import { defineStore } from "pinia";

export const useBodyOverflow = defineStore("counter", {
  state: () => ({
    isOverflowHidden: false,
  }),
  actions: {
    setIsOverflowHidden(value: boolean) {
      this.isOverflowHidden = value;
    },
  },
});

import { defineStore } from "pinia";

export const useReservationData = defineStore("reservationData", {
  state: () => ({
    reservationRoom: null,
    selectedServicesList: [],
    arrivalDate: "",
    departureDate: "",
    contractDetails: null,
  }),
  actions: {
    setReservationRoom(value: any) {
      this.reservationRoom = value;
    },
    setSelectedServicesList(value: any) {
      this.selectedServicesList = value;
    },
    setDates(departureDate: any, arrivalDate: any) {
      this.departureDate = departureDate;
      this.arrivalDate = arrivalDate;
    },
    setContractDetails(value: any) {
      this.contractDetails = value;
    },
  },
});

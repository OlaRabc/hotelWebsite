import { defineStore } from "pinia";

export const useReservationData = defineStore("reservationData", {
  state: () => ({
    reservationRoom: null,
    selectedServicesList: [],
    arrivalDate: "",
    departureDate: "",
    contractDetails: null,
    guests: 1,
  }),
  actions: {
    setReservationRoom(value: any) {
      this.reservationRoom = value;
    },
    setSelectedServicesList(value: any) {
      this.selectedServicesList = value;
    },
    setDates(arrivalDate: any, departureDate: any) {
      this.departureDate = departureDate;
      this.arrivalDate = arrivalDate;
    },
    setContractDetails(value: any) {
      this.contractDetails = value;
    },
    setGuests(value: number) {
      this.guests = value;
    },
    getAllData() {
      return {
        reservationRoom: this.reservationRoom,
        selectedServicesList: this.selectedServicesList,
        arrivalDate: this.arrivalDate,
        departureDate: this.departureDate,
        contractDetails: this.contractDetails,
        guests: this.guests,
      };
    },
  },
});

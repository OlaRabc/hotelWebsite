export default interface Room {
  id: Number | null;
  img: String;
  title: String;
  description: String;
  maxGuests: String;
  price: number;
  priceBefore: number;
  freeRooms: String;
  amenities: String;
}

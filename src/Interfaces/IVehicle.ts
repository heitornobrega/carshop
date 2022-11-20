export default interface IVehicle {
  _id?: string,
  id?: string,
  model: string,
  year: number,
  color: string,
  buyValue: number,
  doorsQty: number,
  seatsQty: number,
  status?: boolean,
}
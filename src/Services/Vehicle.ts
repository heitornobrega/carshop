// import Vehicle from '../Domains/Vehicle';
// import IVehicle from '../Interfaces/IVehicle';
// import VehicleODM from '../Models/VehicleODM';

// export default class VehicleService <T>{
//   private createVehicleDomain(vehicle: T): T {
//     return new Vehicle(vehicle);
//   }

//   public async createVehicle(vehicle: IVehicle) {
//     const vehicleODM = new VehicleODM()<T>;
//     const newVehicle = await vehicleODM.create(vehicle);
//     const domainVehicle = this.createVehicleDomain(newVehicle);
//     return domainVehicle;
//   }

//   public async getAllVehicles() {
//     const vehicleODM = new VehicleODM();
//     const vehicles = await vehicleODM.getAllVehicles();
//     const vehicleas = vehicles.map((el) => ({ 
//       id: el._id,
//       color: el.color,
//       buyValue: el.buyValue,
//       doorsQty: el.doorsQty,
//       model: el.model,
//       seatsQty: el.seatsQty,
//       status: el.status,
//       year: el.year,
//     }));
//     return vehicleas;
//   }

//   public async getVehicle(_id: string) {
//     const vehicleODM = new VehicleODM();
//     const vehicles: IVehicle[] = await vehicleODM.getVehicle(_id);
//     try {
//       const vehicle = vehicles[0];
//       const vehicleObj = {
//         id: vehicle._id,
//         color: vehicle.color,
//         buyValue: vehicle.buyValue,
//         doorsQty: vehicle.doorsQty,
//         model: vehicle.model,
//         seatsQty: vehicle.seatsQty,
//         status: vehicle.status,
//         year: vehicle.year,
//       };
//       return vehicleObj;
//     } catch (error) {
//       throw new Error('Vehicle not found');
//     }
//   }
//   public async updateVehicle(_id: string, info: IVehicle) {
//     const vehicleODM = new VehicleODM();
//     const vehicles = await vehicleODM.updateVehicle(_id, info);
//     console.log(vehicles);
//     try {
//       const vehicle = vehicles[0];
//       const vehicleObj = {
//         id: vehicle._id,
//         color: vehicle.color,
//         buyValue: vehicle.buyValue,
//         doorsQty: vehicle.doorsQty,
//         model: vehicle.model,
//         seatsQty: vehicle.seatsQty,
//         status: vehicle.status,
//         year: vehicle.year,
//       };
//       return vehicleObj;
//     } catch (error) {
//       throw new Error('Vehicle not found');
//     }
//   }
// }
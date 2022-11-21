import { Schema } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import VehicleODM from './AbstractODM';

export default class MotorcycleODM extends VehicleODM <IMotorcycle> {
  constructor() {
    const schema = new Schema<IMotorcycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: String, required: true, default: false },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });
    super(schema, 'Motorcycle');
  }
}
import { Model, Schema, model, models, isValidObjectId, UpdateQuery } from 'mongoose';

import ICar from '../Interfaces/ICar';

export default class CarODM {
  private schema: Schema;
  private model: Model<ICar>;

  constructor() {
    this.schema = new Schema<ICar>(
      {
        model: { type: String, required: true },
        year: { type: Number, required: true },
        color: { type: String, required: true },
        status: { type: String, required: true, default: false },
        buyValue: { type: Number, required: true },
        doorsQty: { type: Number, required: true },
        seatsQty: { type: Number, required: true },
      },
    );
    this.model = models.Car || model('Car', this.schema);
  }

  public async create(car: ICar): Promise<ICar> {
    return this.model.create({ ...car });
  }

  public async getCar(_id: string): Promise<any> {
    const idIsvalid = isValidObjectId(_id);
    if (!idIsvalid) {
      throw new Error('Invalid mongo id');
    }
    return this.model.find({ _id }); 
  }

  public async getAllCars(): Promise<ICar[]> {
    return this.model.find();
  }

  public async updateCar(_id: string, info: ICar): Promise<any> {
    const idIsvalid = isValidObjectId(_id);
    if (!idIsvalid) {
      throw new Error('Invalid mongo id');
    }
    return [await this.model.findByIdAndUpdate(
      { _id },
      { ...info } as UpdateQuery<ICar>,
      { new: true },
    )];
  }
}
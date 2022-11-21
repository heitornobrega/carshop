import { Model, Schema, model, models, isValidObjectId, UpdateQuery } from 'mongoose';

export default class VehicleODM <T> { 
  protected schema: Schema;
  protected model: Model<T>;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  public async getOne(_id: string): Promise<T[] | null> {
    const idIsValid = isValidObjectId(_id);
    if (!idIsValid) {
      throw new Error('Invalid mongo id');
    }
    return this.model.find({ _id }); 
  }

  public async getAll(): Promise<T[]> {
    return this.model.find();
  }

  public async update(_id: string, info: T): Promise<T[]> {
    const idIsValid = isValidObjectId(_id);
    if (!idIsValid) {
      throw new Error('Invalid mongo id');
    }
    return [await this.model.findByIdAndUpdate(
      { _id },
      { ...info } as UpdateQuery<T>,
      { new: true },
    )] as T[];
  }
}
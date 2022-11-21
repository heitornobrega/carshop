import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

export default class MotorcycleService {
  private createMotorcycleDomain(motorcycle: IMotorcycle): Motorcycle {
    return new Motorcycle(motorcycle);
  }

  public async createMotorcycle(motorcycle: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();
    const newMotorcycle = await motorcycleODM.create(motorcycle);
    const domainMotorcycle = this.createMotorcycleDomain(newMotorcycle);
    return domainMotorcycle;
  }

  public async getAllMotorcycles() {
    const motorcycleODM = new MotorcycleODM();
    const motorcycles = await motorcycleODM.getAll();
    const motorcycleas = motorcycles.map((el) => ({ 
      id: el._id,
      color: el.color,
      buyValue: el.buyValue,
      category: el.category,
      model: el.model,
      engineCapacity: el.engineCapacity,
      status: el.status,
      year: el.year,
    }));
    return motorcycleas;
  }

  public async getMotorcycle(_id: string) {
    const motorcycleODM = new MotorcycleODM();
    const motorcycles = await motorcycleODM.getOne(_id) as IMotorcycle[];
    try {
      const motorcycle = motorcycles[0];
      const motorcycleObj = {
        id: motorcycle._id,
        color: motorcycle.color,
        buyValue: motorcycle.buyValue,
        engineCapacity: motorcycle.engineCapacity,
        model: motorcycle.model,
        category: motorcycle.category,
        status: motorcycle.status,
        year: motorcycle.year,
      };
      return motorcycleObj;
    } catch (error) {
      throw new Error('Motorcycle not found');
    }
  }
  public async updateMotorcycle(_id: string, info: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();
    const motorcycles = await motorcycleODM.update(_id, info);
    try {
      const motorcycle = motorcycles[0];
      const motorcycleObj = {
        id: motorcycle._id,
        color: motorcycle.color,
        buyValue: motorcycle.buyValue,
        category: motorcycle.category,
        model: motorcycle.model,
        engineCapacity: motorcycle.engineCapacity,
        status: motorcycle.status,
        year: motorcycle.year,
      };
      return motorcycleObj;
    } catch (error) {
      throw new Error('Motorcycle not found');
    }
  }
}
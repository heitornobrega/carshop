import Vehicle from './Vehicle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleCategories from '../utils/MotorcycleCategories';

export default class Motorcycle extends Vehicle {
  private category: 'Street' | 'Custom' | 'Trail';
  private engineCapacity: number;

  constructor(obj: IMotorcycle) {
    super(obj);
    this.category = obj.category;
    this.engineCapacity = obj.engineCapacity;
  }

  public setCategory(category: MotorcycleCategories) {
    this.category = category;
  }
    
  public getCategory() {
    return this.category;
  }
    
  public setEngineCapacity(engineCapacity: number) {
    this.engineCapacity = engineCapacity;
  }
    
  public getEngineCapacity() {
    return this.engineCapacity;
  }
}
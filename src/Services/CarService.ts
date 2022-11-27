import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  private createCarDomain(car: ICar): Car {
    return new Car(car);
  }

  public async createCar(car: ICar) {
    const carODM = new CarODM();
    const newCar = await carODM.create(car);
    const domainCar = this.createCarDomain(newCar);
    return domainCar;
  }

  public async getAllCars() {
    const carODM = new CarODM();
    const cars = await carODM.getAll();
    const caras = cars.map((el) => ({ 
      id: el._id,
      color: el.color,
      buyValue: el.buyValue,
      doorsQty: el.doorsQty,
      model: el.model,
      seatsQty: el.seatsQty,
      status: el.status,
      year: el.year,
    }));
    return caras;
  }

  public async getCar(_id: string) {
    const carODM = new CarODM();
    const cars = await carODM.getOne(_id) as ICar[];
    try {
      const car = cars[0];
      const carObj = {
        id: car._id,
        color: car.color,
        buyValue: car.buyValue,
        doorsQty: car.doorsQty,
        model: car.model,
        seatsQty: car.seatsQty,
        status: car.status,
        year: car.year,
      };
      return carObj;
    } catch (error) {
      throw new Error('Car not found');
    }
  }
  public async updateCar(_id: string, info: ICar) {
    const carODM = new CarODM();
    const cars = await carODM.update(_id, info);
    console.log('carService', cars);
    try {
      const car = cars[0];
      const carObj = {
        id: car._id,
        color: car.color,
        buyValue: car.buyValue,
        doorsQty: car.doorsQty,
        model: car.model,
        seatsQty: car.seatsQty,
        status: car.status,
        year: car.year,
      };
      return carObj;
    } catch (error) {
      throw new Error('Car not found');
    }
  }
}
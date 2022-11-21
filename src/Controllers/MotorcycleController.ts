import { NextFunction, Request, Response } from 'express';
import Imotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';

export default class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async createMotorcycle() {
    const motorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      engineCapacity: this.req.body.engineCapacity,
      category: this.req.body.category,
    };

    try {
      const newMotorcycle = await this.service.createMotorcycle(motorcycle as Imotorcycle);
      return this.res.status(201).json(newMotorcycle);  
    } catch (error) {
      this.next(error);
    }
  }

  public async getAllMotorcycles() {
    const allMotorcycles = await this.service.getAllMotorcycles();
    return this.res.status(200).json(allMotorcycles);
  }

  public async getMotorcycle() {
    try {
      const { id } = this.req.params as any;
      const motorcycle = await this.service.getMotorcycle(id as string);
      return this.res.status(200).json(motorcycle);
    } catch (error) {
      this.next(error);
    }
  }
  public async updateMotorcycle() {
    try {
      const { id } = this.req.params as any;
      const info = this.req.body;
      const motorcycle = await this.service.updateMotorcycle(id as string, info);
      return this.res.status(200).json(motorcycle);
    } catch (error) {
      this.next(error);
    }
  }
}
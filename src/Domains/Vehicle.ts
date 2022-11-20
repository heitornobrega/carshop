import ICar from '../Interfaces/ICar';

export default class Vehicle {
  protected _id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  private status: boolean;
  protected buyValue: number;
  private doorsQty: number;
  private seatsQty: number;

  constructor(obj: ICar) {
    this._id = obj._id;
    this.model = obj.model;
    this.year = obj.year;
    this.color = obj.color;
    this.status = false;
    this.buyValue = obj.buyValue;
    this.doorsQty = obj.doorsQty;
    this.seatsQty = obj.seatsQty;
  }

  public setId(id: string) {
    this._id = id;
  }

  public getId() {
    return this._id;
  }

  public setModel(model:string) {
    this.model = model;
  }

  public getModel() {
    return this.model;
  }

  public setYear(year: number) {
    this.year = year;
  }

  public getYear() {
    return this.year;
  }

  public setColor(color: string) {
    this.color = color;
  }

  public getColor() {
    return this.color;
  }

  public setStatus(status: boolean) {
    this.status = status;
  }

  public getStatus() {
    return this.status;
  }

  public setBuyValue(buyValue: number) {
    this.buyValue = buyValue;
  }

  public getBuyValue() {
    return this.buyValue;
  }

  public setDoorsQty(doorsQty: number) {
    this.doorsQty = doorsQty;
  }

  public getDoorsQty() {
    return this.doorsQty;
  }

  public setSeatsQty(seatsQty: number) {
    this.seatsQty = seatsQty;
  }

  public getSeatsQty() {
    return this.seatsQty;
  }
}
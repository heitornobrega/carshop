import sinon from 'sinon';
import { expect } from 'chai';
import { Model } from 'mongoose';
import Icar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/CarService';
import Car from '../../../src/Domains/Car';

describe('Test of create cars', function () {
  it('Should return a object with a car', async function () {
    // Arrange
    const createCarInput: Icar = {
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };
    const createCarOutput: Car = new Car({
      id: '637a6739bf90607d859ec235',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: false,
      buyValue: 15.99,
      doorsQty: 4,
      seatsQty: 5,
    });
    sinon.stub(Model, 'create').resolves(createCarOutput);
    // Act
    const carService = new CarService();
    const expectedCarOutput = await carService.createCar(createCarInput);
    // Assert
    expect(createCarOutput).to.be.deep.equal(expectedCarOutput);
  });
});
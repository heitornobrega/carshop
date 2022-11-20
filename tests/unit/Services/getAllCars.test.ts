import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import { carArray } from './carMocks';

describe('getCar test', function () {
  it('Should return an array of cars', async function () {
    sinon.stub(Model, 'find').resolves(carArray);
    const service = new CarService();
    const result = await service.getAllCars();
    expect(result).to.be.deep.equal(carArray);
  });
});

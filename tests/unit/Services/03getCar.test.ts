import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
// import { carArrayExpected, validCarOutput } from './carMocks';
// import ICar from '../../../src/Interfaces/ICar';

describe('getCar test', function () {
  it('Should throw an exception when id type is invalid', async function () {
    const INVALID_ID = 'INVALID';
    sinon.stub(Model, 'find').resolves(undefined);
    try {
      const service = new CarService();
      await service.getCar(INVALID_ID);
    } catch (error) {
      expect((error as Error).message).to.be.equal('Invalid mongo id');
      sinon.restore();
    }
  });

  it('Should throw an exception when the car is not founded', async function () {
    const VALID_ID = '637a6739bf90607d859ec235';
    sinon.stub(Model, 'find').resolves([]);
    try {
      const service = new CarService();
      await service.getCar(VALID_ID);
    } catch (error) {
      expect((error as Error).message).to.be.equal('Car not found');
      sinon.restore();
    }
  });

  it('Should return a valid vehicle', async function () {
    const VALID_ID = '637a6739bf90607d859ec235';
    sinon.stub(Model, 'find').resolves([{
      model: 'Uno da Escada',
      year: 1960,
      color: 'Red',
      buyValue: 1500,
      doorsQty: 2,
      seatsQty: 2,
      status: false,
      _id: '637a6739bf90607d859ec235',
    }]);
    const service = new CarService();
    const result = await service.getCar(VALID_ID);
    expect(result).to.be.deep.equal({
      model: 'Uno da Escada',
      year: 1960,
      color: 'Red',
      buyValue: 1500,
      doorsQty: 2,
      seatsQty: 2,
      status: false,
      id: '637a6739bf90607d859ec235',
    });
    sinon.restore();
  });
});

import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotorcycleService from '../../../src/Services/MotorcycleService';
// import { carArrayExpected, validMotorcycleOutput } from './carMocks';
// import IMotorcycle from '../../../src/Interfaces/IMotorcycle';

describe('getMotorcycle test', function () {
  it('Should throw an exception when id type is invalid', async function () {
    const INVALID_ID = 'INVALID';
    sinon.stub(Model, 'find').resolves(undefined);
    try {
      const service = new MotorcycleService();
      await service.getMotorcycle(INVALID_ID);
    } catch (error) {
      expect((error as Error).message).to.be.equal('Invalid mongo id');
      sinon.restore();
    }
  });

  it('Should throw an exception when the car is not founded', async function () {
    const VALID_ID = '637a6739bf90607d859ec235';
    sinon.stub(Model, 'find').resolves([]);
    try {
      const service = new MotorcycleService();
      await service.getMotorcycle(VALID_ID);
    } catch (error) {
      expect((error as Error).message).to.be.equal('Motorcycle not found');
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
      engineCapacity: 1200,
      category: 'Street',
      status: false,
      _id: '637a6739bf90607d859ec235',
    }]);
    const service = new MotorcycleService();
    const result = await service.getMotorcycle(VALID_ID);
    expect(result).to.be.deep.equal({
      model: 'Uno da Escada',
      year: 1960,
      color: 'Red',
      buyValue: 1500,
      engineCapacity: 1200,
      category: 'Street',
      status: false,
      id: '637a6739bf90607d859ec235',
    });
    sinon.restore();
  });
});

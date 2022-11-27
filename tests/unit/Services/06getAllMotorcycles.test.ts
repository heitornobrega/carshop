import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import { motorcycleArray, motorcycleArrayExpected } from './motorcycleMocks';

describe('getMotorcycle test', function () {
  it('Should return an array of motorcycles', async function () {
    sinon.stub(Model, 'find').resolves(motorcycleArray);
    const service = new MotorcycleService();
    const result = await service.getAllMotorcycles();
    expect(result).to.be.deep.equal(motorcycleArrayExpected);
    sinon.restore();
  });
});

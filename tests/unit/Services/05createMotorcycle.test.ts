import sinon from 'sinon';
import { expect } from 'chai';
import { Model } from 'mongoose';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import Motorcycle from '../../../src/Domains/Motorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';

describe('Test of create motorcycles', function () {
  it('Should return a object with a motorcycle', async function () {
    // Arrange
    const createCarInput: IMotorcycle = {
      model: 'Falcon NX4',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      category: 'Trail',
      engineCapacity: 1000,

    };
    const createCarOutput: Motorcycle = new Motorcycle({
      id: '637a6739bf90607d859ec235',
      model: 'Falcon NX4',
      year: 2002,
      color: 'Black',
      status: false,
      buyValue: 15.99,
      category: 'Trail',
      engineCapacity: 1000,
    });
    sinon.stub(Model, 'create').resolves(createCarOutput);
    // Act
    const motorcycleService = new MotorcycleService();
    const expectedCarOutput = await motorcycleService.createMotorcycle(createCarInput);
    // Assert
    expect(createCarOutput).to.be.deep.equal(expectedCarOutput);
  });
});
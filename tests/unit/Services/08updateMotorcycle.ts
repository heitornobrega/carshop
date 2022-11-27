import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotorcycleService from '../../../src/Services/MotorcycleService';
// import ICar from '../../../src/Interfaces/ICar';
// import { carArrayExpected, validCarOutput } from './carMocks';
// import ICar from '../../../src/Interfaces/ICar';

describe('getCar test', function () {
//   it('Should throw an exception when id type is invalid', async function () {
//     const INVALID_ID = 'INVALID';
//     sinon.stub(Model, 'find').resolves(undefined);
//     try {
//       const service = new CarService();
//       await service.getCar(INVALID_ID);
//     } catch (error) {
//       expect((error as Error).message).to.be.equal('Invalid mongo id');
//       sinon.restore();
//     }
//   });

  //   it('Should throw an exception when the car is not founded', async function () {
  //     const VALID_ID = '637a6739bf90607d859ec235';
  //     sinon.stub(Model, 'find').resolves([]);
  //     try {
  //       const service = new CarService();
  //       await service.getCar(VALID_ID);
  //     } catch (error) {
  //       expect((error as Error).message).to.be.equal('Car not found');
  //       sinon.restore();
  //     }
  //   });

  it('Should return a valid vehicle', async function () {
    const moto = 'Uno da Escada';
    const VALID_ID = '637a6739bf90607d859ec235';
    sinon.stub(Model, 'findByIdAndUpdate').resolves([{
      model: moto,
      year: 1960,
      color: 'Red',
      buyValue: 1500,
      engineCapacity: 1200,
      category: 'Street',
      status: false,
      _id: '637a6739bf90607d859ec235',
    }][0]);
    const service = new MotorcycleService();
    const result = await service.updateMotorcycle(VALID_ID, {
      model: moto,
      year: 1960,
      color: 'Red',
      buyValue: 1500,
      engineCapacity: 1200,
      category: 'Street',
      status: false,
      _id: '637a6739bf90607d859ec235',
    });
    expect(result).to.be.deep.equal({
      model: moto,
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

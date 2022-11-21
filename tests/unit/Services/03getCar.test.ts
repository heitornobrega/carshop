// import { expect } from 'chai';
// import sinon from 'sinon';
// import { Model } from 'mongoose';
// import CarService from '../../../src/Services/CarService';
// // import { validCarOutput } from './carMocks';

// describe('getCar test', function () {
//   it('Should throw an exception when id type is invalid', async function () {
//     const INVALID_ID = 'INVALID';
//     sinon.stub(Model, 'find').resolves(undefined);
//     try {
//       const service = new CarService();
//       await service.getCar(INVALID_ID);
//     } catch (error) {
//       expect((error as Error).message).to.be.equal('Invalid mongo id');
//     }
//   });

//   // it('Should throw an exception when the car is not founded', async function () {
//   //   const VALID_ID = '637a6739bf90607d859ec235';
//   //   sinon.stub(Model, 'find').resolves([]);
//   //   try {
//   //     const service = new CarService();
//   //     await service.getCar(VALID_ID);
//   //   } catch (error) {
//   //     expect((error as Error).message).to.be.equal('Car not found');
//   //   }
//   // });

//   // it('Should return a valid vehicle', async function () {
//   //   const VALID_ID = '637a6739bf90607d859ec235';
//   //   sinon.stub(Model, 'find').resolves(validCarOutput);
//   //   const service = new CarService();
//   //   const result = await service.getCar(VALID_ID);
//   //   expect(result).to.be.deep.equal(validCarOutput);
//   // });

//   // afterEach(function () {
//   //   sinon.restore();
//   // });
// });

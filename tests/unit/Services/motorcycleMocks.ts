import IMotorcycle from '../../../src/Interfaces/IMotorcycle';

export const validMotorcycle: IMotorcycle = {
  model: 'RD 350',
  year: 1980,
  color: 'Red',
  buyValue: 11500,
  engineCapacity: 1200,
  category: 'Street',
};

export const motorcycleArray: IMotorcycle[] = [
  {
    model: 'Uno da Escada',
    year: 1960,
    color: 'Red',
    buyValue: 1500,
    engineCapacity: 1200,
    category: 'Street',
    status: false,
    _id: '637a6739bf90607d859ec235',
  },
  {
    model: 'Uno da Tv',
    year: 1960,
    color: 'green',
    buyValue: 1500,
    engineCapacity: 1200,
    category: 'Street',
    status: false,
    _id: '637a6739bf90607d859ec236',
  },

];

export const motorcycleArrayExpected: IMotorcycle[] = [
  {
    model: 'Uno da Escada',
    year: 1960,
    color: 'Red',
    buyValue: 1500,
    engineCapacity: 1200,
    category: 'Street',
    status: false,
    id: '637a6739bf90607d859ec235',
  },
  {
    model: 'Uno da Tv',
    year: 1960,
    color: 'green',
    buyValue: 1500,
    engineCapacity: 1200,
    category: 'Street',
    status: false,
    id: '637a6739bf90607d859ec236',
  },

];

export const validMotorcycleOutput : IMotorcycle[] = [
  { id: '637a6739bf90607d859ec235',
    model: 'Uno da Tv',
    year: 1960,
    color: 'green',
    buyValue: 1500,
    engineCapacity: 1200,
    category: 'Street',
    status: false,
  },
];
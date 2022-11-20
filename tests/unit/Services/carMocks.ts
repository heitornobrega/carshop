import ICar from '../../../src/Interfaces/ICar';

export const validCar: ICar = {
  model: 'Uno da Escada',
  year: 1960,
  color: 'Red',
  buyValue: 1500,
  doorsQty: 2,
  seatsQty: 2,
};

export const carArray: ICar[] = [
  {
    model: 'Uno da Escada',
    year: 1960,
    color: 'Red',
    buyValue: 1500,
    doorsQty: 2,
    seatsQty: 2,
  },
  {
    model: 'Uno da Tv',
    year: 1960,
    color: 'green',
    buyValue: 1500,
    doorsQty: 2,
    seatsQty: 2,
  },

];

export const validCarOutput : ICar[] = [
  { id: '637a6739bf90607d859ec235',
    model: 'Uno da Tv',
    year: 1960,
    color: 'green',
    buyValue: 1500,
    doorsQty: 2,
    seatsQty: 2,
  },
];
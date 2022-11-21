import { Router } from 'express';
import CarController from '../Controllers/CarController';
import MotorcycleController from '../Controllers/MotorcycleController';

const routes = Router();

routes.get('/cars/:id', (req, res, next) => new CarController(req, res, next).getCar());
routes.put('/cars/:id', (req, res, next) => new CarController(req, res, next).updateCar());
routes.get('/cars', (req, res, next) => new CarController(req, res, next).getAllCars());
routes.post('/cars', (req, res, next) => new CarController(req, res, next).createCar());

routes.get(
  '/motorcycles/:id',
  (req, res, next) => new MotorcycleController(req, res, next).getMotorcycle(),
);

routes.put(
  '/motorcycles/:id',
  (req, res, next) => new MotorcycleController(req, res, next).updateMotorcycle(),
);

routes.get(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).getAllMotorcycles(),
);

routes.post(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).createMotorcycle(),
);

export default routes;
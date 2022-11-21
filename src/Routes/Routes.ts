import { Router } from 'express';
import CarController from '../Controllers/CarController';

const routes = Router();

routes.get('/cars/:id', (req, res, next) => new CarController(req, res, next).getCar());
routes.put('/cars/:id', (req, res, next) => new CarController(req, res, next).updateCar());
routes.get('/cars', (req, res, next) => new CarController(req, res, next).getAllCars());
routes.post('/cars', (req, res, next) => new CarController(req, res, next).createCar());

export default routes;
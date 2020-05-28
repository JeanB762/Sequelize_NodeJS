import express from 'express';

import UserController from './controllers/UserControllers';
import AddressControllers from './controllers/AddressControllers';
import TechControllers from './controllers/TechControllers';
import ReportController from './controllers/ReportController';

const routes = express.Router();

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);

routes.get('/users/:user_id/addresses', AddressControllers.index);
routes.post('/users/:user_id/addresses', AddressControllers.store);

routes.get('/users/:user_id/techs', TechControllers.index);
routes.post('/users/:user_id/techs', TechControllers.store);
routes.delete('/users/:user_id/techs', TechControllers.delete);

routes.get('/report', ReportController.show);

export default routes;

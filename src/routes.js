import express from 'express';

import UserController from './controllers/UserControllers';
import AddressControllers from './controllers/AddressControllers';

const routes = express.Router();

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);

routes.get('/users/:user_id/addresses', AddressControllers.index);
routes.post('/users/:user_id/addresses', AddressControllers.store);

export default routes;

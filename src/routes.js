import express from 'express';

import UserController from './controllers/UserControllers';

const routes = express.Router();

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);
export default routes;

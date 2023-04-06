import { Router } from 'express';
import clientControllers from '../controllers/clientsController.js';

const routes = Router();

routes.get('/', clientControllers.showAllClients);

export default routes;
import { Router } from 'express';
import clientControllers from '../controllers/clientsController.js';

const routes = Router();

routes.get('/', clientControllers.showAllClients);
routes.post('/', clientControllers.createClient);
routes.delete('/:id', clientControllers.deleteClient);
routes.put('/:id', clientControllers.updateClient);

export default routes;
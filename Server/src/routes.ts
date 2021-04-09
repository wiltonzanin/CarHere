import { Router } from 'express';

import UsuariosController from './controllers/UsuariosController'

const routes = Router();

routes.get('/usuarios', UsuariosController.index)
routes.get('/usuarios/:id', UsuariosController.show)
routes.post('/usuarios', UsuariosController.create)

export default routes;
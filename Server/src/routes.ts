import { Router } from 'express';
import multer from 'multer';

import UsuariosController from './controllers/UsuariosController'

const routes = Router();
const upload = multer();

routes.get('/usuarios', UsuariosController.index)
routes.get('/usuarios/:id', UsuariosController.show)
routes.post('/usuarios', upload.array('usuario'),UsuariosController.create)

export default routes;
import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import UsuariosController from './controllers/UsuariosController';
import CarrosController from './controllers/CarrosController';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/usuarios', UsuariosController.index)
routes.get('/usuarios/:id', UsuariosController.show)
routes.post('/usuarios', upload.array('usuario'), UsuariosController.create)

routes.post('/carros', upload.array('images'), CarrosController.create)
routes.get('/carros/:id', CarrosController.show)

export default routes;
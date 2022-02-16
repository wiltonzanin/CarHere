import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import UsuariosController from './controllers/UsuariosController';
import CarrosController from './controllers/CarrosController';
import AutonomiaController from './controllers/AutonomiaController';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/usuarios', UsuariosController.index)
routes.get('/usuarios/:id', UsuariosController.show)
routes.post('/usuarios', upload.array('usuario'), UsuariosController.create)

routes.post('/carros', upload.array('images'), CarrosController.create)
routes.get('/carros/:id', CarrosController.show)
routes.get('/carros/detalhes/:id', CarrosController.showListagem)
routes.delete('/carros/delete/:id', CarrosController.delete)

routes.get('/autonomia', AutonomiaController.index)
routes.get('/autonomia/:id', AutonomiaController.show)
routes.get('/autonomia/last/:id', AutonomiaController.last)
routes.post('/autonomia', upload.array('autonomia'), AutonomiaController.create)

export default routes;
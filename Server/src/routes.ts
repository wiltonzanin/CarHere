import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import UsuariosController from './controllers/UsuariosController';
import CarrosController from './controllers/CarrosController';
import ServicoController from './controllers/ServicoController';
import AutonomiaController from './controllers/AutonomiaController';

const routes = Router();
const upload = multer(uploadConfig);


routes.get('/usuarios', UsuariosController.index)//OK
routes.get('/usuarios/:id', UsuariosController.show) //OK
routes.post('/usuarios', upload.array('usuarios'), UsuariosController.create)
// routes.post('/usuarios', UsuariosController.create)

routes.post('/carros', upload.array('images'), CarrosController.create)
routes.get('/carros/:id', CarrosController.show)
routes.get('/carros/detalhes/:id', CarrosController.showListagem)
routes.delete('/carros/delete/:id', CarrosController.delete)

routes.post('/servico', upload.array('servico'), ServicoController.create)
routes.get('/servico/:id', ServicoController.show)
routes.get('/servico/servico/:id', ServicoController.showService)
routes.get('/servico/detalhes/:id', ServicoController.showListagem)
routes.get('/servico/last/:id', ServicoController.last)
routes.delete('/servico/delete/:id', ServicoController.delete)


routes.get('/autonomia', AutonomiaController.index)
routes.get('/autonomia/:id', AutonomiaController.show)
routes.get('/autonomia/last/:id', AutonomiaController.last)
routes.post('/autonomia', upload.array('autonomia'), AutonomiaController.create)

export default routes;
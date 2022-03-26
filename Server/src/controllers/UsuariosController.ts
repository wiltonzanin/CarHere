import { Request, Response} from 'express'
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import Usuarios from '../models/usuarios';
import usuariosView from '../views/usuarios_view'

export default {

    async index(request: Request, response: Response){
        const usuariosRepositorio = getRepository(Usuarios); 

        const usuarios = await usuariosRepositorio.find();

        return response.json(usuarios);
    },

    async show(request: Request, response: Response){
        const { id } = request.params;

        const usuariosRepositorio = getRepository(Usuarios); 

        const usuario = await usuariosRepositorio.findOneOrFail(id);

        return response.status(302).json(usuariosView.render(usuario));
    },

    async create(request: Request, response: Response) {
        const nome1 = JSON.stringify(request.body); 
        const {
            nome,
            email,
            senha,
        } = request.body;
    
        const usuariosRepositorio = getRepository(Usuarios);

        const data = {
            nome,
            email,
            senha,
        };


        const schema = Yup.object().shape({
            nome: Yup.string().required(),
            //cpf: Yup.number().max(11).required(),
            email: Yup.string().required().email(),
            senha: Yup.string().required(),
            // celular: Yup.number().max(11).required(),
            // cep: Yup.number().max(20),
            // data_nascimento: Yup.date(),
            // genero: Yup.string()
        });

        await schema.validate(data, {
            abortEarly: false,
        });
    
        const usuario = usuariosRepositorio.create(data);
    
        await usuariosRepositorio.save(usuario);

        return response.status(201).send(usuario);
    }
};
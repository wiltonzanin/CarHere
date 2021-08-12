import { Request, Response } from 'express'
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import Usuarios from '../models/usuarios';
import Carros from '../models/carro';
import carrosView from '../views/carros_view'

export default {

    async index(request: Request, response: Response) {
        const carrosRepositorio = getRepository(Carros);

        const carros = await carrosRepositorio.find();

        return response.json(carros);
    },

    async show(request: Request, response: Response) {
        const { id } = request.params;

        const carrosRepositorio = getRepository(Carros).createQueryBuilder('carro').where('carro.usuario = :id', { id });

        const carros = await carrosRepositorio.getMany();

        return response.status(302).json(carrosView.renderMany(carros));
    },

    async create(request: Request, response: Response) {
        const {
            marca,
            modelo,
            motorizacao,
            ano,
            combustivel,
            fotoCarro
        } = request.body;

        const carrosRepositorio = getRepository(Carros);

        const usuario = await getRepository(Usuarios).findOneOrFail(1); // Busca via Id FIXO POR ENQUANTO

        const data = {
            marca,
            modelo,
            motorizacao,
            ano,
            combustivel,
            fotoCarro,
            usuario
        };

        const schema = Yup.object().shape({
            marca: Yup.string().required(),
            modelo: Yup.string().required(),
            motorizacao: Yup.string().required(),
            ano: Yup.number().required(),
            combustivel: Yup.string(),
            fotoCarro: Yup.string()
        });

        await schema.validate(data, {
            abortEarly: false,
        });

        const carro = carrosRepositorio.create(data);

        await carrosRepositorio.save(carro);

        return response.status(201).send(carro);
    }
};
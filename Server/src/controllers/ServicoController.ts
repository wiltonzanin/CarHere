import { Request, Response } from 'express'
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import Servico from '../models/servico';
import servicoview from '../views/servico_view';

export default {

    async index(request: Request, response: Response) {
        const servicoRepositorio = getRepository(Servico);

        const servico = await servicoRepositorio.find();

        return response.json(servico);
        
    },

    async show(request: Request, response: Response) {
        const { id } = request.params;

        const servicoRepositorio = getRepository(Servico).createQueryBuilder('servico')
        .where('servico.id_carro = :id', { id });

        const servico = await servicoRepositorio.getMany();

        return response.json(servicoview.renderMany(servico));
    },

    async last(request: Request, response: Response) {
        const { id } = request.params;

        const servicoRepositorio = getRepository(Servico).createQueryBuilder('servico')
        .where('servico.id_carro = :id', { id })
        .getOne();

        const servico = await servicoRepositorio;

        return response.json(servico);
    },

    async create(request: Request, response: Response) {
        const {
            nome,
            carro,
            local,
            datafor,
            valor,
            descricao
        } = request.body;

        const servicoRepositorio = getRepository(Servico);

        const data = {
            nome,
            carro,
            local,
            datafor,
            valor,
            descricao
        };

        console.log(data)

        const schema = Yup.object().shape({
            nome: Yup.string().required(),
            local: Yup.string().required(),
            datafor: Yup.string().required(),
            valor: Yup.number().required(),
            descricao: Yup.string().required(),
        });

        await schema.validate(data, {
            abortEarly: false,
        });

        const servico = servicoRepositorio.create(data);

        await servicoRepositorio.save(servico);

        return response.status(201).send(servico);
    },

    

    async delete(request: Request, response: Response) {

        const { id } = request.params;

        const servicoRepositorio = getRepository(Servico)

        try {
            await servicoRepositorio.delete(id)
            console.log("Deu bom")
        } catch {
            console.log("Não vai dar não :c")
        }

        return response.status(200).send();
    },
};
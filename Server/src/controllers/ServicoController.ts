import { Request, Response } from 'express'
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import Usuarios from '../models/usuarios';
import Servico from '../models/servico';
import servicoview from '../views/servico_view';
import Carro from '../models/carro';
import carros_view from '../views/carros_view';


export default {

    async index(request: Request, response: Response) {
        const servicoRepositorio = getRepository(Servico);

        const servico = await servicoRepositorio.find();

        return response.json(servico);
        
    },

    async show(request: Request, response: Response) {
        const { id } = request.params;

        const servicoRepositorio = getRepository(Servico).createQueryBuilder('servico')
        .leftJoinAndSelect("servico.carros","carro.id_carro")
        .where('servico.id_usuario = :id', { id });

        const servico = await servicoRepositorio.getMany();

        return response.json(servicoview.renderMany(servico));
    },

    async last(request: Request, response: Response) {
        const { id } = request.params;

        const servicoRepositorio = getRepository(Servico).createQueryBuilder('servico')
        .where('servico.id_carro = :id', { id })
        .orderBy('datafor', 'DESC')
        .limit(2);

        const servico = await servicoRepositorio.getMany();

        return response.json(servicoview.renderMany(servico));
    },

    async showListagem(request: Request, response: Response) {

        const { id } = request.params;

        const servicoRepositorio = getRepository(Servico)

        const servico = await servicoRepositorio.findOneOrFail(id)

        return response.json(servicoview.render(servico));
    },
    
    async showService(request: Request, response: Response) {
        const { id } = request.params;

        const servicosRepositorio = getRepository(Servico).createQueryBuilder('servico')
        .leftJoinAndSelect("servico.carros", "carros.id_carro")
        .where('servico.id_servico = :id', { id });

        const servicos = await servicosRepositorio.getMany();

        return response.json(servicoview.renderMany(servicos));

        
    },
   
/*
 
    async showCarro_Servico(request: Request, response: Response) {

        const { id } = request.params;

        const carrosRepositorio = getRepository(Carros).createQueryBuilder('carro')
        .leftJoinAndSelect("carro.id_carro", "servico.id_carro")
        .where('servico.id_servico = :id', { id });

        const carros = await carrosRepositorio.getMany();

        return response.json(carrosView.renderMany(carros));

    },
*/
    async create(request: Request, response: Response) {
        const {
            nome,
            local,
            quilometragem,
            datafor,
            ValorServico,
            descricao,
            statusServico,
            id_carro,
        } = request.body;

        const servicoRepositorio = getRepository(Servico);

        const id_usuario = await getRepository(Usuarios).findOneOrFail(1); // Busca via Id FIXO POR ENQUANTO

        const data = {
            nome,
            local,
            quilometragem,
            datafor,
            ValorServico,
            descricao,
            statusServico,
            id_carro,
            id_usuario,
            
        };

        const schema = Yup.object().shape({
            nome: Yup.string().required(),
            datafor: Yup.string().required(),
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

        try {
            /*
        const servicosRepositorio = getRepository(Servico).createQueryBuilder('servico')
        .delete()
        .where('servico.id_servico = :id', { id })
        .execute();
*/

            console.log("Deu bom")
        } catch {
            console.log("Não vai dar não :c")
        }

        return response.status(200).send();
    },

};
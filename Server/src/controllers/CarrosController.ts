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

        const carrosRepositorio = getRepository(Carros).createQueryBuilder('carro')
        .leftJoinAndSelect("carro.images", "imagens_carros.id_carro")
        .where('carro.usuario = :id', { id });

        const carros = await carrosRepositorio.getMany();

        return response.json(carrosView.renderMany(carros));
    },

    async showService(request: Request, response: Response) {
        const { id } = request.params;

        const carrosRepositorio = getRepository(Carros).createQueryBuilder('carro')
        .leftJoinAndSelect("carro.id_carro", "servico.id_carro")
        .where('servico.id_servico = :id', { id });

        const carros = await carrosRepositorio.getMany();

        return response.json(carrosView.renderMany(carros));
    },

    async showListagem(request: Request, response: Response) {

        const { id } = request.params;

        const carroRepositorio = getRepository(Carros)

        const carro = await carroRepositorio.findOneOrFail(id, {
            relations: ['images']
        })

        return response.json(carrosView.render(carro));
    },
   
    async create(request: Request, response: Response) {
        const {
            marca,
            modelo,
            motorizacao,
            ano,
            combustivel
        } = request.body;

        const carrosRepositorio = getRepository(Carros);

        const requestImages = request.files as Express.Multer.File[]
        const images = requestImages.map(image => {
            return { path: image.filename }
        })

        const usuario = await getRepository(Usuarios).findOneOrFail(1); // Busca via Id FIXO POR ENQUANTO

        const data = {
            marca,
            modelo,
            motorizacao,
            ano,
            combustivel,
            images,
            usuario
        };

        console.log(data)

        const schema = Yup.object().shape({
            marca: Yup.string().required(),
            modelo: Yup.string().required(),
            motorizacao: Yup.string().required(),
            ano: Yup.number().required(),
            combustivel: Yup.string(),
            imagesPath: Yup.array(
                Yup.object().shape({
                path: Yup.string().required()
            }))
        });

        await schema.validate(data, {
            abortEarly: false,
        });

        const carro = carrosRepositorio.create(data);

        await carrosRepositorio.save(carro);

        return response.status(201).send(carro);
    },

    async delete(request: Request, response: Response) {

        const { id } = request.params;

        const carroRepositorio = getRepository(Carros)

        try {
            await carroRepositorio.delete(id)
            console.log("Deu bom")
        } catch {
            console.log("Não vai dar não :c")
        }

        return response.status(200).send();
    },
};
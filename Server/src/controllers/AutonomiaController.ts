import { Request, Response} from 'express'
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import Autonomia from '../models/autonomia';
import autonomiaView from '../views/autonomia_view';

export default {

    async index(request: Request, response: Response){
        const autonomiaRepositorio = getRepository(Autonomia); 

        const autonomia = await autonomiaRepositorio.find();

        return response.json(autonomia);
    },

    async show(request: Request, response: Response) {
        const { id } = request.params;

        const autonomiaRepositorio = getRepository(Autonomia).createQueryBuilder('autonomia')
        .where('autonomia.id_carro = :id', { id });

        const autonomia = await autonomiaRepositorio.getMany();

        return response.json(autonomiaView.renderMany(autonomia));
    },

    async last(request: Request, response: Response) {
        const { id } = request.params;

        const autonomiaRepositorio = getRepository(Autonomia).createQueryBuilder('autonomia')
        .where('autonomia.id_carro = :id', { id })
        .orderBy('id_autonomia', 'DESC')
        .getOne();

        const autonomia = await autonomiaRepositorio;

        return response.json(autonomia);
    },

    async create(request: Request, response: Response) {

        const {
            kmInicial,
            kmFinal,
            tipoCombustivel,
            litroAbastecidos,
            percurso,
            mediaConsumo,
            carro
        } = request.body;
    
        const autonomiaRepositorio = getRepository(Autonomia);

        const data = {
            kmInicial,
            kmFinal,
            tipoCombustivel,
            litroAbastecidos,
            percurso,
            mediaConsumo,
            carro
        };
        
        const schema = Yup.object().shape({
            kmInicial: Yup.number().required(),
            kmFinal: Yup.number().required(),
            tipoCombustivel: Yup.string().required(),
            litroAbastecidos: Yup.number().required(),
        });

        await schema.validate(data, {
            abortEarly: false,
        });
    
        console.log("console DATA: ", data)

        const autonomia = autonomiaRepositorio.create(data);
    
        console.log("console autonomia: ", autonomia)

        await autonomiaRepositorio.save(autonomia);
    
        return response.status(201).send(autonomia);
    }
};
import CarrosController from '../controllers/CarrosController';
import Servico from '../models/servico';
import carros_view from './carros_view';
import carrosview from './carros_view';

export default {
    render(servico: Servico){
        return{
            id: servico.id_servico,
            nome: servico.nome,
            local: servico.local,
            quilometragem: servico.quilometragem,
            datafor: servico.datafor,
            ValorServico: servico.ValorServico,
            descricao: servico.descricao,
            statusServico: servico.statusServico,
            id_usuario: servico.usuario,
            carro: servico.carros,
        };
    },

    renderMany(servico: Servico[]){
        return servico.map(servico => this.render(servico));
    },   
};


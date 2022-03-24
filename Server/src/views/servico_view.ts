import Servico from '../models/servico';

export default {
    render(servico: Servico){
        return{
            id: servico.id_servico,
            nome: servico.nome,
            id_carro: servico.carro,
            local: servico.local,
            datafor: servico.datafor,
            valor: servico.valor,
            descricao: servico.descricao,
        };
    },

    renderMany(servico: Servico[]){
        return servico.map(servico => this.render(servico));
    }
};
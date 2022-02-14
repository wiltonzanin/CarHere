import Autonomia from '../models/autonomia';

export default {
    render(autonomia: Autonomia){
        return{
            id: autonomia.id_autonomia,
            kmInicial: autonomia.kmInicial,
            kmFinal: autonomia.kmFinal,
            litrosAbastecidos: autonomia.litroAbastecidos,
            tipoCombustivel: autonomia.tipoCombustivel,
            percurso: autonomia.percurso,
            mediaConsumo: autonomia.mediaConsumo,
            id_carro: autonomia.carro
        };
    },

    renderMany(autonomia: Autonomia[]){
        return autonomia.map(autonomia => this.render(autonomia));
    }
};
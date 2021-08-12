import Carros from '../models/carro'

export default {
    render(carro: Carros){
        return{
            id: carro.id_carro,
            marca: carro.marca,
            modelo: carro.modelo,
            motorizacao: carro.motorizacao,
            ano: carro.ano,
            combustivel: carro.combustivel,
            fotoCarro: carro.fotoCarro,
            id_usuario: carro.usuario
        };
    },

    renderMany(carros: Carros[]){
        return carros.map(carro => this.render(carro));
    }
};
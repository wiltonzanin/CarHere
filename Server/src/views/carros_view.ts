import Carros from '../models/carro';
import imagens_carrosView from './imagens_carros_view'

export default {
    render(carro: Carros){
        return{
            id: carro.id_carro,
            marca: carro.marca,
            modelo: carro.modelo,
            motorizacao: carro.motorizacao,
            ano: carro.ano,
            combustivel: carro.combustivel,
            images: imagens_carrosView.renderMany(carro.images),
            id_usuario: carro.usuario
        };
    },

    renderMany(carros: Carros[]){
        return carros.map(carro => this.render(carro));
    },

};
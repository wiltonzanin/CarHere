import Imagens_carro from '../models/imagens_carro'

export default {
    render(image: Imagens_carro) {
        return {
            id: image.id,
            url: `http:// 192.168.0.37:3333/uploads/${image.path}`, //Alterar para variavéis ambiente
        }
    },

    renderMany(images: Imagens_carro[]) {
        return images.map(image => this.render(image))
    }
}
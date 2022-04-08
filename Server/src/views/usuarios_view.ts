import Usuarios from '../models/usuarios'

export default {
    render(usuarios: Usuarios){
        return{
            id: usuarios.id_usuario,
            nome: usuarios.nome,
            //cpf: usuarios.cpf,
            email: usuarios.email,
            senha: usuarios.senha,
            // celular: usuarios.celular,
            // cep: usuarios.cep,
            // data_nascimento: usuarios.data_nascimento,
            // genero: usuarios.genero
        };
    },
};
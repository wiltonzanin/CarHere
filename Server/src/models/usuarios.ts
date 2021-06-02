import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('usuarios')
export default class Usuarios {
    @PrimaryGeneratedColumn('increment')
    id_usuario: number;

    @Column()
    nome: string;

    // @Column()
    // cpf: number;

    @Column()
    email: string;

    @Column()
    senha: string;

    // @Column()
    // celular: number;

    // @Column()
    // cep: number;

    // @Column()
    // data_nascimento: number;

    // @Column()
    // genero: string;
}
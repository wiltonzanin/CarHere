import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';

import Carro from './carro'
import Servico from './servico'

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

    @OneToMany(() => Carro, carro => carro.usuario, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({ name: 'id_usuario'})
    carros: Carro[];

    @OneToMany(() => Servico, servico => servico.usuario, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({ name: 'id_usuario'})
    servico: Servico[];
}
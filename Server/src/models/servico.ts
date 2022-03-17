import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';

import Carro from './carro';


@Entity('servico')
export default class Servico {
    @PrimaryGeneratedColumn('increment')
    id_servico: number;

    @Column()
    nome: string;

    @Column()
    id_carro: number;

    @Column()
    local: string;

    @Column()
    datafor: string;

    @Column()
    valor: number;

    @Column()
    descricao: string;

    @OneToMany(() => Carro, carro => carro.servico, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({ name: 'id_carro' })
    carro: Carro[]
    
}
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';

import Carro from './carro';
import Usuario from './usuarios'


@Entity('servico')
export default class Servico {
    @PrimaryGeneratedColumn('increment')
    id_servico: number;

    @Column()
    nome: string;

    @Column()
    local: string;

    @Column()
    quilometragem: number;

    @Column()
    datafor: string;

    @Column()
    ValorServico: number;

    @Column()
    descricao: string;

    @Column()
    statusServico: number;

    @Column()
    id_carro: number

    @Column()
    id_usuario: number

//////////////////////////////////////////////////////////////////////////////

    @ManyToOne(() => Carro, carro => carro.servico, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({ name: 'id_carro' })
    carros: Carro[]

//////////////////////////////////////////////////////////////////////////////

    @ManyToOne(() => Usuario, usuario => usuario.servico, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({ name: 'id_usuario' })
    usuario: Usuario;

//////////////////////////////////////////////////////////////////////////////
 

}